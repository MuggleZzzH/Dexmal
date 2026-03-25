# -*- coding: UTF-8 -*-
import datetime
import json
import logging
import os
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


def preparing():
    logging.info("Please wait...")
    time.sleep(3)
    logging.info("Press S to start or Q to exit")
    while True:
        ch = getch()
        if ch == "s" or ch == "S":
            break
        elif ch == "q" or ch == "Q":
            exit(-1)
        time.sleep(0.01)


def iter_action(robot: Robot):
    collecting = True

    def interrupt():
        nonlocal collecting
        logging.info("Collecting... (Press Q to quit)")
        while True:
            ch = getch()
            if ch == "q" or ch == "Q":
                logging.info("Exiting...")
                collecting = False
                break
            time.sleep(0.01)

    threading.Thread(target=interrupt, daemon=True).start()

    while collecting is True:
        yield robot.get()
        time.sleep(0.005)


def main():
    meta_template_path = "meta_template.json"
    meta_template = Meta.from_file(meta_template_path)

    # get information for meta.json or logic
    config = DataCollectionConfig()
    root_dir = os.path.join(config.save_root_dir, datetime.datetime.now().strftime("%Y%m%d"))

    # get sensor map
    sensor_map = {
        "cam_front": RealSense(
            serial_number=config.top_camera_id,
            width=640,
            height=480,
            depth=True,
            fps=30,
        ),
        "cam_left": RealSense(
            serial_number=config.left_camera_id,
            width=640,
            height=480,
            depth=True,
            fps=30,
        ),
        "cam_right": RealSense(
            serial_number=config.right_camera_id,
            width=640,
            height=480,
            depth=True,
            fps=30,
        ),
    }

    robot = Robot()
    recorder = Recorder(meta=meta_template, root=root_dir, sensor_map=sensor_map)
    try:
        preparing()
        robot.connect()
        recorder.start()

        logging.info("Hello, airbot!")
        for action in iter_action(robot):
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
        logging.info("Data collection completed successfully")
        recorder.commit()
    except Exception:
        logging.exception("Data collection failed")
        recorder.rollback()
    finally:
        robot.disconnect()


if __name__ == "__main__":
    main()
