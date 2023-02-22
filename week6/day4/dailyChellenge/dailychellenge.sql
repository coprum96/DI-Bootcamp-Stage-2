-- CREATE TABLE items (
--   item_id INT NOT NULL PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   description TEXT NOT NULL,
--   price DECIMAL(10, 2) NOT NULL
-- );

-- CREATE TABLE product_orders (
--   order_id INT NOT NULL,
--   product_id INT NOT NULL,
--   quantity INT NOT NULL,
--   total_price DECIMAL(10, 2) NOT NULL,
--   item_id INT NOT NULL,
--   PRIMARY KEY (order_id, product_id),
--   FOREIGN KEY (item_id) REFERENCES items (item_id)
-- );

