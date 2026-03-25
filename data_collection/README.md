## 启动

打开新终端，依次运行以下命令：

```bash
cd ~/data_collection
conda activate py310
bash ./staret_wired.sh
```

等待一段时间后，当能够通过主臂操作从臂时，即可进行下面的数据采集操作。

## 数据采集

运行以下命令，`operator_name` 和 `manager_name` 换成相应的名字，`job_uuid` 替换成相应的uuid ：

```bash
python data_collection.py  --operator [operator_name] --manager [manager_name] --job_uuid [job_uuid]
```

通常采集脚本会为数据自动生成 `episode_id` 。若要指定 `episode_id` ，可使用 `--episode` 参数，将 `episode_id` 替换为制定的id ：

```bash
python data_collection.py  --operator [operator_name] --manager [manager_name] --job_uuid [job_uuid] --episode [episode_id]
```

出现以下提示之后：

```
[...] [INFO] Press S to start or Q to exit

```

若在此之前出现报错内容，则按 Q 键退出，并手动删除相应的episode（通常为最新生成的一条）。否则，按 S 键开始录制，录制完成后按 Q 键退出。
