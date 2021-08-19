CREATE DATABASE nodejsmain;

USE nodejsmain;

CREATE TABLE IF NOT EXISTS `person` (
`id` BIGINT UNSIGNED AUTO_INCREMENT,
`firstName` VARCHAR(255) NOT NULL,
`lastName` VARCHAR(255) NOT NULL,
PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `nodejsmain`.`person` (`firstName`,`lastName`) VALUES ('Mikkel', 'Eriksen');