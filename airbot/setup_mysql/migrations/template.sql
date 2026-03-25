-- Migration Template
-- Copy this file and modify for your migration
-- Naming convention: vX.Y.Z_description.sql

-- Migration: vX.Y.Z
-- Description: Brief description of changes
-- Date: YYYY-MM-DD

-- 检查版本是否已应用
SET @version = 'vX.Y.Z';
SET @applied = (SELECT COUNT(*) FROM `${TABLE_NAME}_migrations` WHERE version = @version);

-- 如果未应用则执行迁移
SET @sql = IF(@applied = 0,
    '-- PUT YOUR MIGRATION SQL HERE
     -- Examples:
     -- ALTER TABLE `${TABLE_NAME}` ADD COLUMN `new_field` varchar(255);
     -- ALTER TABLE `${TABLE_NAME}` MODIFY COLUMN `existing_field` text;
     -- ALTER TABLE `${TABLE_NAME}` DROP COLUMN `old_field`;
     -- CREATE INDEX `idx_new_field` ON `${TABLE_NAME}` (`new_field`);
     SELECT ''Migration vX.Y.Z applied successfully'' as message;',
    'SELECT ''Migration vX.Y.Z already applied'' as message;'
);

PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- 记录版本
INSERT IGNORE INTO `${TABLE_NAME}_migrations` (version, description) 
VALUES (@version, 'Your migration description here');