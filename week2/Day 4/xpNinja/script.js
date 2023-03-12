// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.

const num = 77;
for(let i=0; i<=num; i++){
    console.log(i)
}

// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
function stringInArgument(str, capitalizeEvenIndexes = false) {
    let result = '';

    // Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

    for(let i = 0; i < str.length; i++) {
        if(capitalizeEvenIndexes && i % 2 === 0) {
            result += str[i].toUpperCase();
        } else if(!capitalizeEvenIndexes && i % 2 !== 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}

console.log(stringInArgument('hi my name is stas'));

// Write a JavaScript function that checks whether a string is a palindrome or not.

function checkPolindrom(string) {
    const pol = string.length;
    for(let i=0; i<pol / 2; i++){
        if (string[i] !== string[pol - 1 - i]){
            return 'It is not a palindrome';
        }
    }
    return 'it is a polindrome'
}

console.log(checkPolindrom('madamo'))
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.


// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;


function biggestNumberInArray(a){
    if (a.length === 0) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < a.length; i++){
      if (typeof a[i] === 'number' && a[i] > max){
        max = a[i];
      }
    }
    return max;
}
  
  console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); // should return 100
  console.log(biggestNumberInArray(['a', 3, 4, 2])); // should return 4
  console.log(biggestNumberInArray([])); // should return null
  
  