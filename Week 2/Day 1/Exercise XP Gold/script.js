// Exercise 1 : Favorite Color

let sentence = ["my"," favorite"," color"," is"," blue"];
console.log(sentence.join(''))

// Exercise 2
// Create 2 variables. The values should be strings. For example:

let firstWord = 'Java'
let secondWord = 'Script'
firstWord = firstWord.slice(0, 3) + secondWord.slice(2);
secondWord = secondWord.slice(0, 1) + firstWord.slice(2);
let thirdWord = ' '

console.log(firstWord + secondWord)
console.log(firstWord + thirdWord + secondWord)

// Exercise 3 
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!


let num1 = parseFloat(prompt("Enter the first number: "));

let num2 = parseFloat(prompt("Enter the second number: "));
let sum = num1 + num2;
alert("The sum of " + num1 + " and " + num2 + " is " + sum);

let subtract = num1 - num2;
alert("The subtract of " + num1 + " and " + num2 + " is " + subtract);

let multiply = num1 * num2;
alert("The multiply of " + num1 + " and " + num2 + " is " + multiply);

let divide = num1 / num2;
alert("The divide of " + num1 + " and " + num2 + " is " + divide);


