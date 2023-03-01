const fs = require('fs');


// try {
//     const data = fs.readFileSync('.env', 'utf-8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }

fs.readFile('.env', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  console.log('The file has been read');
});

