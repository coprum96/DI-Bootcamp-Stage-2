// const a = 5;
// const b = 10;


// console.log(`HEllo you are ${a+b}`)

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('hello, get your request.....');
  console.log(req.method);
  if (req.url === '/') {
    if (req.method === 'GET') {
      res.end('<h1>Hello, how are you?</h1>');
    }
  }
});

server.listen(5001, () => {
  console.log('server is running on port 5001');
});