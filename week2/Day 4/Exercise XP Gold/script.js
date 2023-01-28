// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

isBlank = function (word) {
    if (word.lenght === 0) {
        return true;

    } else {
        return false;
    }
}

console.log(isBlank('')); 
console.log(isBlank('abc'));

// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.


function abbrevName (name) {
    let splitName = name.trim().split(" "); // split on space instead of empty string
    if (splitName.length > 1) { // fix typo in property name
        return (splitName[0][0] + '.' + splitName[1][0]).toUpperCase(); // use first letter of each name and convert to uppercase
    } 
    return name;
}

console.log(abbrevName("Robin Singh"));


// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :