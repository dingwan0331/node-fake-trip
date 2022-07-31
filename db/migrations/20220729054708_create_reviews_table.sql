-- migrate:up
CREATE TABLE reviews(
    id int AUTO_INCREMENT,
    user_id bigint UNSIGNED NOT NULL,
    product_id bigint UNSIGNED NOT NULL,
    room_id bigint UNSIGNED,
    content text NOT NULL,
    image_url varchar(200) DEFAULT NULL,
    rating int UNSIGNED NOT NULL,
    created_at datetime,
    updated_at datetime,
    deleted_at datetime,
    is_public tinyint(1),
    is_deleted tinyint(1) DEFAULT 0,

    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY(room_id) REFERENCES rooms(id) ON DELETE CASCADE,
    FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- migrate:down
DROP TABLE reviews;
