import math
from dataclasses import dataclass
import threading
from typing import Optional, Tuple
from websocket import create_connection
import json
import time
import numpy as np
from airbot_sdk.configs.config import DosW1Config

def wrap_to_pi(angle: float) -> float:
    """将角度归一化到 [-pi, pi)。"""
    return (angle + math.pi) % (2 * math.pi) - math.pi


def clamp(value: float, min_value: float, max_value: float) -> float:
    return max(min_value, min(max_value, value))

def transform_to_init(x0, y0, theta0, x1, y1, theta1):
    dx = x1 - x0
    dy = y1 - y0
    x_rel = math.cos(theta0) * dx + math.sin(theta0) * dy
    y_rel = -math.sin(theta0) * dx + math.cos(theta0) * dy
    theta_rel = wrap_to_pi(theta1 - theta0)
    return x_rel, y_rel, theta_rel

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
            ret_dict = {
                         "v": res["data"]["agvSpeed"]["x"], 
                         "w": res["data"]["agvSpeed"]["t"],
                         "x": res["data"]["pos"]["x"],
                         "y": res["data"]["pos"]["y"],
                         "theta": res["data"]["pos"]["theta"],
                        }
            return ret_dict
        else:
            return None

    def set_init(self):
        if self.ws:
            send_dict = {
                "cmd": "initPos",
                "data": {
                    "x": 0,
                    "y": 0,
                    "t": 0,
                    "mapName": "map1"
                }
            }
            self._send(send_dict)

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

@dataclass
class PDGains:
    kp_v: float = 0.3
    ki_v: float = 0.05
    kd_v: float = 0.0
    kp_w: float = 0.2
    ki_w: float = 0.08
    kd_w: float = 0.0


@dataclass
class Limits:
    v_max: float = 0.5
    w_max: float = 0.3
    iv_max: float = 1.0
    iw_max: float = 1.0

class AGVPIDController:
    def __init__(
        self,
        gains: PDGains = PDGains(),
        limits: Limits = Limits(),
        pos_tolerance: float = 0.01,
        yaw_tolerance: float = math.radians(1.0),
        switch_distance: float = 0.20,
    ) -> None:
        self.gains = gains
        self.limits = limits
        self.pos_tolerance = pos_tolerance
        self.yaw_tolerance = yaw_tolerance
        self.switch_distance = switch_distance

        self._prev_v_err: Optional[float] = None
        self._prev_yaw_err: Optional[float] = None
        self._int_v_err: float = 0.0
        self._int_yaw_err: float = 0.0

    def reset(self) -> None:
        self._prev_v_err = None
        self._prev_yaw_err = None
        self._int_v_err = 0.0
        self._int_yaw_err = 0.0

    def compute_control(
        self,
        current_pose: Tuple[float, float, float],
        target_pose: Tuple[float, float, float],
        dt: float,
    ) -> Tuple[float, float]:
        """
        计算控制量 (v, w)。

        参数:
        - current_pose: 当前 (x, y, theta)
        - target_pose: 目标 (x_d, y_d, theta_d)
        - dt: 控制周期(秒)
        """
        if dt <= 0.0:
            raise ValueError("dt must be positive")

        x, y, theta = current_pose
        x_d, y_d, theta_d = target_pose
        dx = x_d - x
        dy = y_d - y
        dist_err = math.hypot(dx, dy)

        # ex > 0: front；ey > 0: left
        ex = math.cos(theta) * dx + math.sin(theta) * dy
        ey = -math.sin(theta) * dx + math.cos(theta) * dy
        final_yaw_err = wrap_to_pi(theta_d - theta)
        
        if ex > 0:
            heading_err_body = math.atan2(ey, ex) if dist_err > 1e-9 else 0.0
        else:
            heading_err_body = math.atan2(ey, ex) + math.pi if dist_err > 1e-9 else 0.0
        heading_err_body = wrap_to_pi(heading_err_body)
        yaw_err = heading_err_body if dist_err > self.pos_tolerance else final_yaw_err
        if dist_err < self.pos_tolerance and abs(final_yaw_err) < self.yaw_tolerance:
            self._prev_v_err = 0.0
            self._prev_yaw_err = final_yaw_err
            self._int_v_err = 0.0
            self._int_yaw_err = 0.0
            # print ("car reach pose")
            return 0.0, 0.0
        
        v_err = ex
        # I
        self._int_v_err = clamp(self._int_v_err + v_err * dt, -self.limits.iv_max, self.limits.iv_max)
        self._int_yaw_err = clamp(self._int_yaw_err + yaw_err * dt, -self.limits.iw_max, self.limits.iw_max)
        # D
        d_v_err = 0.0 if self._prev_v_err is None else (v_err - self._prev_v_err) / dt
        d_yaw_err = 0.0 if self._prev_yaw_err is None else wrap_to_pi(yaw_err - self._prev_yaw_err) / dt
        v = self.gains.kp_v * v_err + self.gains.ki_v * self._int_v_err + self.gains.kd_v * d_v_err
        w = self.gains.kp_w * yaw_err + self.gains.ki_w * self._int_yaw_err + self.gains.kd_w * d_yaw_err
        v = clamp(v, -self.limits.v_max, self.limits.v_max)
        w = clamp(w, -self.limits.w_max, self.limits.w_max)

        self._prev_v_err = v_err
        self._prev_yaw_err = yaw_err

        return v, w
        
class CAR:
    def __init__(self, addr, config_):
        self.ws_client = WSClient(addr)
        self.config_ = config_
        if self.ws_client:
            self.ws_client.set_init()
            time.sleep(0.5)
            start_pos = self._get_vehicle_status()
            self.start_x = start_pos['x']
            self.start_y = start_pos['y']
            self.start_theta = start_pos['theta']
            self._set_vehicle_status(0, 0)
            # for params
            self.control_mode = 2 # 0 for position, 1 for speed, 2 for stop
            self.target_v = 0
            self.target_w = 0
            self.cur_status = self._get_vehicle_status()
            self.cur_pose = self.cal_pose_from_init(self.cur_status)
            self.target_pose = [0, 0, 0]
            self.position_threshold = config_.POSITION_THRESHOLD
            self.theta_threshold = config_.THETA_THRESHOLD
            self.pid_params = PDGains(kp_v=config_.KP_V, ki_v=config_.KI_V, kd_v=config_.KD_V,
                                      kp_w=config_.KP_W, ki_w=config_.KI_W, kd_w=config_.KD_W)
            self.pid_limits = Limits(v_max=config_.V_MAX, w_max=config_.W_MAX, iv_max=config_.IV_MAX, iw_max=config_.IW_MAX)
            self.pid_controller = AGVPIDController(gains=self.pid_params, limits=self.pid_limits,
                                                   pos_tolerance=self.position_threshold, yaw_tolerance=self.theta_threshold)
            # start thread
            self.running = True
            self._control_thread = threading.Thread(target=self._control_func, daemon=True)
            self._control_thread.start()
            
            print ("car init done")

    def _control_func(self):
        while self.running:
            s_time = time.time()
            self.cur_status = self._get_vehicle_status()
            self.cur_pose = self.cal_pose_from_init(self.cur_status)
            # print (self.cur_pose, [self.cur_status['v'], self.cur_status['w']])
            if self.control_mode == 0:
                target_v, target_w = self.pid_controller.compute_control(
                    self.cur_pose, self.target_pose, 0.02)
            elif self.control_mode == 1:
                target_v, target_w = self.target_v, self.target_w
            else:
                target_v, target_w = 0, 0
            self._set_vehicle_status(target_v, target_w)
            e_time = time.time()
            if e_time - s_time < 0.02:
                time.sleep(0.02 - (e_time - s_time))

    def _get_vehicle_status(self):
        return self.ws_client.get_vehicle_status()

    def _set_init(self):
        self.ws_client.set_init()

    def _set_vehicle_status(self, v=0, w=0):
        self.ws_client.set_vehicle_status(v, w)

    def _get_camera(self):
        return self.ws_client.get_camera()

    def _get_laser(self):
        return self.ws_client.get_laser()

    def __del__(self):
        self.ws_client._quit()
        self.running = False
        print ("car quit done")

    def cal_pose_from_init(self, cur_status):
        cur_x, cur_y, cur_theta = cur_status['x'], cur_status['y'], cur_status['theta']
        x_rel, y_rel, theta_rel = transform_to_init(self.start_x, self.start_y, self.start_theta,
                                                  cur_x, cur_y, cur_theta)
        return [x_rel, y_rel, theta_rel]
    
    def get_pose(self):
        return self.cur_pose
    
    def get_speed(self):
        return self.cur_status['v'], self.cur_status['w']
    
    def set_speed(self, v, w):
        self.control_mode = 1
        self.target_v = v
        self.target_w = w

    def set_pose(self, x, y, theta):
        self.control_mode = 0
        self.target_pose = [x, y, theta]

    def stop_car(self):
        self.control_mode = 2


def main():
    config_ = DosW1Config()
    addr = "ws://192.168.31.7:6060"
    car = CAR(addr, config_)
    time.sleep(1.0)
    print (car.get_pose())
    car.set_pose(0.04, 0.02, 0.3)
    time.sleep(10.0)
    print ("done")

if __name__ == "__main__":
    main()