/*
Write a SQL query that gets the users’ first and last name
as one field and the year they were last updated in the UserData table.
*/

SELECT CONCAT(users.first_name,' ',users.last_name) AS "full_name", date_part('year', user_data.date_updated) AS "year"
FROM user_data
INNER JOIN users ON (user_data.user_number = users.user_number);
