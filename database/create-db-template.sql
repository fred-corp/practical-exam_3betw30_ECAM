CREATE TABLE IF NOT EXISTS `rooms` (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(30) COLLATE utf8_bin NOT NULL,
    `length` int(11) NOT NULL,
    `width` INT(11) NOT NULL
)