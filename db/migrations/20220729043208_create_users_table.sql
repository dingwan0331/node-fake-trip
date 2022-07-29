-- migrate:up
CREATE TABLE users (
    id bigint UNSIGNED AUTO_INCREMENT,
    kakao_pk bigint UNSIGNED UNIQUE NOT NULL,
    name varchar(30) NOT NULL,
    email varchar(200) UNIQUE NOT NULL,
    phone_number varchar(20) UNIQUE,
    created_at datetime,
    updated_at datetime,
    deleted_at datetime,
    is_deleted tinyint(1) DEFAULT 0,
    
    PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE users;