/*
Write a SQL query that gets the users’ first and last name
as one field and the year they were last updated in the UserData table.
*/

SELECT CONCAT(users.first_name,' ',users.last_name) AS "full_name", date_part('year', user_data.date_updated) AS "year"
FROM user_data
INNER JOIN users ON (user_data.user_number = users.user_number);

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
