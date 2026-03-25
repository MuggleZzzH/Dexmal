import cv2
import time
import airbot_sdk
from airbot_sdk.Airbot import AirbotRobot
from airbot_sdk.configs.config import DosW1Config
import numpy as np


def main():
    config_ = DosW1Config()
    r = AirbotRobot(config_)
    r._start_record()
    r.left_go_joint([0,0,0,1.5,0,-1.5], 0.01)
    r.right_go_joint([0,0,0,1.5,0,-1.5], 0.01)
    print ("go init done")
    time.sleep(3.0)

    # test go joint
    left_target_joint = [0, -0.6, 0.5, 1.5, -0.30, -1.5]
    r.left_go_joint(left_target_joint, 0.01)
    right_target_joint = [0, -0.6, 0.5, 1.5, -0.30, -1.5]
    r.right_go_joint(right_target_joint, 0.01)
    time.sleep(3.0)
    print (r.left_get_joint(), r.left_get_pose(), r.left_get_effort())
    print (r.right_get_joint(), r.right_get_pose(), r.right_get_effort())
    if config_.USE_LEAD_ARMS:
        print (r.lead_left_get_joint(), r.lead_left_get_pose())
        print (r.lead_right_get_joint(), r.lead_right_get_pose())
    r.left_go_joint([0,0,0,1.5,0,-1.5], 0.0)
    r.right_go_joint([0,0,0,1.5,0,-1.5], 0.0)
    time.sleep(3.0)

    # # test go pose
    # left_target_pose = [0.10311423513500029, 0.35216300142580104, 0.21319745373915377, -0.12042472719405146, 0.1575412351102785, 0.5847331407944432, 0.786616678171034]
    # r.left_go_pose(left_target_pose, 0.01)
    # right_target_pose = [0.09318308194034176, -0.3549200449408352, 0.21319745373915377, 0.119586673169399, 0.158178327466531, -0.6015355088168919, 0.7738434440845056]
    # r.right_go_pose(right_target_pose, 0.01)
    # time.sleep(3.0)
    # r.left_go_joint([0,0,0,1.5,0,-1.5], 0.0)
    # r.right_go_joint([0,0,0,1.5,0,-1.5], 0.0)
    # time.sleep(3.0)

    # # test car
    # s_time = time.time()
    # e_time = time.time()
    # while e_time - s_time < 3.0:
    #     print (r.get_car_pose())
    #     r.car_go_pose(0.2, 0.1, 0.5)
    #     e_time = time.time()

    time.sleep(5.0)
    record_file = r._stop_record()
    print ("{} test done".format(record_file))
    r.__del__()

if __name__ == "__main__":
    main()
