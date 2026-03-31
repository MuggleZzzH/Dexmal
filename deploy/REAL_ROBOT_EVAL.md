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
python dagger_data_collection/data_collection.py \
  --operator eval \
  --manager eval \
  --job_uuid eval
```

Manual takeover mode is unavailable unless `--enable-lead-arms` is passed.

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
