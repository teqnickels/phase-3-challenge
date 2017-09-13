DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(75), 
    price DECIMAL NOT NULL,
    section VARCHAR(100)
);

DROP TABLE IF EXISTS customers;
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(75)
);

DROP TABLE IF EXISTS sales; 
CREATE TABLE sales (
    id SERIAL PRIMARY KEY, 
    customer_id INTEGER REFERENCES customers (id),
    product_id INTEGER REFERENCES products (id)

);  