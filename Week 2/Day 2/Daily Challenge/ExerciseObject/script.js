const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. Add the lastname Smith to the object
userCart["lastname"] = "SMITH";
// console.log(userCart);

// 2. Change the username from John to Tom
userCart["username"] ="Tom";
// console.log(userCart);


// 3. Change the price of the pear, so it will include the Taxes. (17% is 0.17)
// userCart["prices"]["pear"] = userCart["prices"]["pear"] * 1.17;
userCart["prices"]["pear"] *= 1.17; //shortcut
console.log(userCart);

// 4. Ask the user for the fruit he wants between Apple, Banana and Pear.
//  Make sure that your code accept all type of strings, 
// for example "Banana" or "banana" or "BaNaNA"

const userChoice = prompt("What fruit to you want").toLowerCase();
console.log(userChoice);


// 5. Console.log the price for the specific fruit the user wants

// userCart["prices"]["pear"];
// userCart["prices"]["banana"];
// userCart["prices"]["apple"];

const value = userCart["prices"][userChoice];
console.log(`The price of ${userChoice} is ${value} dollars`);
// --> userCart["prices"]["apple"];
// --> userCart["prices"]["banana"];


//AVOID DOT NOTATION
// const valueOther = userCart["prices"].userChoice;
// console.log(`valueOther is ${valueOther}`); //undefined
// dot notation doesnt recognize variables

// let number = 2;
// // number = number + 10 //number will be equal to 12
// // number = 2 + 10
// //SHORTCUT
// number += 10 //number will be equal to 12

// let num = 20;
// num = num * 2;
// num *= 2