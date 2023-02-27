const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.end('<h1>This is my first response</h1> <h2>This is my second responsey</h2> <p>This is my third response</p>');

    }
  });

  server.listen(3000, () => {
    console.log('server is running on port 3000');
  });