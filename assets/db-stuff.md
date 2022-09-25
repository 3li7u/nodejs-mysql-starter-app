# MySQL

## Create DB
```
CREATE DATABASE test_node;
```
## Create Table
```
CREATE TABLE IF NOT EXISTS `products` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY(`id`)
);
```

## Insert into table
```
INSERT INTO `products` (`name`, `description`, `price`) 
VALUES('product-01', 'this is product 01', 99);
``` 