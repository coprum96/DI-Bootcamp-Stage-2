const fs = require('fs');

fs.readFile('RightLeft.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let position = 0;

  for (let i = 0; i < data.length; i++) {
    
    if (data[i] === '>') {
      position++;
    }

    if (data[i] === '<') {
      position--;
    }
  }

  console.log(`Final position: ${position} steps to the right.`);

  // Count the number of '>' symbols
  const numRight = (data.match(/>/g) || []).length;

  // Count the number of '<' symbols
  const numLeft = (data.match(/</g) || []).length;

  let steps = 0;
  let pos = 0;
  let found = false;

  while (!found) {
    if (data[pos] === '>') {
      steps++;
    }

    if (data[pos] === '<') {
      steps--;
    }

    if (steps === -1) {
      console.log(`Steps to hit position -1: ${pos + 1}`);
      found = true;
    }

    pos++;
  }
});

