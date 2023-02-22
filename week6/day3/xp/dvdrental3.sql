-- 1. 
-- UPDATE language
-- SET name = 'Spanish'
-- WHERE film_id IN (1, 2, 3);

-- SELECT * FROM language;
-- 2.
-- To find out which foreign keys (references) are defined for the customer table, 
-- we need to look at the table definition or schema. 
-- In general, foreign keys are defined to establish relationships between tables, 
-- where a column in one table refers to a primary key column in another table. 
-- In the case of the customer table, there might be foreign keys defined that refer to other tables such as the address table or the payment table.
-- 3.
-- To drop the customer_review table, we can use the DROP TABLE statement. 
-- The exact syntax would depend on the database management system being used. However, dropping a table is not always an easy step, especially if there are dependencies or constraints involving the table. 
-- Before dropping the table, we need to make sure that it is safe to do so and that we won't lose any important data.

-- 4. 
-- SELECT COUNT(*)
-- FROM rental
-- WHERE return_date IS NULL;

-- 5. 

-- SELECT film.title, film.rental_rate
-- FROM film
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- WHERE rental.return_date IS NULL
-- ORDER BY film.rental_rate DESC
-- LIMIT (30);

-- SELECT title
-- FROM film
-- WHERE description LIKE '%sumo wrestler%';

-- SELECT title
-- FROM film
-- WHERE film.length < 60 AND rating = 'R';

-- SELECT film.title
-- FROM film
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND rental.rental_rate > 4 AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- SELECT title
-- FROM film
-- WHERE (title LIKE '%boat%' OR description LIKE '%boat%') AND replacement_cost > 100;
