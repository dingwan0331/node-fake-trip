-- migrate:up
CREATE TABLE product_facility(
    id int UNSIGNED AUTO_INCREMENT,
    product_id bigint UNSIGNED,
    facility_id int UNSIGNED,

    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (facility_id) REFERENCES facilities(id) ON DELETE CASCADE
);

-- migrate:down
DROP TABLE product_facility;