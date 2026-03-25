-- MySQL初始化脚本 (支持变量替换)
-- 创建数据库
CREATE DATABASE IF NOT EXISTS `${DB_NAME}` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

-- 使用数据库
USE `${DB_NAME}`;

-- 创建用户并授权
CREATE USER IF NOT EXISTS '${DB_USER}'@'localhost' IDENTIFIED BY '${DB_PASSWORD}';
CREATE USER IF NOT EXISTS '${DB_USER}'@'%' IDENTIFIED BY '${DB_PASSWORD}';
GRANT ALL PRIVILEGES ON `${DB_NAME}`.* TO '${DB_USER}'@'localhost';
GRANT ALL PRIVILEGES ON `${DB_NAME}`.* TO '${DB_USER}'@'%';
FLUSH PRIVILEGES;

-- 创建表
CREATE TABLE IF NOT EXISTS `${TABLE_NAME}` (
    `id` int NOT NULL AUTO_INCREMENT,
    `job_id` varchar(255),
    `file_path` varchar(255) NOT NULL,
    `object_key` varchar(255) NOT NULL,
    `is_upload` tinyint(1) DEFAULT '0',
    `is_delete` tinyint DEFAULT '0',
    `upload_error` text,
    `delete_error` text,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- 创建版本管理表
CREATE TABLE IF NOT EXISTS `${TABLE_NAME}_migrations` (
    `id` int NOT NULL AUTO_INCREMENT,
    `version` varchar(50) NOT NULL UNIQUE,
    `description` varchar(255) NOT NULL,
    `applied_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    INDEX `idx_version` (`version`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- 插入初始版本记录
INSERT IGNORE INTO `${TABLE_NAME}_migrations` (version, description) 
VALUES ('v1.0.0', 'Initial table structure');

-- 插入测试数据（可选）
-- INSERT INTO `${TABLE_NAME}` (job_id, file_path, object_key) VALUES ('test-job', 'test/path', 'test-key');