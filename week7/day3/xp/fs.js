const fs = require('fs');

// Create a new text file
fs.writeFile('myFile.txt', 'Hello World!', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File created!');
});

// Append some text to the text file
fs.appendFile('myFile.txt', '\nBuy orange juice', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Text appended!');
});

// Delete the file
fs.unlink('myFile.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File deleted!');
});
