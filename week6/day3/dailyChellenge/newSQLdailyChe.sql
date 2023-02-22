-- CREATE TABLE customer (
-- 	id INTEGER PRIMARY KEY,
-- 	first_name VARCHAR(50) NOT NULL,
-- 	last_name VARCHAR(50) NOT NULL
-- );

-- INSERT INTO customer (id, first_name, last_name)
-- VALUES  (1, 'John', 'Doe'),
-- 		(2, 'Jerome', 'Lalu'),
-- 		(3, 'Lea', 'Rive')

-- CREATE TABLE Customer_profile (
--     id INTEGER PRIMARY KEY,
--     isLoggedIn BOOLEAN DEFAULT false,
--     customer_id INTEGER NOT NULL,
--     FOREIGN KEY (customer_id) REFERENCES customer (id)
-- );
-- INSERT INTO customer_profile (id, isLoggedIn, customer_id)
-- VALUES (1,
--     true,
--     (SELECT id FROM customer WHERE first_name = 'John' AND last_name = 'Doe')
-- );

-- INSERT INTO customer_profile (id, isLoggedIn, customer_id)
-- VALUES (2,
--     false,
--     (SELECT id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu')
-- );

-- SELECT * FROM customer_profile;

-- SELECT customer.first_name
-- FROM customer
-- INNER JOIN customer_profile ON customer.id = customer_profile.customer_id
-- WHERE customer_profile.isLoggedIn = true;

-- SELECT customer.first_name, COALESCE(customer_profile.isLoggedIn, false) AS isLoggedIn
-- FROM customer
-- LEFT JOIN customer_profile ON customer.id = customer_profile.customer_id;

-- SELECT COUNT(*) AS num_customers_not_logged_in
-- FROM customer
-- LEFT JOIN customer_profile ON customer.id = customer_profile.customer_id
-- WHERE customer_profile.isLoggedIn IS NULL OR NOT customer_profile.isLoggedIn;

-- CREATE TABLE book (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(50) NOT NULL,
-- 	author VARCHAR(50) NOT NULL
-- );

-- SELECT * FROM book;
-- INSERT INTO Book (title, author) VALUES ('Alice In Wonderland', 'Lewis Carroll');
-- INSERT INTO book (title, author) VALUES ('Harry Potter', 'J.K Rowling');
-- INSERT INTO book (title, author) VALUES ('To kill a mockingbird', 'Harper Lee');

-- CREATE TABLE student (
-- 	student_id SERIAL PRIMARY KEY,
-- 	name VARCHAR (50) NOT NULL UNIQUE, 
-- 	age INTEGER CHECK (age <= 15)
-- );

-- INSERT INTO student (name, age) VALUES ('John', 12);
-- INSERT INTO student (name, age) VALUES ('Lera', 11);
-- INSERT INTO student (name, age) VALUES ('Patrick', 10);
-- INSERT INTO student (name, age) VALUES ('Bob', 14);

-- SELECT * FROM student;

-- CREATE TABLE Library (
--   book_fk_id INTEGER REFERENCES Book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--   student_fk_id INTEGER REFERENCES Student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
--   borrowed_date DATE,
--   PRIMARY KEY (book_fk_id, student_fk_id)
-- );


-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--   (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
--   (SELECT student_id FROM Student WHERE name = 'John'),
--   '2022-02-15'
-- );
-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--   (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
--   (SELECT student_id FROM Student WHERE name = 'Bob'),
--   '2021-03-03'
-- );
-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--   (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
--   (SELECT student_id FROM Student WHERE name = 'Lera'),
--   '2021-05-23'
-- );
-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--   (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
--   (SELECT student_id FROM Student WHERE name = 'Bob'),
--   '2021-08-12'
-- );

-- SELECT * FROM Library;
-- SELECT Student.name, Book.title
-- FROM Student
-- JOIN Library ON Student.student_id = Library.student_fk_id
-- JOIN Book ON Book.book_id = Library.book_fk_id;

-- SELECT AVG(age)
-- FROM Student
-- JOIN Library ON Student.student_id = Library.student_fk_id
-- JOIN Book ON Book.book_id = Library.book_fk_id
-- WHERE Book.title = 'Alice In Wonderland';

-- DELETE FROM student
-- WHERE name = 'John';

-- SELECT * FROM student

