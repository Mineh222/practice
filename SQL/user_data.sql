-- Pipe the user_data.sql seed file into the "interview" database.
-- psql -d interview -U Mineh < user_data.sql;

CREATE TABLE users (
    user_number INT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE career_info (
    info_number INT NOT NULL,
    info_type VARCHAR(50) NOT NULL,
    info_name VARCHAR(50) NOT NULL,
    info_amount_type VARCHAR(50) NOT NULL,
    info_amount INT NOT NULL
),

CREATE TABLE user_data (
    user_number INT NOT NULL,
    info_number INT NOT NULL,
    date_updated DATE NOT NULL,
    quarter VARCHAR(50) NOT NULL,
)
