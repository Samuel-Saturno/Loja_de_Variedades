CREATE TABLE users (
id BIGSERIAL PRIMARY KEY,
name VARCHAR(150) NOT NULL,
email VARCHAR(150) UNIQUE NOT NULL,
password_hash VARCHAR(255) NOT NULL,
role VARCHAR(20) NOT NULL,
created_at TIMESTAMP DEFAULT now()
);


CREATE TABLE categories (
id BIGSERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
slug VARCHAR(100) UNIQUE NOT NULL
);


CREATE TABLE products (
id BIGSERIAL PRIMARY KEY,
name VARCHAR(200) NOT NULL,
description TEXT,
price NUMERIC(12,2) NOT NULL DEFAULT 0,
stock_quantity INTEGER NOT NULL DEFAULT 0,
category_id BIGINT REFERENCES categories(id),
image_url VARCHAR(500),
active BOOLEAN DEFAULT TRUE,
created_at TIMESTAMP DEFAULT now(),
updated_at TIMESTAMP DEFAULT now()
);


CREATE TABLE orders (
id BIGSERIAL PRIMARY KEY,
user_id BIGINT REFERENCES users(id),
status VARCHAR(50) NOT NULL,
total_amount NUMERIC(12,2) NOT NULL DEFAULT 0,
payment_status VARCHAR(50),
shipping_address TEXT,
created_at TIMESTAMP DEFAULT now(),
updated_at TIMESTAMP DEFAULT now()
);


CREATE TABLE order_items (
id BIGSERIAL PRIMARY KEY,
order_id BIGINT REFERENCES orders(id),
product_id BIGINT REFERENCES products(id),
quantity INTEGER NOT NULL,
unit_price NUMERIC(12,2) NOT NULL
);


-- seed admin user (password: admin123 encoded later)
INSERT INTO users (name, email, password_hash, role) VALUES ('Admin', 'admin@loja.com', '$2a$10$ADMIN_PASSWORD_PLACEHOLDER', 'ADMIN');