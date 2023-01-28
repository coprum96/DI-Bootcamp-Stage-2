// Exercise 1
// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"


// let age = prompt('How old are you?', 18);

// if (age === 18) {
//     alert('Congratulations on your first year of driving. Enjoy the ride!')
// } else if (age > 18) {
//     alert('Powering On. Enjoy the ride!')
// } else {
//     console.log('Sorry, you are too young to drive this car. Powering off')
// }

const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

userCart.lastname = 'Smith';
userCart.username = 'Tom';
userCart.prices.pear = userCart.prices.pear + (userCart.prices.pear * 0.17);

console.log(userCart)

let userChoice = prompt('which one do you want eat?').toLowerCase();
console.log(userChoice)


userFruit = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
console.log("The price for a " + userChoice + " is " + userCart.prices[userChoice]);



// 1. Add the lastname Smith to the object
// 2. Change the username from John to Tom
// 2. Change the price of the pear, so it will include the Taxes. (17% is 0.17)
// 3. Ask the user for the fruit he wants between Apple, Banana and Pear. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
// 4. Console.log the price for the specific fruit the user wants

// let bankAmount = 2000;
// const computerPreis = 500;

// // if (condition) {
// //     // 
// // } else {
// //     // 
// // }

// if (bankAmount >= computerPreis) {
//     console.log('i buy computer')
//     // bankAmount = bankAmount - computerPreis;
//     bankAmount -= computerPreis;
// } else {
//     console.log('i dont buy the computer');
// }


let bankAmount = 2000;
const costPrice = 20;
const raining = false;

if (raining === true || bankAmount >= costPrice) {
    console.log('I buy the coat');
} else {
    console.log('i dont buy anything')
}


const a = 20; 
const b = 10;
const operator = '+'; 
let result;

if (operator === '+'){ 
    result = a + b; 
} else if (operator === "*"){
    result = a * b
} else {
    result = 'no result'
}

console.log(result)
