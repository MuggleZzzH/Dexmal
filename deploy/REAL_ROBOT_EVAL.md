# Dexmal Real-Robot Eval

This deployment path is for **eval only**. It does not change the training pipeline and does not require DAgger to run.

## Architecture

- Robot side: `dagger_data_collection/data_collection.py`
- Server side: `toolkits/dexmal_eval_bridge.py` in the RLinf repo

The control loop is fixed to:

1. Robot gateway returns one observation when it is in `model mode` and has no pending action chunk.
2. Server bridge runs one policy inference.
3. Server bridge postprocesses the policy output into **absolute 14D actions**.
4. Server bridge sends one full `50 x 14` action chunk back to the robot.
5. Robot executes all 50 actions at roughly 50 Hz.
6. After the queue is empty, the next observation can be requested.

## Prerequisites

- Robot machine:
  - `airbot_server` is up
  - `dagger_data_collection/data_collection.py` is running
  - the gateway API port is reachable from the server
- Server machine:
  - RLinf environment can import `openpi`
  - the trained checkpoint exists
  - `<assets_dir>/<asset_id>/norm_stats.json` exists

## Key Rules

- The trained model is assumed to use `pi0_dexmal_aloha`.
- Training data may stay as absolute joint targets.
- Deployment must execute **postprocessed absolute actions**, not raw model outputs.
- The robot gateway enforces:
  - exact action horizon `50`
  - exact action dim `14`
  - no new chunk while one is still executing
  - `obs_id` must match the latest outstanding observation

## Robot Gateway

Default eval behavior disables lead arms. Re-enable them only if manual takeover is needed:

```bash
cd dagger_data_collection
python data_collection.py \
  --operator eval \
  --manager eval \
  --job_uuid eval
```

Manual takeover mode is unavailable unless `--enable-lead-arms` is passed.

Useful runtime endpoints:

- `GET /mode`
- `GET /state`
- `GET /runtime_state`
- `GET /infer_state`
- `POST /infer_action`

## Quick Start

### 1. Mock protocol check

This verifies the robot gateway protocol without loading a real checkpoint:

```bash
cd <RLINF_REPO>
python toolkits/dexmal_eval_bridge.py \
  --robot-host <robot_ip> \
  --robot-port 8000 \
  --mock-policy hold-state \
  --set-model-mode-on-start \
  --set-stop-mode-on-exit \
  --shadow \
  --max-chunks 5
```

### 2. Real checkpoint, shadow mode

This verifies real inference and postprocess without executing motion:

```bash
cd <RLINF_REPO>
python toolkits/dexmal_eval_bridge.py \
  --robot-host <robot_ip> \
  --robot-port 8000 \
  --config-name pi0_dexmal_aloha \
  --checkpoint-dir <checkpoint_dir> \
  --assets-dir <assets_root> \
  --repo-id <dataset_root_or_repo_id> \
  --asset-id fold_towel \
  --set-model-mode-on-start \
  --set-stop-mode-on-exit \
  --shadow \
  --max-chunks 5
```

### 3. Real checkpoint, one real chunk

This executes one full `50 x 14` chunk:

```bash
cd <RLINF_REPO>
python toolkits/dexmal_eval_bridge.py \
  --robot-host <robot_ip> \
  --robot-port 8000 \
  --config-name pi0_dexmal_aloha \
  --checkpoint-dir <checkpoint_dir> \
  --assets-dir <assets_root> \
  --repo-id <dataset_root_or_repo_id> \
  --asset-id fold_towel \
  --set-model-mode-on-start \
  --set-stop-mode-on-exit \
  --max-chunks 1 \
  --action-scale 1.0 \
  --max-joint-delta 0.08 \
  --max-gripper-delta 0.01
```

## Server Bridge Helpers

From the RLinf repo, you can also use:

- `toolkits/run_dexmal_eval_shadow.sh`
- `toolkits/run_dexmal_eval_real.sh`

Set these environment variables before running:

```bash
export ROBOT_HOST=<robot_ip>
export CHECKPOINT_DIR=<checkpoint_dir>
export ASSETS_DIR=<assets_root>      # optional; defaults to CHECKPOINT_DIR
export REPO_ID=<dataset_root_or_repo_id>
export ASSET_ID=fold_towel
```

Then run:

```bash
bash toolkits/run_dexmal_eval_shadow.sh
```

or:

```bash
bash toolkits/run_dexmal_eval_real.sh
```

## Server Bridge

From the RLinf repo:

```bash
python toolkits/dexmal_eval_bridge.py \
  --robot-host <robot_ip> \
  --robot-port 8000 \
  --config-name pi0_dexmal_aloha \
  --checkpoint-dir <checkpoint_dir> \
  --assets-dir <assets_root> \
  --repo-id <dataset_root_or_repo_id> \
  --asset-id fold_towel \
  --set-model-mode-on-start \
  --set-stop-mode-on-exit
```

Recommended first run:

```bash
python toolkits/dexmal_eval_bridge.py \
  --robot-host <robot_ip> \
  --robot-port 8000 \
  --config-name pi0_dexmal_aloha \
  --checkpoint-dir <checkpoint_dir> \
  --assets-dir <assets_root> \
  --repo-id <dataset_root_or_repo_id> \
  --asset-id fold_towel \
  --set-model-mode-on-start \
  --set-stop-mode-on-exit \
  --shadow
```

## Mock Validation

Before loading a real checkpoint, you can validate the full gateway protocol with a mock policy:

```bash
python toolkits/dexmal_eval_bridge.py \
  --robot-host <robot_ip> \
  --robot-port 8000 \
  --mock-policy hold-state \
  --set-model-mode-on-start \
  --set-stop-mode-on-exit \
  --shadow
```

## Logs

The server bridge writes:

- `chunks.jsonl`
- `summary.json`

under `eval_logs/<run_name>/`.

## Troubleshooting

If the robot does not move:

1. Query the gateway runtime state:

```bash
curl -s http://<robot_ip>:8000/runtime_state
```

Expected during execution:
- `control_mode: 1`
- `pending_actions` rises after chunk post, then drains back to `0`

2. Run a clearly visible mock command:

```bash
cd <RLINF_REPO>
python toolkits/dexmal_eval_bridge.py \
  --robot-host <robot_ip> \
  --robot-port 8000 \
  --mock-policy zeros \
  --set-model-mode-on-start \
  --max-chunks 1 \
  --action-scale 1.0 \
  --max-joint-delta 0.08 \
  --max-gripper-delta 0.01
```

Interpretation:
- if `zeros` also does not move, the issue is on the robot execution side
- if `zeros` moves but the real checkpoint does not, the model output is too conservative

3. Inspect the robot gateway logs:

- `Accepted model chunk ...`
- `Starting model chunk execution ...`
- `Completed model chunk execution`

4. Inspect bridge logs in `eval_logs/<run_name>/chunks.jsonl`:

- `current_state`
- `raw_first_action`
- `clipped_first_action`
- `first_delta_max_abs`
- `last_delta_max_abs`
