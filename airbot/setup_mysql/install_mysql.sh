#!/bin/bash

# MySQL自动安装和配置脚本 (支持配置文件)
# 支持Ubuntu/Debian系统

set -e

echo "=== MySQL自动安装配置脚本 ==="

# 检查是否为root用户
if [ "$EUID" -ne 0 ]; then 
    echo "请以root用户运行此脚本"
    exit 1
fi

# 获取脚本目录
SCRIPT_DIR="$(dirname "$0")"
cd "$SCRIPT_DIR"

# 加载配置文件
if [ -f "config.env" ]; then
    echo "加载配置文件: config.env"
    export $(grep -v '^#' config.env | xargs)
else
    echo "未找到config.env，使用默认配置"
    export DB_NAME=aloha_db
    export DB_USER=aloha
    export DB_PASSWORD='7g$nd9L#'
    export DB_ROOT_PASSWORD=rootpassword123
    export TABLE_NAME=uploads
    export DB_HOST=localhost
    export DB_PORT=3306
fi

# 显示配置信息
echo "数据库配置:"
echo "  数据库名: $DB_NAME"
echo "  用户名: $DB_USER"
echo "  表名: $TABLE_NAME"
echo "  端口: $DB_PORT"

# 更新包管理器
echo "更新包管理器..."
#apt-get update

# 安装必要工具
apt-get install -y gettext-base
apt-get install -y ffmpeg

# 安装MySQL服务器
echo "安装MySQL服务器..."
DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server

# 启动MySQL服务
echo "启动MySQL服务..."
mkdir -p /var/run/mysqld
chown mysql:mysql /var/run/mysqld
service mysql start

# 等待MySQL服务启动
echo "等待MySQL服务启动..."
sleep 10

# 检查MySQL是否运行
if ! pgrep -x "mysqld" > /dev/null; then
    echo "MySQL服务启动失败，尝试手动启动..."
    mysqld_safe --user=mysql --datadir=/var/lib/mysql &
    sleep 15
fi

# 处理init.sql文件，替换变量
echo "处理初始化脚本..."
envsubst < init.sql > init_processed.sql

# 执行初始化脚本
echo "执行数据库初始化..."
mysql -u root < init_processed.sql

echo "MySQL安装和配置完成！"
echo "数据库: $DB_NAME"
echo "用户: $DB_USER"
echo "表名: $TABLE_NAME"

# 验证连接
echo "验证数据库连接..."
mysql -u $DB_USER -p"$DB_PASSWORD" -e "USE $DB_NAME; SHOW TABLES;"

# 配置MySQL开机自启动
echo "配置MySQL开机自启动..."
systemctl enable mysql
systemctl start mysql

echo "✓ MySQL已配置为开机自启动"

echo "=== 安装完成 ==="
