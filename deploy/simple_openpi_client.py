#!/usr/bin/env python3
"""Minimal Dexmal OpenPI websocket client.

This client intentionally avoids the full OpenPI runtime/environment stack.
It only:
1. reads Dexmal robot state + three camera frames,
2. sends a canonical OpenPI observation to the websocket policy server,
3. prints the returned action in shadow mode, or
4. executes a clipped 14D joint target on the robot.

The canonical observation schema matches the Dexmal OpenPI training setup:
    - state: 14D (left 6 joints + left gripper + right 6 joints + right gripper)
    - images.cam_high: front camera
    - images.cam_left_wrist: left camera
    - images.cam_right_wrist: right camera
"""

from __future__ import annotations

import argparse
import logging
import sys
import time
from pathlib import Path
from typing import Any

import numpy as np

REPO_ROOT = Path(__file__).resolve().parents[1]
AIRBOT_API_ROOT = REPO_ROOT / "airbot" / "airbot_api"
if str(AIRBOT_API_ROOT) not in sys.path:
    sys.path.insert(0, str(AIRBOT_API_ROOT))
if str(REPO_ROOT) not in sys.path:
    sys.path.insert(0, str(REPO_ROOT))

from airbot_sdk.Airbot import AirbotRobot  # noqa: E402
from airbot_sdk.configs.config import DosW1Config  # noqa: E402
from openpi_client import action_chunk_broker  # noqa: E402
from openpi_client import image_tools  # noqa: E402
from openpi_client import websocket_client_policy  # noqa: E402


DEFAULT_PROMPT = "fold the towel"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Minimal Dexmal OpenPI websocket client.")
    parser.add_argument("--host", default="127.0.0.1", help="OpenPI server host.")
    parser.add_argument("--port", type=int, default=8000, help="OpenPI server port.")
    parser.add_argument("--api-key", default=None, help="Optional websocket API key.")
    parser.add_argument(
        "--prompt",
        default=None,
        help="Task prompt. Defaults to server metadata default_prompt, then a fold-towel fallback.",
    )
    parser.add_argument(
        "--action-horizon",
        type=int,
        default=5,
        help="How many action chunk steps to consume locally before refreshing from the server.",
    )
    parser.add_argument(
        "--num-steps",
        type=int,
        default=0,
        help="Number of control loop steps to run. 0 means run until Ctrl-C.",
    )
    parser.add_argument(
        "--step-hz",
        type=float,
        default=5.0,
        help="Client loop rate.",
    )
    parser.add_argument(
        "--render-height",
        type=int,
        default=224,
        help="Observation image height sent to the server.",
    )
    parser.add_argument(
        "--render-width",
        type=int,
        default=224,
        help="Observation image width sent to the server.",
    )
    parser.add_argument(
        "--execute",
        action="store_true",
        help="Actually send clipped joint targets to the robot. Default is shadow mode.",
    )
    parser.add_argument(
        "--interp",
        action="store_true",
        help="Use AirbotRobot interpolation when sending each action target.",
    )
    parser.add_argument(
        "--action-scale",
        type=float,
        default=1.0,
        help="Scale applied to the delta between current state and model target before clipping.",
    )
    parser.add_argument(
        "--max-joint-delta",
        type=float,
        default=0.05,
        help="Per-step per-joint limit in radians.",
    )
    parser.add_argument(
        "--max-gripper-delta",
        type=float,
        default=0.01,
        help="Per-step gripper command limit.",
    )
    parser.add_argument(
        "--bgr-to-rgb",
        action="store_true",
        help="Convert RealSense BGR frames to RGB before sending to the server.",
    )
    parser.add_argument("--left-url", default="localhost", help="Left follow arm host.")
    parser.add_argument("--right-url", default="localhost", help="Right follow arm host.")
    parser.add_argument("--left-port", type=int, default=50051, help="Left follow arm port.")
    parser.add_argument("--right-port", type=int, default=50053, help="Right follow arm port.")
    parser.add_argument(
        "--front-camera-id",
        default=DosW1Config.GLOBAL_CAMERA_SERIAL_NUMBER,
        help="Front RealSense serial number.",
    )
    parser.add_argument(
        "--left-camera-id",
        default=DosW1Config.LEFT_CAMERA_SERIAL_NUMBER,
        help="Left RealSense serial number.",
    )
    parser.add_argument(
        "--right-camera-id",
        default=DosW1Config.RIGHT_CAMERA_SERIAL_NUMBER,
        help="Right RealSense serial number.",
    )
    parser.add_argument(
        "--urdf-file",
        default=DosW1Config.URDF_FILE,
        help="URDF file used by the Airbot SDK kinematics.",
    )
    parser.add_argument(
        "--disable-cameras",
        action="store_true",
        help="Disable camera capture and send zero images instead.",
    )
    parser.add_argument(
        "--startup-timeout",
        type=float,
        default=20.0,
        help="Maximum seconds to wait for robot state and first camera frames.",
    )
    return parser.parse_args()


def build_runtime_config(args: argparse.Namespace):
    return type(
        "RuntimeDosW1Config",
        (DosW1Config,),
        {
            "URDF_FILE": args.urdf_file,
            "USE_CAM": not args.disable_cameras,
            "GLOBAL_CAMERA_SERIAL_NUMBER": args.front_camera_id,
            "LEFT_CAMERA_SERIAL_NUMBER": args.left_camera_id,
            "RIGHT_CAMERA_SERIAL_NUMBER": args.right_camera_id,
            "USE_LEAD_ARMS": False,
            "USE_CAR": False,
        },
    )


def preprocess_image(
    image: np.ndarray,
    *,
    height: int,
    width: int,
    bgr_to_rgb: bool,
) -> np.ndarray:
    if bgr_to_rgb:
        image = image[..., ::-1]
    image = image_tools.convert_to_uint8(image_tools.resize_with_pad(image, height, width))
    return np.ascontiguousarray(np.transpose(image, (2, 0, 1)))


def wait_until_ready(robot: AirbotRobot, timeout: float, require_cameras: bool) -> None:
    deadline = time.time() + timeout
    while time.time() < deadline:
        left = robot.left_get_joint()
        right = robot.right_get_joint()
        imgs = robot.get_imgs() if require_cameras else True
        if len(left) == 7 and len(right) == 7 and imgs is not None:
            return
        time.sleep(0.1)
    raise TimeoutError("Timed out waiting for robot state or first camera frames.")


def build_observation(
    robot: AirbotRobot,
    *,
    prompt: str,
    height: int,
    width: int,
    bgr_to_rgb: bool,
    use_cameras: bool,
) -> dict[str, Any]:
    left_state = np.asarray(robot.left_get_joint(), dtype=np.float32)
    right_state = np.asarray(robot.right_get_joint(), dtype=np.float32)
    if left_state.shape[0] != 7 or right_state.shape[0] != 7:
        raise RuntimeError(
            f"Expected 7D per arm state, got left={left_state.shape} right={right_state.shape}"
        )

    if use_cameras:
        imgs = robot.get_imgs()
        if imgs is None or len(imgs) != 3:
            raise RuntimeError("Camera frames are not ready yet.")
        left_img = imgs[0][1]
        right_img = imgs[1][1]
        front_img = imgs[2][1]
    else:
        zero_img = np.zeros((height, width, 3), dtype=np.uint8)
        left_img = zero_img
        right_img = zero_img
        front_img = zero_img

    return {
        "state": np.concatenate([left_state, right_state]).astype(np.float32),
        "images": {
            "cam_high": preprocess_image(
                front_img,
                height=height,
                width=width,
                bgr_to_rgb=bgr_to_rgb,
            ),
            "cam_left_wrist": preprocess_image(
                left_img,
                height=height,
                width=width,
                bgr_to_rgb=bgr_to_rgb,
            ),
            "cam_right_wrist": preprocess_image(
                right_img,
                height=height,
                width=width,
                bgr_to_rgb=bgr_to_rgb,
            ),
        },
        "prompt": prompt,
    }


def clip_action(
    current_state: np.ndarray,
    action: np.ndarray,
    *,
    action_scale: float,
    max_joint_delta: float,
    max_gripper_delta: float,
) -> np.ndarray:
    if current_state.shape != (14,):
        raise ValueError(f"Expected 14D current state, got {current_state.shape}")
    if action.shape != (14,):
        raise ValueError(f"Expected 14D action, got {action.shape}")

    scaled_target = current_state + (action - current_state) * action_scale
    delta = scaled_target - current_state
    delta[:6] = np.clip(delta[:6], -max_joint_delta, max_joint_delta)
    delta[6] = np.clip(delta[6], -max_gripper_delta, max_gripper_delta)
    delta[7:13] = np.clip(delta[7:13], -max_joint_delta, max_joint_delta)
    delta[13] = np.clip(delta[13], -max_gripper_delta, max_gripper_delta)
    return (current_state + delta).astype(np.float32)


def apply_robot_action(robot: AirbotRobot, target: np.ndarray, *, interp: bool) -> None:
    robot.left_go_joint(target[:6].tolist(), float(target[6]), interp=interp)
    robot.right_go_joint(target[7:13].tolist(), float(target[13]), interp=interp)


def shutdown_robot(robot: AirbotRobot) -> None:
    try:
        robot.running = False
    except Exception:
        pass
    try:
        robot.left_arm.disconnect()
    except Exception:
        pass
    try:
        robot.right_arm.disconnect()
    except Exception:
        pass
    try:
        if getattr(robot.config_, "USE_CAM", False):
            for pipeline in robot.pipelines.values():
                try:
                    pipeline.stop()
                except Exception:
                    pass
    except Exception:
        pass


def main() -> None:
    args = parse_args()
    logging.basicConfig(
        level=logging.INFO,
        format="[%(asctime)s] [%(levelname)s] %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
        force=True,
    )

    ws_client = websocket_client_policy.WebsocketClientPolicy(
        host=args.host,
        port=args.port,
        api_key=args.api_key,
    )
    server_metadata = ws_client.get_server_metadata()
    logging.info("Connected to server. metadata=%s", server_metadata)

    policy = action_chunk_broker.ActionChunkBroker(
        policy=ws_client,
        action_horizon=args.action_horizon,
    )
    prompt = args.prompt or server_metadata.get("default_prompt") or DEFAULT_PROMPT

    runtime_config = build_runtime_config(args)
    robot = AirbotRobot(
        runtime_config,
        left_port=args.left_port,
        left_url=args.left_url,
        right_port=args.right_port,
        right_url=args.right_url,
    )

    try:
        wait_until_ready(robot, args.startup_timeout, require_cameras=not args.disable_cameras)
        logging.info(
            "Robot ready. mode=%s, prompt=%r, action_horizon=%d, step_hz=%.2f",
            "execute" if args.execute else "shadow",
            prompt,
            args.action_horizon,
            args.step_hz,
        )

        step = 0
        while args.num_steps <= 0 or step < args.num_steps:
            loop_start = time.time()
            obs = build_observation(
                robot,
                prompt=prompt,
                height=args.render_height,
                width=args.render_width,
                bgr_to_rgb=args.bgr_to_rgb,
                use_cameras=not args.disable_cameras,
            )
            infer_start = time.time()
            result = policy.infer(obs)
            infer_ms = 1000.0 * (time.time() - infer_start)

            raw_action = np.asarray(result["actions"], dtype=np.float32).reshape(-1)
            current_state = np.asarray(obs["state"], dtype=np.float32)
            safe_action = clip_action(
                current_state,
                raw_action,
                action_scale=args.action_scale,
                max_joint_delta=args.max_joint_delta,
                max_gripper_delta=args.max_gripper_delta,
            )

            if args.execute:
                apply_robot_action(robot, safe_action, interp=args.interp)

            if step == 0 or (step + 1) % 10 == 0:
                logging.info(
                    "step=%d infer_ms=%.1f raw_left=%s raw_right=%s safe_left=%s safe_right=%s",
                    step,
                    infer_ms,
                    np.round(raw_action[:7], 4).tolist(),
                    np.round(raw_action[7:], 4).tolist(),
                    np.round(safe_action[:7], 4).tolist(),
                    np.round(safe_action[7:], 4).tolist(),
                )

            step += 1
            elapsed = time.time() - loop_start
            sleep_time = max(0.0, (1.0 / args.step_hz) - elapsed)
            if sleep_time > 0:
                time.sleep(sleep_time)

    except KeyboardInterrupt:
        logging.info("Interrupted by user.")
    finally:
        shutdown_robot(robot)


if __name__ == "__main__":
    main()
