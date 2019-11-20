DROP DATABASE IF EXISTS blogDB;
CREATE DATABASE blogDB;

USE blogDB;

CREATE TABLE articles (
  id INT NOT NULL AUTO_INCREMENT,
  author VARCHAR(45) NULL,
  title VARCHAR(45) NULL,
  body TEXT NOT NULL,
  created_at VARCHAR(45) NULL,
  likes INT NULL,
  user_liked VARCHAR(45) NULL,
  comments VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(45) NULL,
  name VARCHAR(45) NULL,
  last_name VARCHAR(45) NULL,
  password VARCHAR(45) NULL,
  logged_in bool NOT NULL,
  logged_in_hash VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

