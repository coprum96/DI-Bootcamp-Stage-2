const { largeNumber } = require('./main');
const { getCurrentDateTime } = require('./main');

const b = 5;
const sum = largeNumber + b;
console.log(sum);

// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('i am listening');
//   res.setHeader('Content-Type', 'text/html');
//   if (req.url === '/') {
//       res.end(`<h1>My Module is ${sum}, Hello`);
//   }
// });

// server.listen(3000, () => {
//   console.log('server is running on port 3000');
// });

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('time now');
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.end(`<h1>The date and time are currently: ${getCurrentDateTime()}</h1>`);
    }
  });
  
  server.listen(8080, () => {
    console.log('server is running on port 8080');
  });