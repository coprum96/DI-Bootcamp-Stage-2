// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

// first example
function people(birthDate1,birthDate2) {
    let older, younger;
    if(birthDate1 > birthDate2) {
    older = birthDate1;
    younger = birthDate2
    } else if {
    younger = birthDate1;
    older = birthDate2;
    } 
}

people()

// second example
function halfAge (birthDate1,birthDate2){
    let ageDiff = Math.abs(birthDate1 - birthDate2)
    
    let halfAge = ageDiff 
    
    let youngerBirthday = Math.min(birthDate1, birthDate2)
    
    let halfAgeDate = new Date(youngerBirthday + ageDiff, 0)
    return;

}

// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length

let clientZipCode = prompt("What is your Zip code")
if (clientZipCode !== "number" && clientZipCode.length === 5 && clientZipCode !== '') {
    console.log('success')
} else {
    console.log('error')
}

// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result

let userWord = prompt('Give several word');
let withoutVowels = userWord.replace(/[aeiou]/gi, [1]);
console.log(withoutVowels)