// EXERCISE 1
// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the input is a string, the promise resolves with that same string uppercased.
// If the input is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")


function text(input) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (input === 'string') {
          resolve(input.toUpperCase())
        } else {
          reject(input)
        }
      }, 5000)
    })
  }
  

  text('hello')
    .then((resOne) => {
    console.log(resOne.repeat(2));
    return resOne

    })
    .catch((err) => {
      console.log(err);
      return err
    })
    .finally(() => {
      console.log("congratulation");
    });


  