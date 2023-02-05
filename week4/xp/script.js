// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// #1
function funcOne() {
     a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console: inside the funcOne function 3
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? inside the funcOne function 5

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() 
// 0
funcTwo()
// 5
funcThree()
// 0
// #2.2 What will happen if the variable is declared 
// with const instead of let ?


//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
// undefined
funcFive()
// 5

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ? 1

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ? 2

// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// function winBattle(){
//     return true;
// }

const winBattle = () => {
    return true;
  };
  
  let experiencePoints = winBattle() ? 10 : 1;

  console.log(experiencePoints)
  
//   🌟 Exercise 3 : Is It A String ?
//   Instructions
//   Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
//   Check out the example below to see the expected output
//   Example:


const isString = (value) => {
    return typeof value === 'string';
};

console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false


// 🌟 Exercise 4 : Colors
// Instructions
// Using this array :
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…


const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
    console.log(`${index + 1} choice is ${color}.`);
});


// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods. 

// colors.forEach((color,index) => {
//     if(color === 'Violet') {
//         console.log('Yeah')
//     } else {
//         console.log('no..')
//     }
// })

if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}

// 🌟 Exercise 5 : Colors #2
// Instructions
// Using these arrays :
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];