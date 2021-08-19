# nodejs-crud
H5 project TEC

# NPM packages:
express.js: It is a web framework.

mysql: Node.js driver for MySQL

body-parser: Helps in converting the POST data into the request body.

nodemon: Helps in automatically restarting the server whenever the code changes.

# Git commandos:

ls - checking files

git status - checking changes on status

git add . - adding changes

git commit - commit changes lokalt

git push - uploader changes to github

npm start - start server

# MYSQL

CREATE DATABASE nodejs;

---
USE nodejs;

---

CREATE TABLE IF NOT EXISTS `person` (

`id` BIGINT UNSIGNED AUTO_INCREMENT,

`firstName` VARCHAR(255) NOT NULL,

`lastName` VARCHAR(255) NOT NULL,

PRIMARY KEY (`id`))

---

ENGINE = InnoDB;

---

INSERT INTO `nodejs`.`person` (`firstName`,`lastName`) VALUES ('Bob', 'Bobsen');