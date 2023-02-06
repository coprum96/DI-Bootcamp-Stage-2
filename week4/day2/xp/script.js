// 🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum

// function numbers(a, b) {
//     return a + b;
//   }
  
//   console.log(numbers(3, 5)); 

const numbers = (a, b) => {
    return a + b;
}

console.log(numbers(3, 5)); 

// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

function kgToGramm(a) {
    return a * 1000;
}

console.log(kgToGramm(5));

const kgToGrammSecond = (a) => {
    return a * 1000
}

console.log(kgToGrammSecond(10));

const kgToGrammThird = (a) => a*1000
kgToGrammThird(7)

// 🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

((jobTitle, geographicLocation, partnerName, numberOfChildren) => {
    console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`);
})('Developer','Israel','Masha','1');


