/*
Write a SQL query that gets the users’ first and last name
as one field and the year they were last updated in the UserData table.
*/

SELECT CONCAT(users.first_name,' ',users.last_name) AS "full_name", date_part('year', user_data.date_updated) AS "year"
FROM user_data
INNER JOIN users ON (user_data.user_number = users.user_number);

--   full_name   | year
-- --------------+------
--  Minnie Mouse | 2015
--  Yosemite Sam | 2016
--  Minnie Mouse | 2016
--  Bugs Bunny   | 2016
--  Yosemite Sam | 2014

/*
Modify the SQL query from question 1 so that it returns the
fiscal year instead of the calendar year.
The fiscal year is defined as July 1st through June 30th.
*/

SELECT
    CONCAT(users.first_name,' ',users.last_name) AS "full_name",
    CASE WHEN date_part('month', user_data.date_updated) > 8 THEN date_part('year', user_data.date_updated) + 1
         ELSE date_part('year', user_data.date_updated)
    END AS "fiscal_year"
FROM user_data
INNER JOIN users ON (user_data.user_number = users.user_number);

--   full_name   | fiscal_year
-- --------------+-------------
--  Minnie Mouse |        2016
--  Yosemite Sam |        2017
--  Minnie Mouse |        2017
--  Bugs Bunny   |        2017
--  Yosemite Sam |        2015


/*
Write a SQL query (a single query) that will return the
first and last name of the users who don’t have any saved occupations.
*/

SELECT users.first_name, users.last_name
FROM users
LEFT JOIN user_data ON (users.user_number = user_data.user_number)
WHERE user_data.info_number IS NULL OR user_data.info_number
NOT IN (SELECT career_info.info_number FROM career_info);

--  first_name | last_name
-- ------------+-----------
--  Daisy      | Duck
--  Fred       | Flinstone
