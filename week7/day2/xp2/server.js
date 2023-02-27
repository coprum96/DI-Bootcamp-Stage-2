const express = require('express');
const app = express();

const user = {
    firstname: 'John',
    lastname: 'Doe'
};

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/user', (req, res) => {
    res.json(user);
});

app.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
  });

