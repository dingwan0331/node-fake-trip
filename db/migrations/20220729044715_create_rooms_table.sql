-- migrate:up
CREATE TABLE rooms(
    id bigint UNSIGNED AUTO_INCREMENT,
    name varchar(30),
    product_id bigint UNSIGNED,
    price decimal(10,2),
    quantity int UNSIGNED NOT NULL,
    min_guest int UNSIGNED NOT NULL DEFAULT 2,
    max_guest int UNSIGNED NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
)

-- migrate:down
DROP TABLE rooms;