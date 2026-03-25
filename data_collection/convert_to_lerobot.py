import os

import lerobot.common.datasets.lerobot_dataset as lerobot_dataset
import numpy as np
import torch
from config import DataCollectionConfig
from lerobot.common.datasets.lerobot_dataset import LeRobotDataset

from open_pdd import Episode

config_ = DataCollectionConfig()
np.set_printoptions(precision=20)
REPO_ID = config_.repo_id
ROOT_DIR = os.path.join(config_.root_dir, REPO_ID)
OUTPUT_PATH = os.path.join(config_.root_dir, REPO_ID)
ORIGIN_DATA_PATH = config_.origin_data_path
JOINT_MOVE_THRESHOLD = config_.joint_move_threshold
GRIPPER_MOVE_THRESHOLD = config_.gripper_move_threshold


def check_move(joint_1, joint_2, gripper_1, gripper_2):
    if (
        np.linalg.norm(np.array(joint_1) - np.array(joint_2)) < JOINT_MOVE_THRESHOLD
        and np.abs(gripper_1 - gripper_2) < GRIPPER_MOVE_THRESHOLD
    ):
        return False
    else:
        return True


def main():
    output_path = OUTPUT_PATH
    if os.path.exists(output_path):
        raise FileExistsError(f"output directory not empty: {output_path}")

    dataset = LeRobotDataset.create(
        repo_id=REPO_ID,
        root=ROOT_DIR,
        robot_type="aloha",
        fps=30,
        features={
            "observation.images.front_image": {
                "dtype": "video",
                "shape": (480, 640, 3),
                "names": ["height", "width", "channel"],
            },
            "observation.images.left_image": {
                "dtype": "video",
                "shape": (480, 640, 3),
                "names": ["height", "width", "channel"],
            },
            "observation.images.right_image": {
                "dtype": "video",
                "shape": (480, 640, 3),
                "names": ["height", "width", "channel"],
            },
            "observation.state": {
                "dtype": "float32",
                "shape": (14,),
                "names": ["state"],
            },
            "observation.pose_state": {
                "dtype": "float32",
                "shape": (16,),
                "names": ["pose_state"],
            },
            "action": {
                "dtype": "float32",
                "shape": (14,),
                "names": ["actions"],
            },
            "pose_action": {
                "dtype": "float32",
                "shape": (16,),
                "names": ["pose_action"],
            },
        },
        image_writer_threads=4,
        image_writer_processes=2,
    )

    cnt_ = 0
    list_dir = sorted(os.listdir(ORIGIN_DATA_PATH), key=lambda x: int(x.split("_")[-1]))
    for dir_name in list_dir:
        print("generating: ", dir_name, cnt_)
        episode_meta_path = os.path.join(ORIGIN_DATA_PATH, dir_name, "meta.json")
        episode = Episode(episode_meta_path)
        init_frame = next(episode.iter_frames())
        # get last arm state, skip static frame
        last_left_arm_joint = init_frame["actions.left_arm"]["data"]["joint_positions"]
        last_left_arm_gripper = init_frame["actions.left_arm"]["data"]["gripper"]
        last_right_arm_joint = init_frame["actions.right_arm"]["data"]["joint_positions"]
        last_right_arm_gripper = init_frame["actions.right_arm"]["data"]["gripper"]
        cnt = 0
        for frame in episode.iter_frames():
            prompt_ = episode.meta.task_meta.prompt
            # get tmp left & right arm state
            tmp_left_arm_joint = frame["actions.left_arm"]["data"]["joint_positions"]
            tmp_left_arm_gripper = frame["actions.left_arm"]["data"]["gripper"]
            tmp_right_arm_joint = frame["actions.right_arm"]["data"]["joint_positions"]
            tmp_right_arm_gripper = frame["actions.right_arm"]["data"]["gripper"]
            tmp_left_arm_pose = frame["actions.left_arm"]["data"]["ee_positions"]
            tmp_right_arm_pose = frame["actions.right_arm"]["data"]["ee_positions"]
            # check if move
            if cnt != 0:
                left_move_flag = check_move(
                    tmp_left_arm_joint,
                    last_left_arm_joint,
                    tmp_left_arm_gripper,
                    last_left_arm_gripper,
                )
                right_move_flag = check_move(
                    tmp_right_arm_joint,
                    last_right_arm_joint,
                    tmp_right_arm_gripper,
                    last_right_arm_gripper,
                )
                if left_move_flag is False and right_move_flag is False:
                    continue

            last_left_arm_joint = tmp_left_arm_joint
            last_left_arm_gripper = tmp_left_arm_gripper
            last_right_arm_joint = tmp_right_arm_joint
            last_right_arm_gripper = tmp_right_arm_gripper
            # get front img
            front_img = frame["sensors.cam_front.rgb"]["data"]
            # get left img
            left_img = frame["sensors.cam_left.rgb"]["data"]
            # get right img
            right_img = frame["sensors.cam_right.rgb"]["data"]
            # feed lerobot dict data
            state_data = (
                tmp_left_arm_joint
                + [tmp_left_arm_gripper]
                + tmp_right_arm_joint
                + [tmp_right_arm_gripper]
            )
            pose_data = (
                tmp_left_arm_pose
                + [tmp_left_arm_gripper]
                + tmp_right_arm_pose
                + [tmp_right_arm_gripper]
            )
            dataset.add_frame(
                {
                    "observation.state": np.array(state_data, dtype=np.float32),
                    "observation.pose_state": np.array(pose_data, dtype=np.float32),
                    "action": np.array(state_data, dtype=np.float32),
                    "pose_action": np.array(pose_data, dtype=np.float32),
                    "task": prompt_,
                    "observation.images.front_image": front_img,
                    "observation.images.left_image": left_img,
                    "observation.images.right_image": right_img,
                }
            )
            cnt += 1
        dataset.save_episode()
        cnt_ += 1


def load_test():
    torch.set_printoptions(precision=20)
    dataset_meta = lerobot_dataset.LeRobotDatasetMetadata(repo_id=REPO_ID, root=ROOT_DIR)
    dataset = lerobot_dataset.LeRobotDataset(
        repo_id=REPO_ID,
        root=ROOT_DIR,
        delta_timestamps={key: [t / dataset_meta.fps for t in range(50)] for key in ["action"]},
    )
    # print some basic info example
    print(len(dataset))
    print(dataset[0]["task"])
    print(dataset[0]["action"].shape)
    print(dataset[0]["observation.images.right_image"].shape)
    print(dataset[0]["observation.state"].shape)

    # test dataloader generation
    dataloader = torch.utils.data.DataLoader(
        dataset,
        num_workers=4,
        batch_size=32,
        shuffle=True,
    )
    for batch in dataloader:
        print(f"{batch[dataset.meta.camera_keys[2]].shape=}")  # (32, 4, c, h, w)
        print(f"{batch['observation.state'].shape=}")  # (32, 6, c)
        print(f"{batch['action'].shape=}")  # (32, 64, c)
        break

    # test show image
    front_img = dataset[0][dataset.meta.camera_keys[2]]
    front_img = front_img.numpy()
    front_img = np.transpose(front_img, (1, 2, 0))
    front_img = (front_img * 255).astype(np.uint8)


if __name__ == "__main__":
    main()
    load_test()
