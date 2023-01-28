// function listFruits () {
//     if(true) {
//         const fruit1 = "orange"; //it exists in block scope
//         let fruit2 = "avocado"; //it exists in block scope
//         var fruit3 = "banana"; // it exists in function scope
//     }

//     //console.log(fruit1);
//     //console.log(fruit2);
//     console.log(fruit3);
// }

// listFruits();

// var name = "Sarah";
// const greeting = "Hello ";
// console.log(greeting + name);

// // if we try to set the greeting again, we get an error

// //greeting = "Hi";
// name = "Patience";
// console.log(greeting + name)

// let age = 1;
// console.log("You're " + age);

// age = 5; // we reset the age but no error
// console.log("You're " + age);



// function func() {
//     // x is known here but not defined.
//     console.log('value of x here: ', x)
//     {
//       var x = 10;
//       x = x + 5;
//     }
//     // x is still known here and has a value.
//     console.log('value of x after for block: ', x)
//   }
//   // x is NOT known here.
//   func()

//   function func() {
//     // x is NOT known here. Try uncommenting the line below.
//     // console.log('value of x here: ', x)
//     {
//       let x = 20;
//       x = x + 5;
//     }
//     // x is NOT known here. Try uncommenting the line below.
//     // console.log('value of x after for block: ', x)
//   }
//   // x is NOT known here.
//   func()

// //   let mango = "yellow"

// // if (mango === "yellow"){
// //   let mango = "blue"
// //   console.log(mango)
// // }
// // console.log(mango)

// var mango = "yellow"

// if (mango === "yellow") {
//   var mango = "blue"
//   console.log(mango)
// }
// console.log(mango)


// Exercise 1
// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.

function Ages (myAge) {
    let mumAge = myAge * 2;
    let dadAge = mumAge * 1.2;
    console.log(mumAge)
    console.log(dadAge)
}

Ages(26)

// Exercise 2
// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, return the age of my mum (my mum is twice my age)

// 4. Call the function

// 5. In the global scope, console.log the result of the function

function calAges (myAges) {
    return myAges * 2;
}
let result = calAges(26)
alert(result);


// Exercise 3
// Modify the function checkQuantityOrder, so that instead of console logging "Dear client, you won a ..." it will return the gift.
// Create a function sendGift, it retrieves the return value of the function checkQuantityOrder and console log "Dear client, you won a ..."


function checkQuantityOrder () {
    const gift = 'chupa-chups'
    return gift 
}
console.log(checkQuantityOrder())

function sendGift () {
    result = checkQuantityOrder(gift)
}
console.log('Dear client, you won a ' + checkQuantityOrder())
