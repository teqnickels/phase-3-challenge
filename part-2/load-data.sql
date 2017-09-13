
COPY products (name, price, section) FROM '/Users/debrenamcewen/guild/phase-3-challenge/part-2/grocery.csv' WITH (FORMAT csv);


INSERT INTO customers (name)
VALUES ('Cynthia'), ('Erica'), ('Alicia'), ('Robert'), ('Debrena'), ('Lynne'), ('Nicole');

 

INSERT INTO sales (customer_id, product_id)
 VALUES (2, 5), (3,1), (4, 15), (3, 32), (1, 10), (4, 20), (7, 12), (6, 9), (5, 38), (2, 22), (3, 27);