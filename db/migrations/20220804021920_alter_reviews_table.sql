-- migrate:up
ALTER TABLE reviews MODIFY COLUMN is_public tinyint(1) DEFAULT 1;

-- migrate:down
ALTER TABLE reviews MODIFY COLUMN is_public tinyint(1);