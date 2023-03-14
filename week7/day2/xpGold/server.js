const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

//middeware
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const { name, email, address, telephone } = req.body;
  console.log(`Name: ${name}\n Address: ${address}\nTelephone: ${telephone} \n Email: ${email}`);
  const data = { name, email, address, telephone };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
