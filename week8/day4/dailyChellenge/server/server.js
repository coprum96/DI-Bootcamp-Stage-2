const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
