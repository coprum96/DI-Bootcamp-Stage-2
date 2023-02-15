// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.

function compareToTen(num) {
    return new Promise(function(resolve, reject) {
      if (num <= 10) {
        resolve(num);
      } else {
        reject(new Error(num + " is greater than or equal to 10"));
      }
    });
  }

  compareToTen(15)
  .then(function(num) {
    console.log(num + " is less than 10");
  })
  .catch(function(error) {
    console.error(error.message);
  });

compareToTen(8)
  .then(function(num) {
    console.log(num + " is less than 10");
  })
  .catch(function(error) {
    console.error(error.message);
  });

//   🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

const prom = new Promise(function(resolve) {
    setTimeout(function() {
      resolve("success");
    }, 4000);
  });
  
  prom
  .then(function(result) {
    console.log(result);
  }).catch(function(error) {
    console.log('Oops something went wrong');
  });
  
  const prom2 = Promise.resolve("success");

  prom2
  .then(function(result) {
    console.log(result);
  }).catch(function(error) {
    console.log('Oops something went wrong');
  });
  
//   🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promiseResolve = Promise.resolve(3);

const promiseReject = Promise.reject("Boo!");

promiseResolve
.then(function(value) {
  console.log(value);
})
.catch(function(error) {
  console.error(error.message);
});

promiseReject
.then(function(value) {
  console.log(value);
})
.catch(function(error) {
  console.error(error);
});


