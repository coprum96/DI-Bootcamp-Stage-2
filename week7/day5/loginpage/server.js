const express = require('express');
const knex = require('knex');
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Initialize the database connection
const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '5432',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'clients'
  }
});

// Use middleware to parse request bodies
app.use(express.json());

// Serve the login page
app.use(express.static(path.join(__dirname, 'client')));

async function createUser({ user }) {
  try {
    const result = await db('clients').insert({ username: user }).returning('*');
    return result[0];
  } catch (err) {
    throw new Error(`Failed to create user: ${err.message}`);
  }
}

app.post('/register', async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  // Hash the password before inserting into the database
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const existingUser = await db('clients').select('*').where({ email }).first();
    if (existingUser) {
      res.status(400).send('Email already exists');
    } else {
      await db('clients').insert({ firstName, lastName, email, username, password: hashedPassword });
      res.status(200).send('Registration successful!');
    }
  } catch (err) {
    res.status(500).send(`Registration failed: ${err.message}`);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await db('clients').select('*').where({ username }).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).send('Login successful!');
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (err) {
    res.status(500).send(`Login failed: ${err.message}`);
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));

