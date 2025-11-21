CREATE DATABASE IF NOT EXISTS formalis_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'formalis'@'%' IDENTIFIED BY 'change_me';
GRANT ALL PRIVILEGES ON formalis_db.* TO 'formalis'@'%';
FLUSH PRIVILEGES;

USE formalis_db;

CREATE TABLE IF NOT EXISTS users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('student','teacher','admin') NOT NULL DEFAULT 'student',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
