// Instructions
// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

// const twoStrings = (oneString, secondString) => {
//     if (oneString.length !== secondString.length) {
//       return false;
//     }
//     oneString = oneString.toLowerCase()
//     secondString = secondString.toLowerCase()
    
//     return oneString === secondString;
//   }

//   console.log(twoStrings("Astronomer", "Moon starer"))

function anagramCheck(wordOne, wordTwo) {
  let wordOneSorted = wordOne.toLowerCase().split("").sort().join(``).trim();
  let wordTwoSorted = wordTwo.toLowerCase().split("").sort().join(``).trim();
  wordOneSorted === wordTwoSorted ? console.log('is an anagram') : console.log('not an anagram');
}
anagramCheck(prompt(`first word for comparison`), prompt(`second word for comparison`))
  
  