const express = require('express');
const knex = require('knex');
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();
const port = 3000;

// Initialize the database connection
const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '1702',
    database: 'clients'
  }
});

// Use middleware to parse request bodies
app.use(express.json());

// Serve the login page
app.use(express.static(path.join(__dirname, 'client')));

app.post('/register', (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  // Hash the password before inserting into the database
  const hashedPassword = bcrypt.hashSync(password, 10);

  db('users')
    .insert({ firstName, lastName, email, username, password: hashedPassword })
    .then(() => res.status(200).send('Registration successful!'))
    .catch(err => res.status(500).send(`Registration failed: ${err.message}`));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db('users')
    .select('*')
    .where({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).send('Login successful!');
      } else {
        res.status(401).send('Invalid username or password');
      }
    })
    .catch(err => res.status(500).send(`Login failed: ${err.message}`));
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
