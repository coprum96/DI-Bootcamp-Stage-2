const fs = require('fs');

fs.readFile('.env', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  console.log('The file has been read');
});

