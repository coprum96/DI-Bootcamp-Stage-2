// Exercise 1
// Create a structured HTML file linked to a JS file

// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}
    


// Exercise 2
// Create a variable sum equals to 0
// Loop over this array, to get the sum of all the numbers
// Where should you console log the sum ?
const prices = [23, 15, 34, 10];

let sum = 0
for (let i = 0; i < prices.length; i++) {
    sum += prices[i]
} 
console.log(sum)


// from course notes
// let person = {fname:"John", lname:"Doe", age:25};
// for (let x in person) {
//   console.log(x) //fname lname age
//   console.log(person[x]) // John Doe 25
// }

// let colors = ["blue", "yellow", "red"];

// for (let i in colors) {
//    console.log(i); //0 1 2
//    console.log(colors[i]) //blue yellow red

// for (let i = 0; i < 10; i++) {
//     if (i === 3) { 
//         continue; 
//     }
//     console.log("The number is " + i); // 0 1 2 4 5 6 7 8 9 
//   }

// Exercise 2
// 1. Write a JavaScript for loop that will go through the variable names.

// if the item is not a string, pass.
// if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.
// 2. Write a JavaScript for loop that will go through the variable names

// if the item is not a string, go out of the loop.
// if the item is a string, display it.

let names = ["john", "sarah", 23, "Rudolf", 34];
for (let i = 0; i < names.length; i++) {
    if (typeof names[i] !== 'string')
    continue;
} if (names[i][0] === names[i][0].toUpperCase()){
    console.log(names[i]);
}

