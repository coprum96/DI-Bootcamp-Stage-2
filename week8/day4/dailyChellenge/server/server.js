const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
  const message = `I received your POST request. This is what you sent me: ${req.body.message}`;
  console.log(message); // just for testing
  res.send(message);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
