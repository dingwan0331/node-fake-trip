-- migrate:up
CREATE TABLE products(
    id bigint UNSIGNED AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    grade enum('1성급','2성급','3성급','4성급','5성급'),
    address varchar(100) NOT NULL,
    latitude decimal(10,2) NOT NULL,
    longtitude decimal(10,2) NOT NULL,
    region enum('제주도','가평','서울','전라도','광주','해외'),
    check_in enum('14:00','14:30','15:00','15:30','16:00') NOT NULL,
    check_out enum('10:00','10:30','11:00','11:30','12:00','12:30','13:00') NOT NULL,
    category enum('호텔','펜션','풀빌라','캠핑','게스트 하우스'),

    PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE products;
