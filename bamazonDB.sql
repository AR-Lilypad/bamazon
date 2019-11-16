-- Drops the bamazonDB if it exists currently --
DROP DATABASE IF EXISTS bamazonDB;
-- Creates the "bamazonDB" database --
CREATE DATABASE bamazonDB;

-- Makes it so all of the following code will affect bamazonDB --
USE bamazonDB;

-- Creates the table "products" within bamazonDB --
CREATE TABLE products (
  -- Makes an integer column called "id" which cannot contain null --
  ID INT NOT NULL AUTO_INCREMENT,
  -- Makes a string column called "product_name" which cannot contain null --
  Product_Name VARCHAR(50),
  -- Makes a string column called "product_name" which cannot contain null --
  Department_Name VARCHAR(50),
 -- Makes an numeric column called "price" --
  Price DECIMAL(10,2) NULL,
  -- Makes an numeric column called "qty" --
  Quantity INT NULL,
  -- Makes an numeric column called "pet_age" --
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (Product_Name, Department_Name, Price, Quantity)
VALUES ("Instinct cat food 24_3oz cans", "pet supplies", 33.50, 229);

INSERT INTO products (Product_Name, Department_Name, Price, Quantity)
VALUES ("Whole Earth cat food 24_3oz cans", "pet supplies", 24.99, 361);

INSERT INTO products (Product_Name, Department_Name, Price, Quantity)
VALUES ("Adirondack Dry Cat Food 10lb bags", "pet supplies", 32.00, 148);

INSERT INTO products (Product_Name, Department_Name, Price, Quantity)
VALUES ("Greenies Natural Dental Care Treats", "pet supplies", 4.99, 117);

INSERT INTO products (Product_Name, Department_Name, Price, Quantity)
VALUES ("FuelMeFoot - Socks", "clothing", 7.99, 337);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("UGG wool socks - women", "clothing", 15.99, 543);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Wrangler boot socks - 3pair", "clothing", 16.99, 422);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("NYDJ Trousers", "clothing", 71.50, 548);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Dockers Flex Jeans", "clothing", 34.90, 33.90);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Haggar Men's work pants", "clothing", 27.99, 486);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Tommy Hilfinger Men's dress pants", "clothing", 36.99, 486);

-- Updates the row where the column name is peter --
-- UPDATE people
-- SET has_pet = true, pet_name = "Franklin", pet_age = 2
-- WHERE name = "Peter";
