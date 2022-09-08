-- migrate:up
CREATE TABLE bookings(
    id bigint UNSIGNED AUTO_INCREMENT,
    status enum('결제대기','결제완료','예약진행중','예약완료','숙박완료'),
    user_id bigint UNSIGNED,
    guest_information json,
    start_date date,
    end_date date,
    created_at timestamp DEFAULT current_timestamp, 
    updated_at timestamp DEFAULT current_timestamp ON UPDATE current_timestamp,
    deleted_at datetime,
    is_deleted tinyint(1) DEFAULT 0,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- migrate:down
DROP TABLE bookings;