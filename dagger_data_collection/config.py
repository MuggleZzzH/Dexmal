
class DosW1Config:
    # for arms
    URDF_FILE = "/home/ubuntu/dos_w1/airbot/airbot_api/descriptions/airbot_urdf/play_g2/urdf/play_g2.urdf"
    BASE_LINK = "base_link"
    EE_LINK = "end_link"
    # for camera
    USE_CAM = False
    GLOBAL_CAMERA_SERIAL_NUMBER = "420122070766"
    LEFT_CAMERA_SERIAL_NUMBER = "419622073493"
    RIGHT_CAMERA_SERIAL_NUMBER = "420122070742"
    # for lead arms
    USE_LEAD_ARMS = True
    LEAD_URDF_FILE = "/home/ubuntu/dos_w1/airbot/airbot_api/descriptions/airbot_urdf/replay/urdf/replay.urdf"
    LEAD_BASE_LINK = "base_link"
    LEAD_EE_LINK = "end_link"
    # for log
    record_data_dir = "/home/ubuntu/dos_w1_rrd_data"
    # for car
    ADDR = "ws://192.168.31.7:6060"
    USE_CAR = False
    POSITION_THRESHOLD = 0.01
    THETA_THRESHOLD = 0.04
    KP_V = 1.0
    KI_V = 0.0
    KD_V = 0.02
    KP_W = 1.5
    KI_W = 0.1
    KD_W = 0.0
    V_MAX = 0.5
    W_MAX = 0.5
    IV_MAX = 1.2
    IW_MAX = 1.0


class DataCollectionConfig:
    # for data collection
    save_root_dir: str = "./episodes"
    GLOBAL_CAMERA_SERIAL_NUMBER = "420122070766"
    LEFT_CAMERA_SERIAL_NUMBER = "419622073493"
    RIGHT_CAMERA_SERIAL_NUMBER = "420122070742"
    # for data conversion
    repo_id: str = "stack_bowls"
    root_dir: str = "./lr_dataset"
    origin_data_path: str = "./episodes/20251111"
    joint_move_threshold: float = 0.05
    gripper_move_threshold: float = 0.003