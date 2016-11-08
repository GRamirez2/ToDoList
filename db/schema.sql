### Schema

CREATE DATABASE todo_db;
USE todo_db;

CREATE TABLE tasks
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	complete BOOLEAN DEFAULT false,
	`date` TIMESTAMP,
	PRIMARY KEY (id)
);
