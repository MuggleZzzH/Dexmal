class DataCollectionConfig:
    # for data collection
    save_root_dir: str = "./eps"
    top_camera_id = "420122070766"
    left_camera_id = "419622073493"
    right_camera_id = "420122070742"
    # for data conversion
    repo_id: str = "stack_the_bowls_test"
    root_dir: str = "./lr_dataset_test"
    origin_data_path: str = "./eps/20260325/"
    joint_move_threshold: float = 0.03
    gripper_move_threshold: float = 0.002
