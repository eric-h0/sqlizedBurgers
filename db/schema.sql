-- CREATE DATABASE burgers_db;
-- USE burgers_db;
-- ^Would this still work with new database?

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean DEFAULT 0,
	date TIMESTAMP DEFAULT now() ON UPDATE now(),
	PRIMARY KEY (id)
);

