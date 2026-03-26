# Fold Towel Task

这个目录是叠毛巾任务的独立工作区，目的是把该任务相关的采集和转换文件单独隔离出来，避免后续切换其他任务时反复修改主目录下的配置。

## 目录说明

- `main.py`: 叠毛巾任务专用采集入口，保留了踏板驱动的 episode 流程。
- `config.py`: 叠毛巾任务专用配置。
- `meta_template.json`: 叠毛巾任务的元信息模板。
- `convert_to_lerobot.py`: 叠毛巾任务的数据转换脚本。

## 当前策略

这里采用“任务专属目录 + 局部复制”的方式：

- 任务相关、后续大概率会调整的文件，单独复制在这里。
- 驱动启动脚本和主从跟随脚本暂时继续复用上层目录中的共享版本。

## 运行方式

机械臂驱动和主从跟随仍然使用上层共享脚本：

```bash
cd /Users/mugglezzzh/WorkSpace/Rlinf_Proj/Dexmal/data_collection
bash ./start_wired.sh
```

采集叠毛巾数据：

```bash
python /Users/mugglezzzh/WorkSpace/Rlinf_Proj/Dexmal/data_collection/fold_towel/main.py
```

转换叠毛巾数据：

```bash
python /Users/mugglezzzh/WorkSpace/Rlinf_Proj/Dexmal/data_collection/fold_towel/convert_to_lerobot.py
```

## 当前和主目录的差异

这里尽量保持和主目录 `data_collection` 下默认版本一致，当前只保留这类必要差异：

- 任务名和 prompt 改成叠毛巾
- 数据保存路径改到本目录自己的 `eps/`
- 数据转换输出路径改到本目录自己的 `lr_dataset/`
- `repo_id` 改成 `fold_towel`

## 路径约定

这个目录下的脚本已经改成优先使用“相对当前文件目录”的路径，因此可以直接从仓库根目录运行，不需要先 `cd` 到本目录。
