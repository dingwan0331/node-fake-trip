-- migrate:up
CREATE TABLE room_images(
    id bigint UNSIGNED,
    url varchar(250) NOT NULL,
    is_main tinyint(1) NOT NULL DEFAULT 0,
    room_id bigint UNSIGNED NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE
)

-- migrate:down
DROP TABLE room_images;