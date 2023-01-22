// Exercise 1
5 >= 1  // true
0 === 1 // false
4 <= 1// 
1 != 1 // false

"A" > "B" // false
"B" < "C" // false
"a" > "A" // true
"b" < "A" // false
true === false // false
true != true // false

// Exercise 2


// let numbers = prompt('write different numbers with comma');
// console.log()


let num1 = parseFloat(prompt("Enter the first number: "));

let num2 = parseFloat(prompt("Enter the second number: "));
let sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);


// Exercise 3
// Hint: if statement (tomorrow’s lesson)
// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.

let sentence = prompt('please write sentence about Nemo e.g (I love the movie named Nemo)');
let nemoIndex = sentence.indexOf("Nemo");

if (nemoIndex === -1) {
  console.log("I can't find Nemo");
} else {
  console.log(`I found Nemo at ${nemoIndex}`);
}

// Exercise 4
// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.

let number = prompt('give spontane number');


if (numberIndex > 2) {
    console.log('boom');
  } else if(numberIndex <= 2) {
    console.log('boooom');
  }
