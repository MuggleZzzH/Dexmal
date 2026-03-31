#!/usr/bin/env python3
"""Repair LeRobot task metadata for datasets with inconsistent task_index mappings.

Typical use cases:
1. Rebuild ``meta/tasks.jsonl`` so every task_index referenced by parquet data exists.
2. For single-task datasets, collapse all used task indices to the same prompt.
3. Optionally rewrite selected episodes to a single task_index for a cleaner dataset.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import numpy as np
import pyarrow as pa
import pyarrow.parquet as pq


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Repair LeRobot meta/tasks.jsonl.")
    parser.add_argument(
        "--dataset-root",
        required=True,
        help="LeRobot dataset root containing data/ and meta/.",
    )
    parser.add_argument(
        "--uniform-prompt",
        default=None,
        help="If set, every used task_index will map to this prompt in tasks.jsonl.",
    )
    parser.add_argument(
        "--rewrite-episodes",
        type=int,
        nargs="*",
        default=None,
        help="Optional episode indices whose task_index should be rewritten.",
    )
    parser.add_argument(
        "--target-task-index",
        type=int,
        default=None,
        help="Target task_index for --rewrite-episodes. Defaults to an existing index for the prompt, else max+1.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print the planned changes without writing files.",
    )
    return parser.parse_args()


def load_tasks(tasks_path: Path) -> dict[int, str]:
    tasks: dict[int, str] = {}
    if not tasks_path.exists():
        return tasks
    with tasks_path.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            row = json.loads(line)
            tasks[int(row["task_index"])] = row["task"]
    return tasks


def parquet_files(dataset_root: Path) -> list[Path]:
    return sorted((dataset_root / "data").rglob("*.parquet"))


def read_column_as_numpy(table: pa.Table, name: str) -> np.ndarray:
    return table[name].combine_chunks().to_numpy(zero_copy_only=False)


def collect_usage(dataset_root: Path) -> tuple[dict[int, int], dict[Path, dict[str, np.ndarray]]]:
    usage: dict[int, int] = {}
    file_cache: dict[Path, dict[str, np.ndarray]] = {}

    for path in parquet_files(dataset_root):
        table = pq.read_table(path, columns=["episode_index", "task_index"])
        episode_index = read_column_as_numpy(table, "episode_index").astype(np.int64)
        task_index = read_column_as_numpy(table, "task_index").astype(np.int64)
        file_cache[path] = {
            "episode_index": episode_index,
            "task_index": task_index,
        }
        for idx in task_index.tolist():
            usage[idx] = usage.get(idx, 0) + 1

    return usage, file_cache


def choose_target_task_index(
    existing_tasks: dict[int, str],
    usage: dict[int, int],
    uniform_prompt: str | None,
    explicit_target: int | None,
) -> int:
    if explicit_target is not None:
        return explicit_target

    if uniform_prompt is not None:
        for task_index, prompt in existing_tasks.items():
            if prompt == uniform_prompt:
                return task_index

    existing_indices = set(existing_tasks) | set(usage)
    return (max(existing_indices) + 1) if existing_indices else 0


def rewrite_episode_task_indices(
    dataset_root: Path,
    episodes: set[int],
    target_task_index: int,
    dry_run: bool,
) -> None:
    for path in parquet_files(dataset_root):
        table = pq.read_table(path)
        if "episode_index" not in table.column_names or "task_index" not in table.column_names:
            continue

        episode_index = read_column_as_numpy(table, "episode_index").astype(np.int64)
        mask = np.isin(episode_index, np.asarray(sorted(episodes), dtype=np.int64))
        if not mask.any():
            continue

        old_task_index = read_column_as_numpy(table, "task_index").astype(np.int64)
        new_task_index = old_task_index.copy()
        new_task_index[mask] = target_task_index

        changed_rows = int(mask.sum())
        changed_episodes = sorted(set(episode_index[mask].tolist()))
        print(
            f"[rewrite] {path}: rows={changed_rows}, episodes={changed_episodes}, target_task_index={target_task_index}"
        )

        if dry_run:
            continue

        column_idx = table.schema.get_field_index("task_index")
        new_column = pa.array(new_task_index, type=table.schema.field(column_idx).type)
        table = table.set_column(column_idx, "task_index", new_column)
        pq.write_table(table, path)


def rebuild_tasks_jsonl(
    dataset_root: Path,
    existing_tasks: dict[int, str],
    usage: dict[int, int],
    uniform_prompt: str | None,
    target_task_index: int | None,
    dry_run: bool,
) -> None:
    tasks_path = dataset_root / "meta" / "tasks.jsonl"
    rebuilt: dict[int, str] = {}

    for task_index in sorted(usage):
        if uniform_prompt is not None:
            rebuilt[task_index] = uniform_prompt
        elif task_index in existing_tasks:
            rebuilt[task_index] = existing_tasks[task_index]
        else:
            raise ValueError(
                f"task_index={task_index} is used by parquet data but missing from tasks.jsonl. "
                "Provide --uniform-prompt to repair it."
            )

    if uniform_prompt is not None and target_task_index is not None and target_task_index not in rebuilt:
        rebuilt[target_task_index] = uniform_prompt

    print(f"[tasks] rebuilding {tasks_path}")
    for task_index, prompt in rebuilt.items():
        print(f"  task_index={task_index}: {prompt}")

    if dry_run:
        return

    tasks_path.parent.mkdir(parents=True, exist_ok=True)
    with tasks_path.open("w", encoding="utf-8") as f:
        for task_index, prompt in rebuilt.items():
            f.write(
                json.dumps(
                    {"task_index": int(task_index), "task": prompt},
                    ensure_ascii=False,
                )
                + "\n"
            )


def main() -> None:
    args = parse_args()
    dataset_root = Path(args.dataset_root).expanduser().resolve()
    tasks_path = dataset_root / "meta" / "tasks.jsonl"

    existing_tasks = load_tasks(tasks_path)
    usage, _ = collect_usage(dataset_root)

    print(f"[scan] dataset_root={dataset_root}")
    print(f"[scan] used task indices={sorted(usage)}")
    print(f"[scan] tasks.jsonl indices={sorted(existing_tasks)}")

    target_task_index = None
    if args.rewrite_episodes:
        target_task_index = choose_target_task_index(
            existing_tasks,
            usage,
            args.uniform_prompt,
            args.target_task_index,
        )
        rewrite_episode_task_indices(
            dataset_root,
            set(args.rewrite_episodes),
            target_task_index,
            args.dry_run,
        )
        usage, _ = collect_usage(dataset_root)

    rebuild_tasks_jsonl(
        dataset_root,
        existing_tasks,
        usage,
        args.uniform_prompt,
        target_task_index,
        args.dry_run,
    )

    print("[done] repair completed")


if __name__ == "__main__":
    main()
