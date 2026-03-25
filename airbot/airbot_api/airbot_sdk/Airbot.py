# -*- coding: utf-8 -*-

import numpy as np
import os
import pickle
import collections
from collections import deque
import cv2
import time
import math
import sys
from airbot_py.arm import AIRBOTPlay, RobotMode, SpeedProfile
import airbot_sdk
import threading
import multiprocessing
import json
import logging
import os
import queue
from datetime import datetime
from enum import Enum
from typing import Dict, List
import queue
import pyrealsense2 as rs
import signal
import argparse
import subprocess
import PyKDL
from kdl_parser.urdf import treeFromFile, treeFromUrdfModel
from urdf_parser_py.urdf import URDF
from airbot_sdk.utils.transformations import quaternion_matrix
from airbot_sdk.AGV import CAR
from airbot_sdk.configs.config import DosW1Config

import socket
import struct
from io import BytesIO

HOST = '127.0.0.1'
PORT = 7788
BUFFER_SIZE = 4096
SOCKET_PATH_1 = '/tmp/socket_test_1.sock' # for left cur joint
SOCKET_PATH_2 = '/tmp/socket_test_2.sock' # for right cur joint
SOCKET_PATH_3 = '/tmp/socket_test_3.sock' # for left img
SOCKET_PATH_4 = '/tmp/socket_test_4.sock' # for right img
SOCKET_PATH_5 = '/tmp/socket_test_5.sock' # for front img
SOCKET_PATH_11 = '/tmp/socket_test_11.sock' # for check
SOCKET_PATH_12 = '/tmp/socket_test_12.sock' # for stop record cmd

TYPE_INT = b'0'
TYPE_DICT = b'1'
TYPE_IMAGE_LEFT = b'2'
TYPE_IMAGE_RIGHT = b'3'
TYPE_IMAGE_FRONT = b'4'


ANGLE2RAD = np.pi / 180.0
INTERP_POSITION = 0.005
INTERP_ROTATION = 0.02

def send_data(sock, data_type, data_time, data_bytes):
    data_len = len(data_bytes)
    header = data_type + struct.pack('i', data_len) + data_time
    sock.sendall(header)
    sock.sendall(data_bytes)


def quaternion_slerp(start, end, t):
    cosa = start[0] * end[0] + start[1] * end[1] + start[2] * end[2] + start[3] * end[3]
    # to make sure that the trace go along the "short circle", not the "long circle"
    if cosa < 0:
        end[0] = -end[0]
        end[1] = -end[1]
        end[2] = -end[2]
        end[3] = -end[3]
        cosa = - cosa
    # if a is too small that sina is close to a, use a instead
    if cosa > 0.9995:
        k0 = 1.0 - t
        k1 = t
    else:
        sina = math.sqrt(1.0 - cosa * cosa)
        a = math.atan2(sina, cosa)
        k0 = math.sin((1.0 - t) * a) / sina
        k1 = math.sin(t * a)/sina
    res = [0, 0, 0, 0]
    res[0] = start[0] * k0 + end[0] * k1
    res[1] = start[1] * k0 + end[1] * k1
    res[2] = start[2] * k0 + end[2] * k1
    res[3] = start[3] * k0 + end[3] * k1
    return res

def position_interpolation(start, end, t):
    start = np.array(start)
    end = np.array(end)
    position = (start + t*(end - start))
    return list(position)

def gripper_interpolation(start, end, t):
    ret = (start + t*(end - start))
    return ret

def cartesian_extend_with_gripper(  pose_start,
                                    pose_target,
                                    gripper_start,
                                    gripper_target,
                                    trans_step = 0.002,
                                    rot_step = 0.02):

    start_position = pose_start[:3]
    start_orient = pose_start[3:]
    target_position = pose_target[:3]
    target_orient = pose_target[3:]
    start_gripper = gripper_start
    target_gripper = gripper_target

    position_trace = list()
    orient_trace = list()
    pose_trace = list()
    gripper_trace = list()
    dis = np.linalg.norm(np.array(start_position) - np.array(target_position))
    position_inter_num = int(dis / trans_step)
    costheta = start_orient[0] * target_orient[0] + start_orient[1] * target_orient[1] + start_orient[2] * target_orient[2] + start_orient[3] * target_orient[3]
    if costheta > 0.9995:
        theta = 0
    else:
        sintheta = math.sqrt(1- costheta * costheta)
        theta = math.atan2(sintheta, costheta)
    orient_inter_num = int(theta / rot_step) # if use rot_step, the number of total interpolate point
    inter_num = max(position_inter_num, orient_inter_num)
    if inter_num <= 1:
        inter_num = 2
    t_ = 1.0 / (inter_num - 1)

    for i in range(inter_num):
        t = i * t_
        temp_orient = quaternion_slerp(list(start_orient), list(target_orient), t) #list
        temp_position = position_interpolation(list(start_position), list(target_position), t)
        temp_gripper = gripper_interpolation(start_gripper, target_gripper, t)
        orient_trace.append(temp_orient)#list
        position_trace.append(temp_position)
        gripper_trace.append(temp_gripper)
    if len(orient_trace) != inter_num:
        raise Exception("Match Error!")

    position_trace = np.array(position_trace)
    orient_trace = np.array(orient_trace)
    pose_trace = np.concatenate((position_trace,orient_trace), axis = 1)
    pose_trace = pose_trace.tolist()

    return pose_trace, gripper_trace

def load_urdf_to_kdl(urdf_file_path):
    if not os.path.exists(urdf_file_path):
        print(f"urdf not exists - {urdf_file_path}")
        return False, None
    
    try:
        success, tree = treeFromFile(urdf_file_path)
        if success:
            print(f"load sucess: {urdf_file_path}")
            print(f"chain has {tree.getNrOfSegments()} segs and {tree.getNrOfJoints()} joints")
            return success, tree
    except Exception as e:
        print(f"methods1 failed: {e}")
    
    # 使用二进制模式读取文件并移除编码声明
    try:
        with open(urdf_file_path, 'rb') as f:
            # 读取二进制数据
            xml_content = f.read()
            # 尝试解码为字符串
            try:
                xml_str = xml_content.decode('utf-8')
            except UnicodeDecodeError:
                # 尝试其他编码
                xml_str = xml_content.decode('latin-1')
            # 移除XML编码声明
            if xml_str.startswith('<?xml'):
                xml_str = xml_str[xml_str.find('?>') + 2:]
            # 从字符串创建URDF模型
            robot_model = URDF.from_xml_string(xml_str)
            # 从URDF模型创建KDL树
            success, tree = treeFromUrdfModel(robot_model)
            if success:
                print(f"method2 sucess: {urdf_file_path}")
                print(f"chain has {tree.getNrOfSegments()} segs and {tree.getNrOfJoints()} joints")
                return success, tree
            else:
                print("method2 failed")
    except Exception as e:
        print(f"method2 failed: {e}")
    
    try:
        robot_model = URDF.from_xml_file(urdf_file_path)
        success, tree = treeFromUrdfModel(robot_model)
        
        if success:
            print(f"method3 sucess: {urdf_file_path}")
            print(f"chain has {tree.getNrOfSegments()} segs and {tree.getNrOfJoints()} joints")
            return success, tree
        else:
            print("method3 failed")
    except Exception as e:
        print(f"method3 failed: {e}")
    
    print(f"can not load: {urdf_file_path}")
    return False, None

def create_chain_from_tree(tree, base_link, tip_link):
    try:
        chain = tree.getChain(base_link, tip_link)
        print(f"create chain from {base_link} to {tip_link}")
        print(f"chain has {chain.getNrOfSegments()} segs and {chain.getNrOfJoints()} joints")
        return chain
    except Exception as e:
        print(f"create chain failed: {e}")
        return None

def setup_kinematics(chain):
    fk_solver = PyKDL.ChainFkSolverPos_recursive(chain)
    ik_vel_solver = PyKDL.ChainIkSolverVel_pinv(chain)
    max_iterations = 100
    eps = 1e-6
    # ik_pos_solver = PyKDL.ChainIkSolverPos_NR(
    #     chain, fk_solver, ik_vel_solver, max_iterations, eps
    # )
    min_jnt_array = PyKDL.JntArray(6)
    max_jnt_array = PyKDL.JntArray(6)
    for i in range(6):
        min_jnt_array[i] = -3.14
    for i in range(6):
        max_jnt_array[i] = 3.14
    ik_pos_solver = PyKDL.ChainIkSolverPos_NR_JL(
        chain, min_jnt_array, max_jnt_array, fk_solver, ik_vel_solver, max_iterations, eps
    )
    return fk_solver, ik_vel_solver, ik_pos_solver, chain

def perform_forward_kinematics(fk_solver, joint_positions):
    q = PyKDL.JntArray(len(joint_positions))
    for i in range(len(joint_positions)):
        q[i] = joint_positions[i]
    frame = PyKDL.Frame()
    status = fk_solver.JntToCart(q, frame)
    if status >= 0:
        position = [frame.p.x(), frame.p.y(), frame.p.z()]
        rotation = frame.M.GetQuaternion() 
        return frame
    else:
        print("fk failed")
        return None

def perform_inverse_kinematics(ik_pos_solver, chain, target_frame, initial_joints=None):
    num_joints = chain.getNrOfJoints()
    
    if initial_joints is None:
        q_init = PyKDL.JntArray(num_joints)
    else:
        q_init = PyKDL.JntArray(num_joints)
        for i in range(num_joints):
            q_init[i] = initial_joints[i]
    q_out = PyKDL.JntArray(num_joints)
    status = ik_pos_solver.CartToJnt(q_init, target_frame, q_out)
    
    if status >= 0:
        joint_positions = [q_out[i] for i in range(num_joints)]
        return joint_positions
    else:
        print("ik failed")
        return None

class AirbotRobot():
    def __init__( self,
                  config_: DosW1Config,
                  left_lead_port=50050, left_lead_url='localhost', right_lead_port=50052, right_lead_url='localhost',
                  left_port=50051, left_url='localhost', right_port=50053, right_url='localhost', ):
        self.config_ = config_
        # for record
        self.record_flag = False
        # for realsense
        self.left_last_frame = None
        self.right_last_frame = None
        self.front_last_frame = None
        if config_.USE_CAM:
            self.left_serial_number = config_.LEFT_CAMERA_SERIAL_NUMBER
            self.right_serial_number = config_.RIGHT_CAMERA_SERIAL_NUMBER
            self.front_serial_number = config_.GLOBAL_CAMERA_SERIAL_NUMBER
            self.width = 640
            self.height = 480
            self.fps = 30
            self.pipelines = dict()
            self.configs = dict()
            self.aligns = dict()
            self.rs_init()
            self.running = True
            self.left_img_data_lock = threading.Lock()
            self.right_img_data_lock = threading.Lock()
            self.front_img_data_lock = threading.Lock()
            left_get_img_thread = threading.Thread(target=self._left_get_img_func, daemon=True)
            right_get_img_thread = threading.Thread(target=self._right_get_img_func, daemon=True)
            front_get_img_thread = threading.Thread(target=self._front_get_img_func, daemon=True)
            left_get_img_thread.start()
            right_get_img_thread.start()
            front_get_img_thread.start()
        self.running = True
        # for robot
        self.left_port = left_port # 50051 left, 50053 right
        self.left_url = left_url
        self.right_port = right_port
        self.right_url = right_url
        self.left_arm = AIRBOTPlay(url=self.left_url, port=self.left_port)
        self.left_arm.connect()
        time.sleep(2.0)
        self.right_arm = AIRBOTPlay(url=self.right_url, port=self.right_port)
        self.right_arm.connect()
        time.sleep(2.0)
        # for state
        self.left_cur_joint = []
        self.right_cur_joint = []
        self.left_cur_pose = []
        self.right_cur_pose = []
        self.left_cur_effort = []
        self.right_cur_effort = []
        if config_.USE_LEAD_ARMS:
            self.left_lead_port = left_lead_port
            self.left_lead_url = left_lead_url
            self.right_lead_port = right_lead_port
            self.right_lead_url = right_lead_url
            self.left_lead_arm = AIRBOTPlay(url=self.left_lead_url, port=self.left_lead_port)
            self.left_lead_arm.connect()
            time.sleep(2.0)
            self.right_lead_arm = AIRBOTPlay(url=self.right_lead_url, port=self.right_lead_port)
            self.right_lead_arm.connect()
            time.sleep(2.0)
            # for state
            self.left_lead_joint = []
            self.right_lead_joint = []
            self.left_lead_pose = []
            self.right_lead_pose = []
        # for kinematics
        urdf_file = config_.URDF_FILE
        ret, tree = load_urdf_to_kdl(urdf_file)
        self.chain_ = create_chain_from_tree(tree, config_.BASE_LINK, config_.EE_LINK)
        self.fk_solver, self.ik_vel_solver, self.ik_pos_solver, _ = setup_kinematics(self.chain_)
        if config_.USE_LEAD_ARMS:
            lead_urdf_file = config_.LEAD_URDF_FILE
            ret, tree = load_urdf_to_kdl(lead_urdf_file)
            self.lead_chain_ = create_chain_from_tree(tree, config_.LEAD_BASE_LINK, config_.LEAD_EE_LINK)
            self.lead_fk_solver, self.lead_ik_vel_solver, self.lead_ik_pos_solver, _ = setup_kinematics(self.lead_chain_)
        # for robot move
        self.left_arm.set_speed_profile(SpeedProfile.FAST)
        self.left_arm.switch_mode(RobotMode.SERVO_JOINT_POS)
        self.right_arm.set_speed_profile(SpeedProfile.FAST)
        self.right_arm.switch_mode(RobotMode.SERVO_JOINT_POS)
        self.left_move_lock = threading.Lock()
        self.right_move_lock = threading.Lock()
        self.left_target_joint_list = []
        self.right_target_joint_list = []
        self.left_target_gripper_list = []
        self.right_target_gripper_list = []
        self._control_thread = threading.Thread(target=self._control_func, daemon=True)
        self._control_thread.start()
        # for car
        if config_.USE_CAR:
            self.car = CAR(config_.ADDR, config_)
        # for others
        self.process_3 = None
        self.record_data_dir = config_.record_data_dir

    def _control_func(self):
        while self.running:
            # get follow joint
            pos = self.left_arm.get_joint_pos()
            eef_pos = self.left_arm.get_eef_pos()
            self.left_cur_joint = pos + eef_pos
            pos = self.right_arm.get_joint_pos()
            eef_pos = self.right_arm.get_eef_pos()
            self.right_cur_joint = pos + eef_pos
            # get follow pose
            position, quat = self.left_arm.get_end_pose()
            eef_pos = self.left_arm.get_eef_pos()
            self.left_cur_pose = position + quat + eef_pos
            position, quat = self.right_arm.get_end_pose()
            eef_pos = self.right_arm.get_eef_pos()
            self.right_cur_pose = position + quat + eef_pos
            # get follow effort
            self.left_cur_effort = self.left_arm.get_joint_eff() + self.left_arm.get_eef_eff()
            self.right_cur_effort = self.right_arm.get_joint_eff() + self.right_arm.get_eef_eff()
            # get lead joint
            if self.config_.USE_LEAD_ARMS:
                pos = self.left_lead_arm.get_joint_pos()
                eef_pos = self.left_lead_arm.get_eef_pos()
                self.left_lead_joint = pos + eef_pos
                pos = self.right_lead_arm.get_joint_pos()
                eef_pos = self.right_lead_arm.get_eef_pos()
                self.right_lead_joint = pos + eef_pos
            # get lead pose
            if self.config_.USE_LEAD_ARMS:
                position, quat = self.left_lead_arm.get_end_pose()
                eef_pos = self.left_lead_arm.get_eef_pos()
                self.left_lead_pose = position + quat + eef_pos
                position, quat = self.right_lead_arm.get_end_pose()
                eef_pos = self.right_lead_arm.get_eef_pos()
                self.right_lead_pose = position + quat + eef_pos
            # for left
            if len(self.left_target_joint_list) and len(self.left_target_gripper_list):
                self._left_go_joint_servo(self.left_target_joint_list[0], self.left_target_gripper_list[0])
                self.left_target_joint_list.pop(0)
                self.left_target_gripper_list.pop(0)
            # for right
            if len(self.right_target_joint_list) and len(self.right_target_gripper_list):
                self._right_go_joint_servo(self.right_target_joint_list[0], self.right_target_gripper_list[0])
                self.right_target_joint_list.pop(0)
                self.right_target_gripper_list.pop(0)
            time.sleep(0.02)

    def _start_record(self, job_id: str = "0"):
        if self.record_flag == True:
            print ("already start")
            return
        print ("start")
        cur_date = datetime.now().date()
        cur_date_str = cur_date.strftime("%Y-%m-%d")
        record_data_dir = os.path.join(self.record_data_dir, cur_date_str)
        if not os.path.exists(record_data_dir):
            os.makedirs(record_data_dir)
        cur_time = datetime.now()
        cur_time_str = cur_time.strftime("%Y-%m-%d-%H-%M-%S")
        file_ = cur_time_str + ".rrd"
        self.save_file_name = os.path.join(record_data_dir, file_)
        self.record_color_left_data_dict = None
        self.record_color_right_data_dict = None
        self.record_color_front_data_dict = None
        self.record_cur_right_data_dict = None
        self.record_cur_left_data_dict = None
        tmp_dir = os.path.dirname(os.path.abspath(airbot_sdk.__file__))
        process_file = os.path.join(tmp_dir, 'record_server.py')
        self.process_3 = subprocess.Popen(['python', process_file, self.save_file_name, job_id])
        time.sleep(1.0)

        self.record_flag = True

        self.sock_thread_1 = threading.Thread(target=self._socket_thread_1)
        self.sock_thread_1.daemon = True
        self.sock_thread_1.start()

        self.sock_thread_2 = threading.Thread(target=self._socket_thread_2)
        self.sock_thread_2.daemon = True
        self.sock_thread_2.start()

        if self.config_.USE_CAM:
            self.sock_thread_3 = threading.Thread(target=self._socket_thread_3)
            self.sock_thread_3.daemon = True
            self.sock_thread_3.start()

            self.sock_thread_4 = threading.Thread(target=self._socket_thread_4)
            self.sock_thread_4.daemon = True
            self.sock_thread_4.start()

            self.sock_thread_5 = threading.Thread(target=self._socket_thread_5)
            self.sock_thread_5.daemon = True
            self.sock_thread_5.start()

    def _stop_record(self):
        if self.process_3 == None:
            print ("have not start yet")
            return None
        data = ""
        ack_received = False
        if os.path.exists(SOCKET_PATH_11):
            os.unlink(SOCKET_PATH_11)
        sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
        sock.bind(SOCKET_PATH_11)
        sock.listen(5)
        sock.settimeout(10.0)
        self.record_flag = False

        stop_cmd = {'cmd': 'stop_record'}
        stop_sent = False
        for _ in range(30):
            try:
                with socket.socket(socket.AF_UNIX, socket.SOCK_STREAM) as stop_sock:
                    stop_sock.connect(SOCKET_PATH_12)
                    dict_bytes = json.dumps(stop_cmd).encode('utf-8')
                    time_bytes = int(time.time() * 1000).to_bytes(length=8, byteorder='big')
                    send_data(stop_sock, TYPE_DICT, time_bytes, dict_bytes)
                    stop_sent = True
                    break
            except Exception:
                time.sleep(0.1)

        if not stop_sent:
            print("send stop cmd failed, fallback terminate")
            self.process_3.terminate()

        deadline = time.time() + 10.0
        while time.time() < deadline:
            try:
                conn, addr = sock.accept()
            except socket.timeout:
                break
            with conn:
                header = conn.recv(13)
                if not header:
                    continue
                data_len = struct.unpack('i', header[1:5])[0]
                data_time = struct.unpack('>q', header[5:13])[0]
                data_bytes = b''
                while len(data_bytes) < data_len:
                    chunk = conn.recv(min(BUFFER_SIZE, data_len-len(data_bytes)))
                    if not chunk:
                        break
                    data_bytes += chunk
                data = data_bytes.decode('utf-8')
            if data == self.save_file_name:
                ack_received = True
                break

        sock.close()
        if os.path.exists(SOCKET_PATH_11):
            os.unlink(SOCKET_PATH_11)

        try:
            self.process_3.wait(timeout=5)
        except subprocess.TimeoutExpired:
            if self.process_3.poll() is None:
                self.process_3.kill()

        if not ack_received:
            print("record stop ack timeout")
        print ("record stop")
        self.process_3 = None
        if ack_received:
            return self.save_file_name
        return None

    def _socket_thread_1(self):
        while self.record_flag:
            try:
                left_cur_joint = self.left_get_joint()
                if not len(left_cur_joint):
                    time.sleep(0.01)
                    continue
                data_type = TYPE_DICT
                data_time = int(time.time()*1000)
                origin_data= {'left_cur_joint': list(left_cur_joint)}
                if data_type == TYPE_DICT:
                    with socket.socket(socket.AF_UNIX, socket.SOCK_STREAM) as s:
                        s.connect(SOCKET_PATH_1)
                        test_dict = origin_data
                        dict_bytes = json.dumps(test_dict).encode('utf-8')
                        time_bytes = data_time.to_bytes(length=8, byteorder='big')
                        send_data(s, TYPE_DICT, time_bytes, dict_bytes)
            except:
                print ("log socket 1 terminate")
            time.sleep(0.001)

    def _socket_thread_2(self):
        while self.record_flag:
            try:
                right_cur_joint = self.right_get_joint()
                if not len(right_cur_joint):
                    time.sleep(0.01)
                    continue
                data_type = TYPE_DICT
                data_time = int(time.time()*1000)
                origin_data= {'right_cur_joint': list(right_cur_joint)}
                if data_type == TYPE_DICT:
                    with socket.socket(socket.AF_UNIX, socket.SOCK_STREAM) as s:
                        s.connect(SOCKET_PATH_2)
                        test_dict = origin_data
                        dict_bytes = json.dumps(test_dict).encode('utf-8')
                        time_bytes = data_time.to_bytes(length=8, byteorder='big')
                        send_data(s, TYPE_DICT, time_bytes, dict_bytes)
            except:
                print ("log socket 2 terminate")
            time.sleep(0.001)

    def _socket_thread_3(self):
        while self.record_flag:
            try:
                if self.record_color_left_data_dict == None:
                    time.sleep(0.001)
                    continue
                data_type = self.record_color_left_data_dict['type']
                data_time = self.record_color_left_data_dict['time']
                # print ("color data time: ", data_time*0.001, time.time())
                origin_data= self.record_color_left_data_dict['data']
                if data_type  == TYPE_IMAGE_LEFT:
                    with socket.socket(socket.AF_UNIX, socket.SOCK_STREAM) as s:
                        s.connect(SOCKET_PATH_3)
                        origin_img = origin_data
                        result, imgencode = cv2.imencode('.jpg', origin_img, [cv2.IMWRITE_JPEG_QUALITY, 80])
                        compress_start = time.time()                   
                        encode_t = time.time()
                        data = np.array(imgencode)
                        stringData = data.tobytes()
                        time_bytes = data_time.to_bytes(length=8, byteorder='big')
                        send_data(s, data_type, time_bytes, stringData)
                        self.record_color_left_data_dict = None
            except:
                print ("log socket 3 terminate")
            time.sleep(0.002)

    def _socket_thread_4(self):
        while self.record_flag:
            try:
                if self.record_color_right_data_dict == None:
                    time.sleep(0.001)
                    continue
                data_type = self.record_color_right_data_dict['type']
                data_time = self.record_color_right_data_dict['time']
                origin_data= self.record_color_right_data_dict['data']
                if data_type == TYPE_IMAGE_RIGHT:
                    with socket.socket(socket.AF_UNIX, socket.SOCK_STREAM) as s:
                        s.connect(SOCKET_PATH_4)
                        origin_img = origin_data
                        result, imgencode = cv2.imencode('.jpg', origin_img, [cv2.IMWRITE_JPEG_QUALITY, 80])
                        compress_start = time.time()                   
                        encode_t = time.time()
                        data = np.array(imgencode)
                        stringData = data.tobytes()
                        time_bytes = data_time.to_bytes(length=8, byteorder='big')
                        send_data(s, data_type, time_bytes, stringData)
                        self.record_color_right_data_dict = None
            except:
                print ("log socket 4 terminate")
            time.sleep(0.002)

    def _socket_thread_5(self):
        while self.record_flag:
            try:
                if self.record_color_front_data_dict == None:
                    time.sleep(0.001)
                    continue
                data_type = self.record_color_front_data_dict['type']
                data_time = self.record_color_front_data_dict['time']
                origin_data= self.record_color_front_data_dict['data']
                if data_type == TYPE_IMAGE_FRONT:
                    with socket.socket(socket.AF_UNIX, socket.SOCK_STREAM) as s:
                        s.connect(SOCKET_PATH_5)
                        origin_img = origin_data
                        result, imgencode = cv2.imencode('.jpg', origin_img, [cv2.IMWRITE_JPEG_QUALITY, 80])
                        compress_start = time.time()                   
                        encode_t = time.time()
                        data = np.array(imgencode)
                        stringData = data.tobytes()
                        time_bytes = data_time.to_bytes(length=8, byteorder='big')
                        send_data(s, data_type, time_bytes, stringData)
                        self.record_color_front_data_dict = None
            except:
                print ("log socket 5 terminate")
            time.sleep(0.002)
    
    def __del__(self):
        self.running = False
        if self.record_flag:
            os.killpg(os.getpgid(self.process_3.pid), signal.SIGINT)
            self.process_3.wait(3)
        self.left_arm.disconnect()
        time.sleep(2.0)
        self.right_arm.disconnect()
        time.sleep(2.0)
        if self.config_.USE_LEAD_ARMS:
            self.left_lead_arm.disconnect()
            time.sleep(2.0)
            self.right_lead_arm.disconnect()
            time.sleep(2.0)
        if self.config_.USE_CAR:
            self.car.__del__()
        print ("del")

    def _left_get_img_func(self):
        while self.running:
            pip_ = self.pipelines[self.left_serial_number]
            align = self.aligns[self.left_serial_number]
            frames = pip_.wait_for_frames(timeout_ms=8000)
            with self.left_img_data_lock:
                self.left_last_frame = frames
                if self.record_flag:
                    color_frame = frames.get_color_frame()
                    timestamp = frames.get_timestamp()
                    color_timestamp = color_frame.get_timestamp()
                    color_image = np.asanyarray(color_frame.get_data())
                    data_type = TYPE_IMAGE_LEFT
                    origin_data = color_image
                    if self.record_color_left_data_dict == None:
                        self.record_color_left_data_dict = {'type':data_type, 'data':origin_data, 'time':int(color_timestamp)}
            time.sleep(0.02)

    def _right_get_img_func(self):
        while self.running:
            pip_ = self.pipelines[self.right_serial_number]
            align = self.aligns[self.right_serial_number]
            frames = pip_.wait_for_frames(timeout_ms=8000)
            with self.right_img_data_lock:
                self.right_last_frame = frames
                if self.record_flag:
                    color_frame = frames.get_color_frame()
                    timestamp = frames.get_timestamp()
                    color_timestamp = color_frame.get_timestamp()
                    color_image = np.asanyarray(color_frame.get_data())
                    data_type = TYPE_IMAGE_RIGHT
                    origin_data = color_image
                    if self.record_color_right_data_dict == None:
                        self.record_color_right_data_dict = {'type':data_type, 'data':origin_data, 'time': int(color_timestamp)}
            time.sleep(0.02)

    def _front_get_img_func(self):
        while self.running:
            pip_ = self.pipelines[self.front_serial_number]
            align = self.aligns[self.front_serial_number]
            frames = pip_.wait_for_frames(timeout_ms=8000)
            with self.front_img_data_lock:
                self.front_last_frame = frames
                if self.record_flag:
                    color_frame = frames.get_color_frame()
                    timestamp = frames.get_timestamp()
                    color_timestamp = color_frame.get_timestamp()
                    color_image = np.asanyarray(color_frame.get_data())
                    data_type = TYPE_IMAGE_FRONT
                    origin_data = color_image
                    if self.record_color_front_data_dict == None:
                        self.record_color_front_data_dict = {'type':data_type, 'data':origin_data, 'time': int(color_timestamp)}
            time.sleep(0.02)

    def rs_init(self):
        for item in [self.left_serial_number, self.right_serial_number, self.front_serial_number]:
            pipeline = rs.pipeline()
            config = rs.config()
            config.enable_device(item)
            config.enable_stream(rs.stream.color, self.width, self.height, rs.format.bgr8, self.fps)
            self.pipelines.update({item: pipeline})
            self.configs.update({item: config})
            self.aligns.update({item:rs.align(rs.stream.color)})
            pipeline.start(config)
        print ("rs init done")

    def get_imgs(self):
        if None in [self.left_last_frame, self.right_last_frame, self.front_last_frame]:
            return
        ret_list = []
        with self.left_img_data_lock:
            frames = self.left_last_frame
            color_frame = frames.get_color_frame()
            timestamp = frames.get_timestamp()
            color_timestamp = color_frame.get_timestamp()
            color_image = np.asanyarray(color_frame.get_data())
            ret_list.append((color_timestamp, color_image, None, None))
        with self.right_img_data_lock:
            frames = self.right_last_frame
            color_frame = frames.get_color_frame()
            timestamp = frames.get_timestamp()
            color_timestamp = color_frame.get_timestamp()
            color_image = np.asanyarray(color_frame.get_data())
            ret_list.append((color_timestamp, color_image, None, None))
        with self.front_img_data_lock:
            frames = self.front_last_frame
            color_frame = frames.get_color_frame()
            timestamp = frames.get_timestamp()
            color_timestamp = color_frame.get_timestamp()
            color_image = np.asanyarray(color_frame.get_data())
            ret_list.append((color_timestamp, color_image, None, None))
        return ret_list

    def fk(self, joint):
        frame_ = perform_forward_kinematics(self.fk_solver, joint)
        pose_ = [frame_.p.x(), frame_.p.y(), frame_.p.z()] + list(frame_.M.GetQuaternion())
        return pose_

    def lead_fk(self, joint):
        frame_ = perform_forward_kinematics(self.lead_fk_solver, joint)
        pose_ = [frame_.p.x(), frame_.p.y(), frame_.p.z()] + list(frame_.M.GetQuaternion())
        return pose_
    
    def ik(self, target_pose, init_joint=[0,0,0,0,0,0]):
        target_position = PyKDL.Vector(target_pose[0], target_pose[1], target_pose[2])
        m_ = quaternion_matrix(target_pose[3:])
        target_R = PyKDL.Rotation(
            m_[0,0], m_[0,1],m_[0,2],
            m_[1,0], m_[1,1],m_[1,2],
            m_[2,0], m_[2,1],m_[2,2],
        )
        target_frame = PyKDL.Frame(target_R, target_position)
        ik_res = perform_inverse_kinematics(self.ik_pos_solver, self.chain_, target_frame, init_joint)
        return ik_res

    def ik_far(self, target_pose, init_joint):
        init_joint = np.round(init_joint, decimals=3)
        init_pose = self.fk(init_joint)
        pose_trace, _ = cartesian_extend_with_gripper(init_pose, target_pose, 0.0, 0.0)
        ik_res_list = []
        for pose in pose_trace:
            ik_res = self.ik(pose, init_joint)
            init_joint = ik_res
            ik_res_list.append(ik_res)
        return ik_res_list[-1]
    
    def left_get_joint(self):
        return self.left_cur_joint

    def right_get_joint(self):
        return self.right_cur_joint
    
    def lead_left_get_joint(self):
        return self.left_lead_joint

    def lead_right_get_joint(self):
        return self.right_lead_joint

    def left_get_pose(self):
        return self.left_cur_pose

    def right_get_pose(self):
        return self.right_cur_pose
    
    def lead_left_get_pose(self):
        return self.left_lead_pose

    def lead_right_get_pose(self):
        return self.right_lead_pose
    
    def left_get_effort(self):
        return self.left_cur_effort
    
    def right_get_effort(self):
        return self.right_cur_effort

    def left_go_joint(self, joint, gripper, interp=True):
        if interp:
            # first, interpolate
            interp_target_joint_list = []
            cur_joint_state = self.left_get_joint()
            cur_joint = cur_joint_state[:6]
            cur_gripper = cur_joint_state[6]
            start_list = np.array(cur_joint)
            end_list = np.array(joint)
            num = int(np.linalg.norm(end_list - start_list) / 0.02)
            num = max(num, 1)
            start_list_with_gripper = np.concatenate((start_list, [gripper]))
            end_list_with_gripper = np.concatenate((end_list, [gripper]))
            interp_list = np.linspace(start_list_with_gripper, end_list_with_gripper, num, endpoint=True)
            interp_target_joint_list.extend(interp_list.tolist())
            self.left_target_joint_list = [item[:6] for item in interp_target_joint_list]
            self.left_target_gripper_list = [item[6] for item in interp_target_joint_list]
        else:
            self.left_target_joint_list = [joint]
            self.left_target_gripper_list = [gripper]

    def _left_go_joint_servo(self, joint, gripper):
        self.left_arm.servo_eef_pos([gripper])
        self.left_arm.servo_joint_pos(joint)

    def right_go_joint(self, joint, gripper, interp=True):
        if interp:
            # first, interpolate
            interp_target_joint_list = []
            cur_joint_state = self.right_get_joint()
            cur_joint = cur_joint_state[:6]
            cur_gripper = cur_joint_state[6]
            start_list = np.array(cur_joint)
            end_list = np.array(joint)
            num = int(np.linalg.norm(end_list - start_list) / 0.02)
            num = max(num, 1)
            start_list_with_gripper = np.concatenate((start_list, [gripper]))
            end_list_with_gripper = np.concatenate((end_list, [gripper]))
            interp_list = np.linspace(start_list_with_gripper, end_list_with_gripper, num, endpoint=True)
            interp_target_joint_list.extend(interp_list.tolist())
            self.right_target_joint_list = [item[:6] for item in interp_target_joint_list]
            self.right_target_gripper_list = [item[6] for item in interp_target_joint_list]
        else:
            self.right_target_joint_list = [joint]
            self.right_target_gripper_list = [gripper]

    def _right_go_joint_servo(self, joint, gripper):
        self.right_arm.servo_eef_pos([gripper])
        self.right_arm.servo_joint_pos(joint)

    def left_go_pose(self, pose, gripper, interp=True):
        target_joint = self.ik_far(pose, self.left_cur_joint[:6])
        self.left_go_joint(target_joint, gripper, interp)

    def right_go_pose(self, pose, gripper, interp=True):
        target_joint = self.ik_far(pose, self.right_cur_joint[:6])
        self.right_go_joint(target_joint, gripper, interp)

    def get_car_pose(self):
        if self.config_.USE_CAR:
            return self.car.get_pose()
        else:
            return None
        
    def get_car_speed(self):
        if self.config_.USE_CAR:
            return self.car.get_speed()
        else:
            return None
        
    def car_go_pose(self, x, y, theta):
        if self.config_.USE_CAR:
            self.car.set_pose(x, y, theta)

    def car_go_speed(self, v, w):
        if self.config_.USE_CAR:
            self.car.set_speed(v, w)