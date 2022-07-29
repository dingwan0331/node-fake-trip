-- migrate:up
CREATE TABLE product_images(
    id bigint UNSIGNED AUTO_INCREMENT,
    url varchar(250) NOT NULL,
    is_main tinyint(1) NOT NULL DEFAULT 0,
    product_id bigint UNSIGNED NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- migrate:down
DROP TABLE product_images;
