-- migrate:up
CREATE TABLE facilities(
    id int UNSIGNED AUTO_INCREMENT,
    name varchar(30) NOT NULL,

    PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE facilities;