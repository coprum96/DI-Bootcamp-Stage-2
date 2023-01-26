// Exercise 1 : Divisible By Three
// Instructions
// let numbers = [123, 8409, 100053, 333333333, 7]
// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log true or false.

let numbers = [
    123, 
    8409, 
    100053, 
    333333333, 
    7
];

for(let i of numbers) {
    if(i % 3 === 0) {
        console.log(i + ' true')
    } else {
        console.log(i + ' false')
    }
}

// Exercise 2
// Given the object above where the key is the student’s name and the value is the country they are from.

// Prompt the student for their name.

// If the name is in the object, console.log the name of the student and the country they come from.
// For example: "Hi! I'm [name], and I'm from [country]."
// Hint: You don’t need to use a for loop, just look up the statement if ... in

// If the name is not in the object, console.log: "Hi! I'm a guest."

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

let guestListName;
let guestListCountry;

for (let name in guestList) {
    if (name === 'randy') {
        guestListName = name
        guestListCountry = guestList[name]
    }
}
console.log("Hi! I'm " + guestListName + ", and I am from " + guestListCountry);


// Exercise 3 : Playing With Numbers
// Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.


// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the highest age in the array.


const numbers = [20,5,12,43,98,55];

let sum = 0;

for (number of numbers) {
  sum += number;
}

console.log(sum); 
console.log(numbers[4])


// for (i=0;i<=numbers.length;i++)
//     if (numbers.length > 0) {
        
//     }
// console.log(largest)