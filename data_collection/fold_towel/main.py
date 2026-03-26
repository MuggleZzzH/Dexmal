# -*- coding: UTF-8 -*-
import datetime
import json
import logging
import os
import queue
import sys
import termios
import threading
import time
import tty

from airbot_py.arm import AIRBOTArm
from config import DataCollectionConfig
from websocket import create_connection

from open_pdd import Meta, RealSense, Recorder

logging.basicConfig(
    level=logging.INFO,
    format="[%(asctime)s] [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
COMMAND_KEYS = {"a", "b", "c", "q"}
DEBOUNCE_SECONDS = 0.5
SAMPLE_INTERVAL = 0.005


class WSClient:
    def __init__(self, addr):
        try:
            self.ws = create_connection(addr, timeout=3)
        except Exception:
            print("cannot connect to car")
            self.ws = None

    def _send(self, params):
        if self.ws:
            self.ws.send(json.dumps(params))
            res = self.ws.recv()
            res = json.loads(res)
            return res
        else:
            return None

    def _quit(self):
        if self.ws:
            self.ws.close()

    def get_vehicle_status(self):
        if self.ws:
            param = {"cmd": "getAgvStatus"}
            res = self._send(param)
            ret_dict = {"v": res["data"]["agvSpeed"]["x"], "w": res["data"]["agvSpeed"]["t"]}
            return ret_dict
        else:
            return None

    def set_vehicle_status(self, v=0, w=0):
        if self.ws:
            send_dict = {"cmd": "remoteControl", "x": v, "t": w}
            self._send(send_dict)

    def get_camera(self):
        if self.ws:
            param = {"cmd": "getCamera"}
            res = self._send(param)
            return res
        else:
            return None

    def get_laser(self):
        if self.ws:
            param = {"cmd": "getPositioningLaser"}
            res = self._send(param)
            return res
        else:
            return None


def getch():
    fd = sys.stdin.fileno()
    old_settings = termios.tcgetattr(fd)
    try:
        tty.setraw(fd)
        ch = sys.stdin.read(1)
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
        return ch


class Robot:
    def __init__(self):
        self.left_arm = AIRBOTArm(port=50051)
        self.right_arm = AIRBOTArm(port=50053)
        addr = "ws://192.168.31.7:6060"
        self.ws = WSClient(addr)

    def connect(self):
        self.left_arm.connect()
        self.right_arm.connect()
        logging.info("Connected to robot")

    def disconnect(self):
        self.left_arm.disconnect()
        self.right_arm.disconnect()
        self.ws._quit()
        logging.info("Disconnected from robot")

    def get(self):
        timestamp = time.time()

        left_pos = self.left_arm.get_joint_pos()
        left_end_pose = self.left_arm.get_end_pose()
        pos = left_end_pose[0][::]
        quar = left_end_pose[1][::]
        left_end_pose = pos + quar
        left_eef_pos = self.left_arm.get_eef_pos()[0]

        right_pos = self.right_arm.get_joint_pos()
        right_end_pose = self.right_arm.get_end_pose()
        pos = right_end_pose[0][::]
        quar = right_end_pose[1][::]
        right_end_pose = pos + quar
        right_eef_pos = self.right_arm.get_eef_pos()[0]
        # get car
        car_ret_dict = self.ws.get_vehicle_status()
        if car_ret_dict is None:
            car_ret_dict = {"v": -100, "w": -100}
        return {
            "left_arm": {
                "joint_positions": left_pos[::],
                "ee_positions": left_end_pose[::],
                "gripper": left_eef_pos,
                "timestamp": timestamp,
            },
            "right_arm": {
                "joint_positions": right_pos[::],
                "ee_positions": right_end_pose[::],
                "gripper": right_eef_pos,
                "timestamp": timestamp,
            },
            "car": {"v": car_ret_dict["v"], "w": car_ret_dict["w"], "timestamp": timestamp},
        }


class PedalListener(threading.Thread):
    def __init__(self, command_queue: queue.Queue, stop_event: threading.Event):
        super().__init__(daemon=True)
        self.command_queue = command_queue
        self.stop_event = stop_event
        self.last_trigger_time = 0.0

    def run(self):
        while not self.stop_event.is_set():
            ch = getch()
            key = ch.lower()
            if key not in COMMAND_KEYS:
                continue

            now = time.monotonic()
            if now - self.last_trigger_time < DEBOUNCE_SECONDS:
                logging.info("Ignore %s: still in debounce window", key.upper())
                continue

            self.last_trigger_time = now
            self.command_queue.put(key)


class EpisodeManager:
    def __init__(self, meta_template: Meta, config: DataCollectionConfig, root_dir: str):
        self.meta_template = meta_template
        self.config = config
        self.root_dir = root_dir
        self.lock = threading.Lock()
        self.recorder = None
        self.has_unsaved_data = False

    def _build_sensor_map(self):
        return {
            "cam_front": RealSense(
                serial_number=self.config.top_camera_id,
                width=640,
                height=480,
                depth=True,
                fps=30,
            ),
            "cam_left": RealSense(
                serial_number=self.config.left_camera_id,
                width=640,
                height=480,
                depth=True,
                fps=30,
            ),
            "cam_right": RealSense(
                serial_number=self.config.right_camera_id,
                width=640,
                height=480,
                depth=True,
                fps=30,
            ),
        }

    def _create_recorder(self):
        return Recorder(
            meta=self.meta_template,
            root=self.root_dir,
            sensor_map=self._build_sensor_map(),
        )

    def is_collecting(self) -> bool:
        with self.lock:
            return self.recorder is not None

    def append_action(self, action) -> bool:
        with self.lock:
            recorder = self.recorder
            if recorder is None:
                return False

            for action_key in ["left_arm", "right_arm"]:
                recorder.append(
                    recorder.meta.get_action_name(action_key),
                    {
                        "joint_positions": action[action_key]["joint_positions"],
                        "ee_positions": action[action_key]["ee_positions"],
                        "gripper": action[action_key]["gripper"],
                    },
                    timestamp=action[action_key]["timestamp"],
                )
            recorder.append(
                "actions.car",
                {"v": action["car"]["v"], "w": action["car"]["w"]},
                timestamp=action["car"]["timestamp"],
            )
            self.has_unsaved_data = True
            return True

    def _detach_recorder(self):
        with self.lock:
            recorder = self.recorder
            has_unsaved_data = self.has_unsaved_data
            self.recorder = None
            self.has_unsaved_data = False
        return recorder, has_unsaved_data

    def _attach_recorder(self, recorder):
        with self.lock:
            self.recorder = recorder
            self.has_unsaved_data = False

    def _finalize_recorder(self, recorder, has_unsaved_data: bool, save: bool, label: str):
        if recorder is None:
            return

        if save and has_unsaved_data:
            result = recorder.commit()
            if result is None:
                logging.info("%s committed", label)
            else:
                logging.info("%s committed: %s", label, result)
            return

        recorder.rollback()
        if save:
            logging.info("%s skipped save because no frame was collected", label)
        else:
            logging.info("%s discarded", label)

    def start_new_episode(self):
        recorder, has_unsaved_data = self._detach_recorder()
        if recorder is not None:
            self._finalize_recorder(
                recorder,
                has_unsaved_data,
                save=has_unsaved_data,
                label="Previous episode",
            )

        recorder = self._create_recorder()
        recorder.start()
        self._attach_recorder(recorder)
        logging.info("Started a new episode")

    def discard_current_episode(self):
        recorder, has_unsaved_data = self._detach_recorder()
        if recorder is None:
            logging.info("Ignore B: no active episode")
            return

        self._finalize_recorder(
            recorder,
            has_unsaved_data,
            save=False,
            label="Current episode",
        )
        logging.info("Recorder is idle. Press A to start the next episode")

    def save_current_episode(self):
        recorder, has_unsaved_data = self._detach_recorder()
        if recorder is None:
            logging.info("Ignore C: no active episode")
            return

        self._finalize_recorder(
            recorder,
            has_unsaved_data,
            save=True,
            label="Current episode",
        )
        logging.info("Recorder is idle. Press A to start the next episode")

    def close(self, save_active: bool):
        recorder, has_unsaved_data = self._detach_recorder()
        if recorder is None:
            return

        self._finalize_recorder(
            recorder,
            has_unsaved_data,
            save=save_active,
            label="Active episode on shutdown",
        )


def sampling_loop(
    robot: Robot,
    episode_manager: EpisodeManager,
    stop_event: threading.Event,
    error_queue: queue.Queue,
):
    while not stop_event.is_set():
        try:
            action = robot.get()
            episode_manager.append_action(action)
        except Exception as exc:
            logging.exception("Sampling loop failed")
            try:
                error_queue.put_nowait(exc)
            except queue.Full:
                pass
            stop_event.set()
            break
        time.sleep(SAMPLE_INTERVAL)


def main():
    meta_template_path = os.path.join(BASE_DIR, "meta_template.json")
    meta_template = Meta.from_file(meta_template_path)

    config = DataCollectionConfig()
    root_dir = os.path.join(config.save_root_dir, datetime.datetime.now().strftime("%Y%m%d"))
    os.makedirs(root_dir, exist_ok=True)

    command_queue = queue.Queue()
    error_queue = queue.Queue(maxsize=1)
    stop_event = threading.Event()
    robot = Robot()
    episode_manager = EpisodeManager(meta_template=meta_template, config=config, root_dir=root_dir)
    pedal_listener = PedalListener(command_queue=command_queue, stop_event=stop_event)
    sample_thread = threading.Thread(
        target=sampling_loop,
        args=(robot, episode_manager, stop_event, error_queue),
        daemon=True,
    )

    try:
        robot.connect()
        sample_thread.start()
        pedal_listener.start()

        logging.info("Pedal ready: A start new episode, B discard current episode, C save current episode, Q exit")
        logging.info("Recorder is idle. Press A to start collecting")

        while not stop_event.is_set():
            try:
                sampling_error = error_queue.get_nowait()
            except queue.Empty:
                sampling_error = None

            if sampling_error is not None:
                raise sampling_error

            try:
                command = command_queue.get(timeout=0.1)
            except queue.Empty:
                continue

            if command == "a":
                if episode_manager.is_collecting():
                    logging.info("A pressed: saving current episode and starting a new one")
                episode_manager.start_new_episode()
            elif command == "b":
                episode_manager.discard_current_episode()
            elif command == "c":
                episode_manager.save_current_episode()
            elif command == "q":
                logging.info("Q pressed: exiting and saving active episode if needed")
                stop_event.set()
    except Exception:
        logging.exception("Data collection failed")
    finally:
        stop_event.set()
        try:
            episode_manager.close(save_active=True)
        except Exception:
            logging.exception("Failed to finalize active episode on shutdown")
        robot.disconnect()


if __name__ == "__main__":
    main()
