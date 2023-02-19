-- CREATE TABLE actors (
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR(50),
--  last_name VARCHAR(50),
--  date_birth DATE,
--  number_oscars SMALLINT DEFAULT 0
-- );

-- SELECT all columns from the table
-- SELECT * FROM actors; 

-- SELECT first_name, last_name FROM actors;

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('George', 'Clooney', '1999-01-22', 3);

-- INSERT INTO actors (first_name, last_name, date_birth)
-- VALUES ('Matt', 'Damon', '1970-10-08', 0);

-- INSERT INTO actors (first_name, last_name, date_birth)
-- VALUES ('Jennifer', 'Lopez', '1969-07-24', 1);

SELECT * FROM actors;

