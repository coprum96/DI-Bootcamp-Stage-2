-- SELECT film.title, film.description, language.name
-- FROM film
-- LEFT JOIN language ON film.language_id = language.language_id;


-- SELECT film.title, film.description, language.name
-- FROM film
-- LEFT OUTER JOIN language ON film.language_id = language.language_id;

-- SELECT film.title, film.description, language.name
-- FROM film
-- RIGHT OUTER JOIN language ON film.language_id = language.language_id;

-- CREATE TABLE new_film_s (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255) NOT NULL
-- );

-- INSERT INTO new_film_s (name) VALUES ('The Shawshank Redemption');
-- INSERT INTO new_film_s (name) VALUES ('The Godfather');
-- INSERT INTO new_film_s (name) VALUES ('The Dark Knight');

-- SELECT *FROM new_film_s

-- CREATE TABLE customer_review_s (
--   review_id SERIAL PRIMARY KEY,
--   film_id INTEGER REFERENCES new_film_s (id) ON DELETE CASCADE,
--   language_id INTEGER REFERENCES language (language_id),
--   title VARCHAR(255) NOT NULL,
--   score INTEGER NOT NULL CHECK (score >= 1 AND score <= 10),
--   review_text TEXT NOT NULL,
--   last_update TIMESTAMP DEFAULT NOW()
-- );

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES (1, 1, 'Amazing movie', 9, 'This is one of the best movies I have ever seen.');

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES (2, 2, 'A true classic', 10, 'The Godfather is a masterpiece. The acting is superb, the story is captivating, and the direction is flawless.');

-- SELECT * FROM customer_review;




