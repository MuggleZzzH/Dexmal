import os


BASE_DIR = os.path.dirname(os.path.abspath(__file__))


class DataCollectionConfig:
    # for data collection
    save_root_dir: str = os.path.join(BASE_DIR, "eps")
    top_camera_id = "420122070766"
    left_camera_id = "419622073493"
    right_camera_id = "420122070742"

    # for data conversion
    repo_id: str = "fold_towel"
    root_dir: str = os.path.join(BASE_DIR, "lr_dataset")
    # update this to the concrete recording date before conversion, e.g. eps/20260326
    origin_data_path: str = os.path.join(BASE_DIR, "eps", "20260326")
    joint_move_threshold: float = 0.03
    gripper_move_threshold: float = 0.002
