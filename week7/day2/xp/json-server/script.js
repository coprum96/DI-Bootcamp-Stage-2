const http = require('http');

const user = {
  firstname: 'John',
  lastname: 'Doe'
};

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
