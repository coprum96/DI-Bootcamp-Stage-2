const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { dir } = require('console');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/aboutMe/:hobby', (req, res) => {
  const hobby = req.params.hobby;
  if (typeof hobby !== 'string') {
    res.status(404).send('Invalid hobby');
  } else {
    res.send(`One of my hobbies is ${hobby}`);
  }
});

app.get('/pic', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pic.html'));
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/formData', (req, res) => {
  const email = req.body.email;
  const message = req.body.message;
  res.send(`${email} sent you a message "${message}"`);
});

app.listen(3000, () => console.log('Server started on port 3000'));

