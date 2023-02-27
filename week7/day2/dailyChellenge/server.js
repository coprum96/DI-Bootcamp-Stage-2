const express = require('express');
const cors = require('cors');

const app = express();
app.use('/', express.static(__dirname + '/public'));
app.use(cors());
app.use(express.json());

app.get('/aboutMe/:hobby', (req, res) => {
  const hobby = req.params.hobby;
  if (typeof hobby === 'string') {
    res.send(`My hobby is ${hobby}`);
  } else {
    return res.status(404).json({ msg: 'not found' });
  }
});

app.get('/pic', (req, res) => {
  res.sendFile(__dirname + '/public/pic.html');
});

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/public/form.html');
});

app.post('/formData', (req, res) => {
  const { email, message } = req.body;
  if (email || message) {
    return res.status(400).json({ msg: 'Please include email and message' });
  }
  res.send(`${email} sent you a message: "${message}"`);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
