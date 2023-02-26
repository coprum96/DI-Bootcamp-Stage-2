const http = require('http');

const server = http.createServer((req, res) => {
  console.log('hello, get your request.....');
  console.log(req.method);
  if (req.url === '/') {
    if (req.method === 'GET') {
      res.end('<h1>Home Page</h1>');
    }
  }
  else if (req.url === '/about') {
    res.end('<h1>About Page</h1>');
  } 
  else if (req.url === '/me') {
    res.end('<h1>Me</h1>');
  } 
  else {
    res.end('<h1>404 End Page</h1>');
  }
});

server.listen(5001, () => {
  console.log('server is running on port 5001');
});

