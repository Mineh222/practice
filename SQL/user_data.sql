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
);

CREATE TABLE user_data (
    user_number INT NOT NULL,
    info_number INT NOT NULL,
    date_updated DATE NOT NULL,
    quarter VARCHAR(50) NOT NULL,
);

INSERT INTO users(user_number, first_name, last_name) VALUES
    (1003456, 'Bugs', 'Bunny'),
    (1003457, 'Minnie', 'Mouse'),
    (1003458, 'Yosemite', 'Sam'),
    (1003459, 'Daisy', 'Duck'),
    (1003460, 'Fred', 'Flinstone');

INSERT INTO career_info(info_number, info_type, info_name, info_amount_type, info_amount) VALUES
    (2003457, 'Occupation', 'Accountants', 'YearlyWage', 67109),
    (2003458, 'Occupation', 'Mining Engineer', 'YearlyWage', 69780),
    (2003459, 'School', 'Oregon State', 'YearlyTuiton', 8715),
    (2003460, 'School', 'Reed College', 'YearlyTuiton', 51850),
    (2003461, 'Occupation', 'Lawyer', 'YearlyWage', 115820),
    (2003462, 'Occupation', 'Farm and Ranch Worker', 'YearlyWage', 27840);

INSERT INTO user_data(user_number, info_number, date_updated) VALUES
    (1003458, 200359, '2014-10-31', 'Q4 2014')
    (1003457, 2003461, '2022-10-26', 'Q4 2015'),
	(1003458, 2003462, '2022-10-26', 'Q4 2016'),
	(1003457, 2003460, '2016-11-03', 'Q4 2016'),
	(1003456, 2003459, '2016-11-03', 'Q4 2016');

