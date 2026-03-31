# -*- coding: UTF-8 -*-

import airbot_sdk
from airbot_sdk.Airbot import AirbotRobot
from airbot_sdk.configs.config import DosW1Config
from airbot_sdk.utils.transformations import quaternion_matrix, quaternion_from_matrix

import json
import numpy as np
import pyrealsense2 as rs
import threading
import time
from video_util import H264VideoWriter, DepthVideoWriter
from pdd_core.data.index import generate_index_file
from pdd_core.indexed import indexed_jsonline_open
from pdd_misc.record import Meta, Recorder
from collections import deque
import os
import sys
import tty
import termios
from pathlib import Path
from config import DosW1Config, DataCollectionConfig
from fastapi import FastAPI, HTTPException
import uvicorn
from pydantic import BaseModel
import requests
from fastapi import APIRouter, FastAPI, Response, Query, Body, WebSocket, WebSocketDisconnect
from fastapi.responses import JSONResponse, FileResponse, HTMLResponse
import cv2
import pickle
import traceback

app = FastAPI()
dos_config = DosW1Config()
data_config = DataCollectionConfig()

global LEFT_JOINT
global RIGHT_JOINT
global LEFT_GRIPPER
global RIGHT_GRIPPER
global LEAD_LEFT_JOINT
global LEAD_RIGHT_JOINT
global LEAD_LEFT_GRIPPER
global LEAD_RIGHT_GRIPPER
global CONTROL_MODE
global SET_MODE
global SEND_LEFT_IMG
global SEND_RIGHT_IMG
global SEND_FRONT_IMG
global RECEIVE_ACTION_LIST
global HISTORY_ACTION_QUEUE
global IN_ROLLBACK

LEFT_JOINT = []
RIGHT_JOINT = []
LEFT_GRIPPER = -1.0
RIGHT_GRIPPER = -1.0
LEAD_LEFT_JOINT = []
LEAD_RIGHT_JOINT = []
LEAD_LEFT_GRIPPER = -1.0
LEAD_RIGHT_GRIPPER = -1.0
CONTROL_MODE = -2
SET_MODE = 0 # 0:stop;1:auto;2:manual;3:roll back;10:start record;11:stop record
SEND_LEFT_IMG = []
SEND_RIGHT_IMG = []
SEND_FRONT_IMG = []
RECEIVE_ACTION_LIST = []
HISTORY_ACTION_QUEUE = []
IN_ROLLBACK = False
active_connections = []
STATE_LOCK = threading.Lock()
ACTION_HORIZON = 50
ACTION_DIM = 14
OBSERVATION_TIMEOUT_SECONDS = 5.0
OBS_ID_COUNTER = 0
CURRENT_OBS_ID = None
CURRENT_OBS_TIMESTAMP = 0.0
WAITING_FOR_ACTION = False

class CollectMode(BaseModel):
    collect_mode: int

class InferAction(BaseModel):
    action_list: list
    obs_id: int
    action_horizon: int | None = None
    action_source: str | None = None
    client_timestamp: float | None = None
    dry_run: bool = False


def _empty_infer_response() -> Response:
    return Response(content=pickle.dumps({}), media_type="application/octet-stream")


def _reset_inference_state(*, clear_queue: bool) -> None:
    global CURRENT_OBS_ID
    global CURRENT_OBS_TIMESTAMP
    global WAITING_FOR_ACTION
    global RECEIVE_ACTION_LIST

    CURRENT_OBS_ID = None
    CURRENT_OBS_TIMESTAMP = 0.0
    WAITING_FOR_ACTION = False
    if clear_queue:
        RECEIVE_ACTION_LIST = []


def _validate_action_chunk(action_list) -> list[list[float]]:
    if len(action_list) != ACTION_HORIZON:
        raise ValueError(
            f"Expected action_list length {ACTION_HORIZON}, got {len(action_list)}"
        )

    normalized = []
    for index, action in enumerate(action_list):
        if len(action) != ACTION_DIM:
            raise ValueError(
                f"Expected action dim {ACTION_DIM} at step {index}, got {len(action)}"
            )
        normalized.append([float(value) for value in action])
    return normalized

@app.get("/state")
def get_follow_robot_state():
    global LEFT_JOINT
    global RIGHT_JOINT
    global LEFT_GRIPPER
    global RIGHT_GRIPPER
    # print (LEFT_JOINT)
    # print (RIGHT_JOINT)
    ret_dict = {
        "follow_left_arm": LEFT_JOINT,
        "follow_right_arm": RIGHT_JOINT,
        "follow_left_gripper": LEFT_GRIPPER,
        "follow_right_gripper": RIGHT_GRIPPER,
        "lead_left_arm": LEAD_LEFT_JOINT,
        "lead_right_arm": LEAD_RIGHT_JOINT,
        "lead_left_gripper": LEAD_LEFT_GRIPPER,
        "lead_right_gripper": LEAD_RIGHT_GRIPPER

    }
    return {"code": 200, "msg": "success", "data": ret_dict}


@app.get("/runtime_state")
def get_runtime_state():
    global CONTROL_MODE
    global SET_MODE
    global CURRENT_OBS_ID
    global WAITING_FOR_ACTION
    global RECEIVE_ACTION_LIST
    global LEFT_JOINT
    global RIGHT_JOINT
    global LEFT_GRIPPER
    global RIGHT_GRIPPER
    with STATE_LOCK:
        return {
            "code": 200,
            "msg": "success",
            "data": {
                "control_mode": CONTROL_MODE,
                "set_mode": SET_MODE,
                "current_obs_id": CURRENT_OBS_ID,
                "waiting_for_action": WAITING_FOR_ACTION,
                "pending_actions": len(RECEIVE_ACTION_LIST),
                "state_14d": LEFT_JOINT + [LEFT_GRIPPER] + RIGHT_JOINT + [RIGHT_GRIPPER],
            },
        }

@app.get("/mode")
def get_cotrol_mode_state():
    global CONTROL_MODE
    return {"code": 200, "msg": "success", "data": CONTROL_MODE}

@app.post("/mode")
def set_control_mode(item: CollectMode):
    global SET_MODE
    mode = int(item.collect_mode)
    if mode == 2 and not dos_config.USE_LEAD_ARMS:
        return JSONResponse(
            status_code=409,
            content={"code": 409, "msg": "manual mode unavailable without lead arms", "data": mode},
        )
    with STATE_LOCK:
        if mode in (0, 1, 2, 3, 11):
            _reset_inference_state(clear_queue=True)
        SET_MODE = mode
    return {"code": 200, "msg": "success", "data": SET_MODE}

@app.get("/infer_state")
def get_state():
    global SEND_LEFT_IMG
    global SEND_RIGHT_IMG
    global SEND_FRONT_IMG
    global LEFT_JOINT
    global RIGHT_JOINT
    global LEFT_GRIPPER
    global RIGHT_GRIPPER
    global CONTROL_MODE
    global RECEIVE_ACTION_LIST
    now = time.time()
    with STATE_LOCK:
        global OBS_ID_COUNTER
        global CURRENT_OBS_ID
        global CURRENT_OBS_TIMESTAMP
        global WAITING_FOR_ACTION

        if WAITING_FOR_ACTION and now - CURRENT_OBS_TIMESTAMP > OBSERVATION_TIMEOUT_SECONDS:
            logging.warning("Observation %s timed out waiting for action; releasing token", CURRENT_OBS_ID)
            _reset_inference_state(clear_queue=False)

        if CONTROL_MODE != 1 or len(RECEIVE_ACTION_LIST) != 0 or WAITING_FOR_ACTION:
            return _empty_infer_response()

        if not (
            isinstance(SEND_FRONT_IMG, np.ndarray)
            and SEND_FRONT_IMG.size > 0
            and isinstance(SEND_LEFT_IMG, np.ndarray)
            and SEND_LEFT_IMG.size > 0
            and isinstance(SEND_RIGHT_IMG, np.ndarray)
            and SEND_RIGHT_IMG.size > 0
        ):
            return _empty_infer_response()

        state_14d = LEFT_JOINT + [LEFT_GRIPPER] + RIGHT_JOINT + [RIGHT_GRIPPER]
        if len(state_14d) != ACTION_DIM:
            return _empty_infer_response()

        front_img = SEND_FRONT_IMG.copy()
        left_img = SEND_LEFT_IMG.copy()
        right_img = SEND_RIGHT_IMG.copy()

        OBS_ID_COUNTER += 1
        CURRENT_OBS_ID = OBS_ID_COUNTER
        CURRENT_OBS_TIMESTAMP = now
        WAITING_FOR_ACTION = True
        obs_id = CURRENT_OBS_ID
        mode = CONTROL_MODE
        pending_actions = len(RECEIVE_ACTION_LIST)

    try:
        image_size = (640, 480)
        images_dict = {
            "high": cv2.imencode(".png", cv2.resize(front_img, image_size))[-1].tobytes(),
            "left_hand": cv2.imencode(".png", cv2.resize(left_img, image_size))[-1].tobytes(),
            "right_hand": cv2.imencode(".png", cv2.resize(right_img, image_size))[-1].tobytes(),
        }
    except Exception:
        with STATE_LOCK:
            if CURRENT_OBS_ID == obs_id:
                _reset_inference_state(clear_queue=False)
        logging.exception("Failed to encode inference images")
        return _empty_infer_response()

    state_data = {
        "obs_id": obs_id,
        "timestamp": now,
        "mode": mode,
        "pending_actions": pending_actions,
        "state": "GOOD",
        "state_14d": state_14d,
        "action": state_14d,
        "action_horizon": ACTION_HORIZON,
        "images": images_dict,
    }
    return Response(content=pickle.dumps(state_data), media_type="application/octet-stream")

@app.websocket("/ws/images")
async def websocket_images(websocket: WebSocket):
    global SEND_LEFT_IMG
    global SEND_RIGHT_IMG
    global SEND_FRONT_IMG

    await websocket.accept()
    active_connections.append(websocket)
    print(f"WebSocket连接建立，当前连接数: {len(active_connections)}")

    frame_count = 0

    try:
        while True:
            message = await websocket.receive_text()

            if message == "request_frame" or message.startswith("{"):
                def is_valid_image(img):
                    return img is not None and not (isinstance(img, list) and len(img) == 0) and (isinstance(img, np.ndarray) and img.size > 0)

                has_valid_image = (is_valid_image(SEND_LEFT_IMG) or
                                   is_valid_image(SEND_RIGHT_IMG) or
                                   is_valid_image(SEND_FRONT_IMG))

                if not has_valid_image:
                    empty_bytes = b''
                    binary_packet = (
                        len(empty_bytes).to_bytes(4, 'little') + empty_bytes +
                        len(empty_bytes).to_bytes(4, 'little') + empty_bytes +
                        len(empty_bytes).to_bytes(4, 'little') + empty_bytes
                    )
                    await websocket.send_bytes(binary_packet)
                    continue

                image_size = (640, 480)
                quality = 85

                try:
                    def encode_image(img, image_size, quality):
                        if is_valid_image(img):
                            img_resized = cv2.resize(img, image_size)
                            _, buffer = cv2.imencode('.jpg', img_resized, [cv2.IMWRITE_JPEG_QUALITY, quality])
                            return buffer.tobytes()
                        else:
                            return b''

                    # SEND_FRONT_IMG -> high
                    high_bytes = encode_image(SEND_FRONT_IMG, image_size, quality)

                    # SEND_LEFT_IMG -> left_hand
                    left_bytes = encode_image(SEND_LEFT_IMG, image_size, quality)

                    # SEND_RIGHT_IMG -> right_hand
                    right_bytes = encode_image(SEND_RIGHT_IMG, image_size, quality)

                    binary_packet = (
                        len(high_bytes).to_bytes(4, 'little') + high_bytes +
                        len(left_bytes).to_bytes(4, 'little') + left_bytes +
                        len(right_bytes).to_bytes(4, 'little') + right_bytes
                    )

                    await websocket.send_bytes(binary_packet)
                    frame_count += 1

                except Exception as e:
                    print(f"图像编码错误: {e}")
                    empty_bytes = b''
                    binary_packet = (
                        len(empty_bytes).to_bytes(4, 'little') + empty_bytes +
                        len(empty_bytes).to_bytes(4, 'little') + empty_bytes +
                        len(empty_bytes).to_bytes(4, 'little') + empty_bytes
                    )
                    await websocket.send_bytes(binary_packet)

    except WebSocketDisconnect:
        if websocket in active_connections:
            active_connections.remove(websocket)
        print(f"WebSocket连接断开，当前连接数: {len(active_connections)}")
    except Exception as e:
        print(f"WebSocket错误: {e}")
        if websocket in active_connections:
            active_connections.remove(websocket)

@app.post("/infer_action")
def get_action(item:InferAction):
    global RECEIVE_ACTION_LIST
    global HISTORY_ACTION_QUEUE
    try:
        normalized_actions = _validate_action_chunk(item.action_list)
    except ValueError as exc:
        return JSONResponse(
            status_code=400,
            content={"code": 400, "msg": str(exc), "data": None},
        )

    if item.action_horizon is not None and item.action_horizon != ACTION_HORIZON:
        return JSONResponse(
            status_code=400,
            content={
                "code": 400,
                "msg": f"Expected action_horizon={ACTION_HORIZON}, got {item.action_horizon}",
                "data": None,
            },
        )

    with STATE_LOCK:
        if CONTROL_MODE != 1:
            return JSONResponse(
                status_code=409,
                content={"code": 409, "msg": "robot is not in model mode", "data": None},
            )
        if len(RECEIVE_ACTION_LIST) != 0:
            return JSONResponse(
                status_code=409,
                content={"code": 409, "msg": "pending action chunk still executing", "data": None},
            )
        if not WAITING_FOR_ACTION or CURRENT_OBS_ID is None:
            return JSONResponse(
                status_code=409,
                content={"code": 409, "msg": "no outstanding observation token", "data": None},
            )
        if item.obs_id != CURRENT_OBS_ID:
            return JSONResponse(
                status_code=409,
                content={
                    "code": 409,
                    "msg": f"stale obs_id {item.obs_id}, expected {CURRENT_OBS_ID}",
                    "data": None,
                },
            )

        accepted_obs_id = CURRENT_OBS_ID
        if item.dry_run:
            _reset_inference_state(clear_queue=False)
            return {
                "code": 200,
                "msg": "shadow action accepted",
                "data": {"obs_id": accepted_obs_id, "queued_actions": 0, "dry_run": True},
            }

        current_state = np.asarray(
            LEFT_JOINT + [LEFT_GRIPPER] + RIGHT_JOINT + [RIGHT_GRIPPER],
            dtype=np.float32,
        )
        first_delta = np.asarray(normalized_actions[0], dtype=np.float32) - current_state
        last_delta = np.asarray(normalized_actions[-1], dtype=np.float32) - current_state
        RECEIVE_ACTION_LIST = normalized_actions
        HISTORY_ACTION_QUEUE.append(normalized_actions[-1])
        _reset_inference_state(clear_queue=False)

    logging.info(
        "Accepted model chunk obs_id=%s queued=%d first_delta_max_abs=%.5f last_delta_max_abs=%.5f",
        accepted_obs_id,
        len(normalized_actions),
        float(np.max(np.abs(first_delta))),
        float(np.max(np.abs(last_delta))),
    )

    return {
        "code": 200,
        "msg": "success",
        "data": {
            "obs_id": accepted_obs_id,
            "queued_actions": len(normalized_actions),
            "action_source": item.action_source,
            "client_timestamp": item.client_timestamp,
        },
    }

UI_STATIC_DIR = Path(os.path.join(os.path.dirname(__file__), "static", "ui"))
@app.get("/ui")
async def index_page():
    page_path = UI_STATIC_DIR / "index.html"
    if page_path.exists():
        with open(page_path, "r", encoding="utf-8") as f:
            return HTMLResponse(content=f.read())
    return {"error": "Page not found"}

@app.get("/ui/{path:path}")
async def spa_routes(path: str):
        file_path = UI_STATIC_DIR / path
        
        if file_path.is_file():
            return FileResponse(file_path)

        index_path = UI_STATIC_DIR / "index.html"
        if index_path.exists():
            return FileResponse(index_path)
        
        raise HTTPException(status_code=404, detail="File not found")

def start_api():
    uvicorn.run(app, host = '0.0.0.0', port=8000, access_log=False)

def getch():
    fd = sys.stdin.fileno()
    old_settings = termios.tcgetattr(fd)
    try:
        tty.setraw(fd)
        ch = sys.stdin.read(1)
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
        return ch

import logging
logging.basicConfig(
    level = logging.INFO,
    format="[%(asctime)s] [%(levelname)s] %(message)s",
    datefmt = "%Y-%m-%d %H:%M:%S"
)

meta_template = None

def check_far(left_lead_joint, left_follow_joint, right_lead_joint, right_follow_joint):
    factor = 0.07 / 0.048
    joint_threshold = 0.1
    gripper_threshold = 0.005
    left_lead_joint = np.array(left_lead_joint)
    left_follow_joint = np.array(left_follow_joint)
    right_lead_joint = np.array(right_lead_joint)
    right_follow_joint = np.array(right_follow_joint)
    
    left_joint_diff = np.abs(left_lead_joint[:6] - left_follow_joint[:6])
    left_joint_diff_idx = np.where(left_joint_diff - joint_threshold > 0)
    right_joint_diff = np.abs(right_lead_joint[:6] - right_follow_joint[:6])
    right_joint_diff_idx = np.where(right_joint_diff - joint_threshold > 0)

    left_joint_diff_list = left_joint_diff_idx[0].tolist()
    if np.abs(factor * left_lead_joint[6] - left_follow_joint[6]) > gripper_threshold:
        left_joint_diff_list.append(7)
    right_joint_diff_list = right_joint_diff_idx[0].tolist()
    if np.abs(factor * right_lead_joint[6] - right_follow_joint[6]) > gripper_threshold:
        right_joint_diff_list.append(7)
    return left_joint_diff_list, right_joint_diff_list
    

class Robot:
    def __init__(self):
        self.robot = AirbotRobot(dos_config)

    def connect(self):
        pass

    def disconnect(self):
        self.robot.__del__()

    def __enter__(self):
        self.connect()
        return self

    def __exit__(self, *args, **kwargs):
        self.disconnect()

    def get_joint_pos(self):
        timestamp = time.time()
        left_pos, left_eef_pos = self.robot.left_get_joint()[:6], self.robot.left_get_joint()[6]
        left_end_pose = self.robot.left_get_pose()[:7]

        right_pos, right_eef_pos = self.robot.right_get_joint()[:6], self.robot.right_get_joint()[6]
        right_end_pose = self.robot.right_get_pose()[:7]
        
        return {
            'left_arm': {
                'joint_positions': left_pos[::],
                'ee_positions': left_end_pose[::],
                'gripper': left_eef_pos,
                'timestamp': timestamp
            },
            'right_arm': {
                'joint_positions': right_pos[::],
                'ee_positions': right_end_pose[::],
                'gripper': right_eef_pos,
                'timestamp': timestamp
            },
            'base': {
                'left_v': 0.0,
                'right_v': 1.0,
                'timestamp': timestamp
            }
        }

class RealsenseCamera:
    def __init__(self, serial_number, save=True, vw_path='./', sensor_name='cam'):
        self.serial_number = serial_number
        self.frame = None
        self.ready = False
        self.running = False
        self.index = 0
        self.task = None
        self.pipeline = None
        self.config = None
        self.save = save
        self.color_vw = None
        self.depth_vw = None
        self.color_timestamp_file = None
        self.depth_timestamp_file = None
        try:
            if save:
                if not os.path.exists(vw_path):
                    os.makedirs(vw_path)
                self.color_vw = H264VideoWriter(os.path.join(vw_path, f"{sensor_name}_rgb.mp4"), 640, 480, 30, "bgr24")
                self.depth_vw = DepthVideoWriter(os.path.join(vw_path, f"{sensor_name}_depth.mkv"), 640, 480, 30)
                self.color_timestamp_file = indexed_jsonline_open(os.path.join(vw_path, f"{sensor_name}_rgb.mp4.jsonl"), "w")
                self.depth_timestamp_file = indexed_jsonline_open(os.path.join(vw_path, f"{sensor_name}_depth.mkv.jsonl"), "w")
            self.pipeline = rs.pipeline()
            self.config = rs.config()
            self.config.enable_device(serial_number)
            self.config.enable_stream(rs.stream.color, 640, 480, rs.format.bgr8, 30)
            self.config.enable_stream(rs.stream.depth, 640, 480, rs.format.z16, 30)
            self.ready = True
        except Exception as e:
            logging.error(f"Failed to initialize camera {self.serial_number}: {e}")

    def start(self):
        if not self.ready:
            logging.error(f"Camera {self.serial_number} is not ready")
            raise Exception("Camera not ready")
        try:
            self.pipeline.start(self.config).get_device().hardware_reset()
            logging.info(f"Started camera {self.serial_number}")
        except Exception as e:
            logging.error(f"Cannot start camera {self.serial_number}: {e}")
            self.ready = False
            if self.save:
                self.color_vw.release()
                self.depth_vw.release()
                self.save = False
            raise e
        self.running = True

        def update_frame():
            while self.running:
                try:
                    frame = self.pipeline.wait_for_frames(timeout_ms=2000)
                    self.frame = frame
                except Exception as exc:
                    logging.warning(
                        "Camera %s frame wait failed: %s",
                        self.serial_number,
                        exc,
                    )
                    time.sleep(0.05)
        
        # time.sleep(2.0)
        self.task = threading.Thread(target=update_frame, daemon=True)
        self.task.start()

    def stop(self):
        if self.task is None and self.pipeline is None:
            return
        self.running = False
        if self.task is not None and self.task.is_alive():
            self.task.join(timeout=2.0)
        self.task = None
        if self.pipeline is not None:
            try:
                self.pipeline.stop()
            except Exception as exc:
                logging.warning("Failed to stop camera %s cleanly: %s", self.serial_number, exc)
        if self.save:
            if self.color_vw is not None:
                self.color_vw.release()
            if self.depth_vw is not None:
                self.depth_vw.release()

    def __enter__(self):
        self.start()
        return self

    def __exit__(self, *args, **kwargs):
        self.stop()

    def get_frame(self):
        if not self.ready:
            return None

        while not self.frame:
            time.sleep(0.01)    # Wait until get new frame

        frame = self.frame
        color_frame = frame.get_color_frame()
        depth_frame = frame.get_depth_frame()
        color_img = np.asanyarray(color_frame.get_data())
        color_timestamp = color_frame.get_timestamp() / 1000    # To seconds.
        depth_img = np.asanyarray(depth_frame.get_data())
        depth_timestamp = depth_frame.get_timestamp()/ 1000     # To seconds.
        if self.save:
            self.color_vw.write(color_img)
            self.depth_vw.write(depth_img)
            self.color_timestamp_file.append({'timestamp': color_timestamp, 'index': self.index, 'extra': {}})
            self.depth_timestamp_file.append({'timestamp': depth_timestamp, 'index': self.index, 'extra': {}})
        
        self.index += 1

        self.frame = None   # Reset frame to avoid getting same frame
        return {
            'color_image': color_img,
            'color_timestamp': color_timestamp,
            'depth_image': depth_img,
            'depth_timestamp': depth_timestamp
        }

    # Drop a few frames to avoid problems
    def drop_frame(self):
        if not self.ready:
            return
        self.pipeline.wait_for_frames(timeout_ms=5000)
        self.frame = None

class AirbotObserver:
    TOP_CAMERA_ID = data_config.GLOBAL_CAMERA_SERIAL_NUMBER
    LEFT_CAMERA_ID = data_config.LEFT_CAMERA_SERIAL_NUMBER
    RIGHT_CAMERA_ID = data_config.RIGHT_CAMERA_SERIAL_NUMBER

    def __init__(self, save=True, path='./data'):
        self.left_camera = RealsenseCamera(AirbotObserver.LEFT_CAMERA_ID, save=save, vw_path=os.path.join(path, 'videos/'), sensor_name='cam_left')
        self.right_camera = RealsenseCamera(AirbotObserver.RIGHT_CAMERA_ID, save=save, vw_path=os.path.join(path, 'videos/'), sensor_name='cam_right')
        self.top_camera = RealsenseCamera(AirbotObserver.TOP_CAMERA_ID, save=save, vw_path=os.path.join(path, 'videos/'), sensor_name='cam_front')

    def start(self):
        started_cameras = []
        try:
            self.left_camera.start()
            started_cameras.append(self.left_camera)
            self.right_camera.start()
            started_cameras.append(self.right_camera)
            self.top_camera.start()
            started_cameras.append(self.top_camera)
        except Exception:
            for camera in reversed(started_cameras):
                try:
                    camera.stop()
                except Exception:
                    logging.exception("Failed to rollback started camera %s", camera.serial_number)
            raise

    def stop(self):
        self.left_camera.stop()
        self.right_camera.stop()
        self.top_camera.stop()

    def get_frame(self):
        return {
            'left_camera': self.left_camera.get_frame(),
            'right_camera': self.right_camera.get_frame(),
            'top_camera': self.top_camera.get_frame()
        }

    # Drop a few frames to avoid problems
    def drop_frame(self):
        self.left_camera.drop_frame()
        self.right_camera.drop_frame()
        self.top_camera.drop_frame()

class AirbotDataCollection:
    def __init__(self, save=True, path='./data'):
        if save and os.path.exists(path):
            raise Exception("Cannot save to an existing directory")
        self.save = save
        if self.save:
            self.save_path = path
        self.robot = Robot()
        self.observer = AirbotObserver(save=save, path=path)
        self.collecting = False
        self.collect_mode = 0 # 0 for stop, 1 for auto, 2 for manual， 3 for rollback
        self.last_collect_mode = 0
        self.model_action_list = [] # left joint, left_gripper, right_joint, right_gripper
        self.history_action_queue = deque(maxlen=10)
        # reset first
        # self.factor = 0.072 / 0.0471
        self.factor = 0.07 / 0.048
        self.robot.robot.left_go_joint([-0.75,0,0,1.57,0.0,-1.57], 0.0, interp=True)
        self.robot.robot.right_go_joint([0.75,0,0,-1.57,-0.0,1.57], 0.0, interp=True)
        print ("robot init done")

    def start(self):
        try:
            self.robot.connect()
            self.observer.start()
        except Exception as e:
            logging.error(f"Failed to start data collection: {e}")
            self.stop()
            sys.exit(1)

    def stop(self):
        self.robot.disconnect()
        self.observer.stop()

    def collect(self, max_frames=1000, frequency=30):
        global meta_template
        global LEAD_LEFT_JOINT
        global LEAD_RIGHT_JOINT
        global LEAD_LEFT_GRIPPER
        global LEAD_RIGHT_GRIPPER
        global CONTROL_MODE
        global SET_MODE
        global SEND_LEFT_IMG
        global SEND_RIGHT_IMG
        global SEND_FRONT_IMG
        global RECEIVE_ACTION_LIST
        global HISTORY_ACTION_QUEUE
        global IN_ROLLBACK

        logging.info("Please wait...")
        time.sleep(5)

        if self.save:
            target_joint_data_dir = os.path.join(self.save_path, 'data')
            if not os.path.exists(target_joint_data_dir):
                os.makedirs(target_joint_data_dir)
            left_joint_data_file = indexed_jsonline_open(os.path.join(target_joint_data_dir, 'dos_w1_arms_left.jsonl'), 'w')
            right_joint_data_file = indexed_jsonline_open(os.path.join(target_joint_data_dir, 'dos_w1_arms_right.jsonl'), 'w')
            vehicle_data_file = indexed_jsonline_open(os.path.join(target_joint_data_dir, 'dos_w1_movement_base.jsonl'), 'w')
        logging.info("打开浏览器进行操作")
        CONTROL_MODE = -1

        while True:
            if SET_MODE == 10:
                break
            elif SET_MODE == 11:
                CONTROL_MODE = -1
                time.sleep(3.0)
                exit(-1)
            time.sleep(0.1)

        logging.info("Start collecting... (Press Q to quit, M to switch to manual, P to stop, A to auto, r to rollback)")
        meta_template.task_meta.start_time = time.time()
        # import pdb;pdb.set_trace()
        self.observer.drop_frame()

        self.collecting = True

        def interrupt():
            global SET_MODE
            global IN_ROLLBACK
            global RECEIVE_ACTION_LIST
            global CONTROL_MODE
            global HISTORY_ACTION_QUEUE
            last_processed_mode = None
            while True:
                set_mode = SET_MODE
                if set_mode == last_processed_mode:
                    time.sleep(0.01)
                    continue
                if set_mode == 11:
                    logging.info("Exiting...")
                    with STATE_LOCK:
                        _reset_inference_state(clear_queue=True)
                        self.collect_mode = -1
                        CONTROL_MODE = -1
                    time.sleep(1.0)
                    self.collecting = False
                    break
                if set_mode == 2:
                    if not getattr(self.robot.robot.config_, "USE_LEAD_ARMS", False):
                        logging.warning("Manual mode requested but lead arms are disabled; staying in stop mode")
                        with STATE_LOCK:
                            SET_MODE = 0
                            self.collect_mode = 0
                            CONTROL_MODE = 0
                        last_processed_mode = 0
                        time.sleep(0.05)
                        continue
                    with STATE_LOCK:
                        self.collect_mode = 2
                        CONTROL_MODE = 2
                if set_mode == 0:
                    with STATE_LOCK:
                        _reset_inference_state(clear_queue=True)
                        self.collect_mode = 0
                        CONTROL_MODE = 0
                if set_mode == 1:
                    with STATE_LOCK:
                        _reset_inference_state(clear_queue=True)
                        self.collect_mode = 1
                        CONTROL_MODE = 1
                if set_mode == 3:
                    if self.collect_mode != 0:
                        time.sleep(0.01)
                        continue
                    with STATE_LOCK:
                        if not len(HISTORY_ACTION_QUEUE):
                            time.sleep(0.01)
                            continue
                        tmp_action = HISTORY_ACTION_QUEUE.pop(-1)
                        _reset_inference_state(clear_queue=True)
                        IN_ROLLBACK = True
                    if not len(tmp_action):
                        continue
                    left_joint = tmp_action[:6]
                    left_gripper = tmp_action[6]
                    right_joint = tmp_action[7:13]
                    right_gripper = tmp_action[13]
                    self.robot.robot.left_go_joint(left_joint, left_gripper, interp=True)
                    self.robot.robot.right_go_joint(right_joint, right_gripper, interp=True)
                    time.sleep(5.0)
                    print ("rollback done")
                    IN_ROLLBACK = False           
                last_processed_mode = set_mode
                time.sleep(0.01)

        def collect_joint_data():
            global LEFT_JOINT
            global RIGHT_JOINT
            global LEFT_GRIPPER
            global RIGHT_GRIPPER
            while self.collecting:
                data = self.robot.get_joint_pos()
                with STATE_LOCK:
                    LEFT_JOINT = data['left_arm']['joint_positions']
                    RIGHT_JOINT = data['right_arm']['joint_positions']
                    LEFT_GRIPPER = data['left_arm']['gripper']
                    RIGHT_GRIPPER = data['right_arm']['gripper']
                data['left_arm'].update({"mode_tag": self.collect_mode})
                data['right_arm'].update({"mode_tag": self.collect_mode})
                if self.save:
                    left_joint_data_file.append(data['left_arm'])
                    right_joint_data_file.append(data['right_arm'])
                    vehicle_data_file.append(data['base'])
                time.sleep(0.005)
                
        threading.Thread(target=collect_joint_data).start()
        threading.Thread(target=interrupt).start()

        def execute_model_actions():
            global RECEIVE_ACTION_LIST
            while self.collecting:
                if self.collect_mode != 1:
                    time.sleep(0.005)
                    continue
                with STATE_LOCK:
                    if not len(RECEIVE_ACTION_LIST):
                        tmp_action = None
                        remaining_actions = 0
                    else:
                        tmp_action = RECEIVE_ACTION_LIST.pop(0)
                        remaining_actions = len(RECEIVE_ACTION_LIST)
                if tmp_action is None:
                    time.sleep(0.002)
                    continue
                if remaining_actions == ACTION_HORIZON - 1:
                    logging.info(
                        "Starting model chunk execution first_step_left=%s first_step_right=%s",
                        np.round(tmp_action[:7], 5).tolist(),
                        np.round(tmp_action[7:], 5).tolist(),
                    )
                left_joint = tmp_action[:6]
                left_gripper = tmp_action[6]
                right_joint = tmp_action[7:13]
                right_gripper = tmp_action[13]
                self.robot.robot.left_go_joint(left_joint, left_gripper, interp=False)
                self.robot.robot.right_go_joint(right_joint, right_gripper, interp=False)
                if remaining_actions == 0:
                    logging.info("Completed model chunk execution")
                self.last_collect_mode = 1
                time.sleep(0.02)

        threading.Thread(target=execute_model_actions).start()

        total_frames = 0
        while self.collecting == True and total_frames < max_frames:
            ret = self.observer.get_frame()
            with STATE_LOCK:
                SEND_LEFT_IMG = ret['left_camera']['color_image']
                SEND_RIGHT_IMG = ret['right_camera']['color_image']
                SEND_FRONT_IMG = ret['top_camera']['color_image']
            total_frames += 1
            if getattr(self.robot.robot.config_, "USE_LEAD_ARMS", False):
                left_lead_joint = self.robot.robot.left_lead_joint
                right_lead_joint = self.robot.robot.right_lead_joint
                with STATE_LOCK:
                    LEAD_LEFT_JOINT = left_lead_joint[:6]
                    LEAD_LEFT_GRIPPER = left_lead_joint[6]
                    LEAD_RIGHT_JOINT = right_lead_joint[:6]
                    LEAD_RIGHT_GRIPPER = right_lead_joint[6]
            else:
                left_lead_joint = []
                right_lead_joint = []
                with STATE_LOCK:
                    LEAD_LEFT_JOINT = []
                    LEAD_LEFT_GRIPPER = -1.0
                    LEAD_RIGHT_JOINT = []
                    LEAD_RIGHT_GRIPPER = -1.0
            with STATE_LOCK:
                CONTROL_MODE = self.collect_mode
            # for relative joint control
            if self.collect_mode == 2:
                with STATE_LOCK:
                    _reset_inference_state(clear_queue=True)
                    HISTORY_ACTION_QUEUE = []
                if self.last_collect_mode != 2:
                    logging.info("Entering manual mode")
                    self.left_init_lead_joint = self.robot.robot.left_lead_joint
                    self.right_init_lead_joint = self.robot.robot.right_lead_joint
                    self.left_init_follow_joint = self.robot.robot.left_cur_joint
                    self.right_init_follow_joint = self.robot.robot.right_cur_joint
                lead_left_cur_joint = self.robot.robot.left_lead_joint
                lead_right_cur_joint = self.robot.robot.right_lead_joint
                delta_left_target_joint = [lead_left_cur_joint[i] - self.left_init_lead_joint[i] for i in range(6)]
                delta_left_target_gripper = 5.0 * self.factor * (left_lead_joint[6] - self.left_init_lead_joint[6])
                delta_right_target_joint = [lead_right_cur_joint[i] - self.right_init_lead_joint[i] for i in range(6)]
                delta_right_target_gripper = 5.0 * self.factor * (right_lead_joint[6] - self.right_init_lead_joint[6])
                left_target_joint = [self.left_init_follow_joint[i] + delta_left_target_joint[i] for i in range(6)]
                left_target_gripper = self.left_init_follow_joint[6] + delta_left_target_gripper
                right_target_joint = [self.right_init_follow_joint[i] + delta_right_target_joint[i] for i in range(6)]
                right_target_gripper = self.right_init_follow_joint[6] + delta_right_target_gripper
                self.robot.robot.left_go_joint(left_target_joint, left_target_gripper, interp=False)
                self.robot.robot.right_go_joint(right_target_joint, right_target_gripper, interp=False)
                time.sleep(0.002)
                self.last_collect_mode = 2
            elif self.collect_mode == 1:
                self.last_collect_mode = 1
                time.sleep(0.002)
            elif self.collect_mode == 0:
                if not IN_ROLLBACK:
                    with STATE_LOCK:
                        _reset_inference_state(clear_queue=True)
                    self.robot.robot.left_target_joint_list = []
                    self.robot.robot.left_target_gripper_list = []
                    self.robot.robot.right_target_joint_list = []
                    self.robot.robot.right_target_gripper_list = []
                    self.last_collect_mode = 0
                time.sleep(0.01)
                
        self.collecting = False
    
        meta_template.task_meta.end_time = time.time()
        meta_template.task_meta.frames = total_frames
        logging.info("Data collection finished")

    def __enter__(self):
        self.start()
        return self

    def __exit__(self, *args, **kwargs):
        self.stop()

if __name__ == '__main__':
    # start fastapi
    api_thread = threading.Thread(target=start_api, daemon=True)
    api_thread.start()

    meta_template_path = "meta_template.json"
    meta_template = Meta.from_file(meta_template_path)

    import argparse
    import datetime
    config_ = DataCollectionConfig()
    save_root_dir = config_.save_root_dir
    parser = argparse.ArgumentParser(description='Airbot data collection')
    parser.add_argument(
        '--path', type=str, help='Where to save data',
        default=os.path.join(save_root_dir, datetime.datetime.now().strftime('%Y%m%d'))
    )
    parser.add_argument('--max_frames', type=int, help='Maximum frames to collect', default=10_000_000)
    parser.add_argument('--episode', type=int, help='Current episode index', default=1)
    parser.add_argument('--operator', type=str, help='Operator', default='Unknown')
    parser.add_argument('--manager', type=str, help='Manager', default='Unknown')
    parser.add_argument('--job_uuid', type=str, help='job id from web', default='Unknown')
    parser.add_argument(
        '--enable-lead-arms',
        action='store_true',
        help='Enable lead arms for manual takeover mode. Disabled by default for eval deployment.',
    )
    args = parser.parse_args()

    dos_config.USE_LEAD_ARMS = args.enable_lead_arms
    logging.info("Lead arms enabled: %s", dos_config.USE_LEAD_ARMS)

    meta_template.task_meta.operator = args.operator
    meta_template.task_meta.manager = args.manager

    if not os.path.exists(args.path):
        os.makedirs(args.path)

    if os.path.exists(os.path.join(args.path, f"episode_{args.episode}")) or args.episode < 1:
        logging.warning(f"Episode {args.episode} exists or is invalid.")
        if len(os.listdir(args.path)) == 0:
            last_id = 0
        else:
            last_id = sorted([int(x.split('_')[-1]) for x in os.listdir(args.path)])[-1]
        args.episode = last_id + 1
        logging.warning(f"Data will be saved as episode {args.episode}")
    
    meta_template.task_meta.episode_id = args.episode
    target_path = os.path.join(args.path, f"episode_{args.episode}")

    try:
        with AirbotDataCollection(path=target_path) as dc:
            logging.info("Hello, airbot!")
            dc.collect(max_frames=args.max_frames)
            print ("try done")
    except Exception as e:
        logging.error(f"Data collection failed: {e}")
    else:
        logging.info("Saving meta file...")
        meta_template.episode_dir = target_path
        meta_new = generate_index_file(meta_template, os.path.join(target_path, 'index.jsonl'))
        meta_template.task_meta.frames = meta_new.task_meta.frames
        Meta.save(meta_template, os.path.join(target_path, 'meta.json'))
