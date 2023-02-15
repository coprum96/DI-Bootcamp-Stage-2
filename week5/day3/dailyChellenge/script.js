// Instructions
// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

const words = []
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === 'string')) {
        const capitalizedWords = words.map(word => word.toUpperCase());
        resolve(capitalizedWords);
      } else {
        reject(new Error('Input contains non-string values.'));
      }
    });
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length >= 5) {
        const sortedWords = words.sort();
        resolve(sortedWords);
      } else {
        reject(new Error('Input contains fewer than 5 words.'));
      }
    });
  }
  
  //in this example, the catch method is executed
  makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error))
  
  //in this example, you should see in the console, 
  // the array of words uppercased and sorted
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch(error => console.log(error))
  
