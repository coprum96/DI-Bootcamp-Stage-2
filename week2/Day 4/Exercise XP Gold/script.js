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
        return (splitName[0] + ' ' + splitName[1][0]).toUpperCase()+'.'; // use first letter of each name and convert to uppercase
    } 
    return name;
}

console.log(abbrevName("Robin Singh"));


// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

function stringCase(string) {
    let result = '';
    for(let i=0; i<string.length; i++) {
        let char = string[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase()
        } else {
            result += char.toUpperCase()
        }
    }
    return result
}

console.log(stringCase('The Quick Brown Fox'))


// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.

function isOmnipresent(arr, value) {
    for(let i = 0; i < arr.length; i++)
    if(!arr[i].includes(value)){
        return false
    }
    return true
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))

