let text = "Hello";

function checkText (){
	console.log("In the function",text); 
    // In the checkText function, the first console.log statement logs the value of text, which is "Hello".
	text += " World";
	console.log("Still in the function",text);
    // Then, text is concatenated with " World" and re-assigned to itself. The second console.log statement logs the updated value of text, which is now "Hello World".
}

console.log("before the function", text);
// simple hello

checkText()
// console.log statement logs the value of text after the checkText function has been called, which is still "Hello World".

console.log("after the function", text);
// the fourth console.log statement logs the value of text after the checkText function has been called, which is still "Hello World".

let friend = "Harry";

function checkfriend (){
	let friend = "Alice";
	console.log("In the function",friend); 
	friend += " Smith";
	console.log("Still in the function",friend);
}

console.log("before the function", friend);

checkfriend()

console.log("after the function", friend);


// Exercise 1:
// Greet the user with his name, the user's name is a parameter. Do this exercise,
// first by using function declarations
// then function expression,
// then arrow function

function hello (name) {
   console.log(`hello ${name}`)
}

hello('stas')

const helloAgain = (name) => {
    console.log(`hello ${name}`)
}


helloAgain('stas')