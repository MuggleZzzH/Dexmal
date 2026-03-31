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

class CollectMode(BaseModel):
    collect_mode: int

class InferAction(BaseModel):
    action_list: list

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

@app.get("/mode")
def get_cotrol_mode_state():
    global CONTROL_MODE
    return {"code": 200, "msg": "success", "data": CONTROL_MODE}

@app.post("/mode")
def set_control_mode(item: CollectMode):
    global SET_MODE
    SET_MODE = int(item.collect_mode)
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
    # print (RECEIVE_ACTION_LIST)
    if CONTROL_MODE != 1 or len(RECEIVE_ACTION_LIST) != 0:
        return Response(content=pickle.dumps({}), media_type='application/octet-stream')
        # return {}
    image_size = (640,480)
    resize_method = cv2.resize
    # get img
    images_dict = {}
    img_high = resize_method(SEND_FRONT_IMG, image_size)
    images_dict['high'] = cv2.imencode('.png', img_high)[-1].tobytes()
    img_left = resize_method(SEND_LEFT_IMG, image_size)
    images_dict['left_hand'] = cv2.imencode('.png', img_left)[-1].tobytes()
    img_right = resize_method(SEND_RIGHT_IMG, image_size)
    images_dict['right_hand'] = cv2.imencode('.png', img_right)[-1].tobytes()
    # get state
    action = LEFT_JOINT + [LEFT_GRIPPER] + RIGHT_JOINT + [RIGHT_GRIPPER]
    # get dict
    state_data = {
        "images": images_dict,
        "action": action,
        "pending_actions": len(RECEIVE_ACTION_LIST),
        "timestamp": time.time(),
        "state": "GOOD"
    }
    return Response(content=pickle.dumps(state_data), media_type='application/octet-stream')

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
    RECEIVE_ACTION_LIST = item.action_list
    HISTORY_ACTION_QUEUE.append(item.action_list[-1])
    # print ("hh ", HISTORY_ACTION_QUEUE)

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
        try:
            self.save = save
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
                frame = self.pipeline.wait_for_frames(timeout_ms=2000)
                self.frame = frame
        
        # time.sleep(2.0)
        self.task = threading.Thread(target=update_frame, daemon=True)
        self.task.start()

    def stop(self):
        if not self.ready:
            return
        self.running = False
        self.task.join()
        self.pipeline.stop()
        if self.save:
            self.color_vw.release()
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
        self.left_camera.start()
        self.right_camera.start()
        self.top_camera.start()

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
            while True:
                set_mode = SET_MODE
                if set_mode == 11:
                    RECEIVE_ACTION_LIST = []
                    logging.info("Exiting...")
                    self.collect_mode = -1
                    CONTROL_MODE = -1
                    time.sleep(1.0)
                    self.collecting = False
                    break
                if set_mode == 2:
                    self.collect_mode = 2
                if set_mode == 0:
                    self.collect_mode = 0
                if set_mode == 1:
                    self.collect_mode = 1
                if set_mode == 3:
                    if self.collect_mode != 0:
                        continue
                    if not len(HISTORY_ACTION_QUEUE):
                        continue
                    IN_ROLLBACK = True
                    tmp_action = HISTORY_ACTION_QUEUE.pop(-1)
                    left_joint = tmp_action[:6]
                    left_gripper = tmp_action[6]
                    right_joint = tmp_action[7:13]
                    right_gripper = tmp_action[13]
                    self.robot.robot.left_go_joint(left_joint, left_gripper, interp=True)
                    self.robot.robot.right_go_joint(right_joint, right_gripper, interp=True)
                    time.sleep(5.0)
                    print ("rollback done")
                    IN_ROLLBACK = False           
                time.sleep(0.01)

        def collect_joint_data():
            global LEFT_JOINT
            global RIGHT_JOINT
            global LEFT_GRIPPER
            global RIGHT_GRIPPER
            while self.collecting:
                data = self.robot.get_joint_pos()
                LEFT_JOINT = data['left_arm']['joint_positions']
                RIGHT_JOINT = data['right_arm']['joint_positions']
                LEFT_GRIPPER = data['left_arm']['gripper']
                RIGHT_GRIPPER = data['right_arm']['gripper']
                data['left_arm'].update({"mode_tag": self.collect_mode})
                data['right_arm'].update({"mode_tag": self.collect_mode})
                left_joint_data_file.append(data['left_arm'])
                right_joint_data_file.append(data['right_arm'])
                vehicle_data_file.append(data['base'])
                time.sleep(0.005)
                
        threading.Thread(target=collect_joint_data).start()
        threading.Thread(target=interrupt).start()

        total_frames = 0
        while self.collecting == True and total_frames < max_frames:
            ret = self.observer.get_frame()
            SEND_LEFT_IMG = ret['left_camera']['color_image']
            SEND_RIGHT_IMG = ret['right_camera']['color_image']
            SEND_FRONT_IMG = ret['top_camera']['color_image']
            total_frames += 1
            # check move
            left_lead_joint = self.robot.robot.left_lead_joint
            right_lead_joint = self.robot.robot.right_lead_joint
            LEAD_LEFT_JOINT = left_lead_joint[:6]
            LEAD_LEFT_GRIPPER = left_lead_joint[6]
            LEAD_RIGHT_JOINT = right_lead_joint[:6]
            LEAD_RIGHT_GRIPPER = right_lead_joint[6]
            CONTROL_MODE = self.collect_mode
            # for relative joint control
            if self.collect_mode == 2:
                print ("IN manual mode")
                # clear model action queue
                RECEIVE_ACTION_LIST = []
                # self.history_action_queue.clear()
                HISTORY_ACTION_QUEUE = []
                if self.last_collect_mode != 2:
                    print ("init manual")
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
                print ("go done")           
                time.sleep(0.002)
                self.last_collect_mode = 2
            elif self.collect_mode == 1:
                print ("IN MODEL")
                if not len(RECEIVE_ACTION_LIST):
                    continue
                print (len(RECEIVE_ACTION_LIST))
                # time.sleep(2)
                # RECEIVE_ACTION_LIST.pop(0)
                tmp_action = RECEIVE_ACTION_LIST.pop(0)
                left_joint = tmp_action[:6]
                left_gripper = tmp_action[6]
                right_joint = tmp_action[7:13]
                right_gripper = tmp_action[13]
                self.robot.robot.left_go_joint(left_joint, left_gripper, interp=False)
                self.robot.robot.right_go_joint(right_joint, right_gripper, interp=False)
                self.last_collect_mode = 1
                time.sleep(0.02)
            elif self.collect_mode == 0:
                print ("IN STOP")
                RECEIVE_ACTION_LIST = []
                if not IN_ROLLBACK:
                    self.robot.robot.left_target_joint_list = []
                    self.robot.robot.left_target_gripper_list = []
                    self.robot.robot.right_target_joint_list = []
                    self.robot.robot.right_target_gripper_list = []
                    self.last_collect_mode = 0
                
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
    args = parser.parse_args()

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
