// exercise 1
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

const people = [
    "Greg", 
    "Mary", 
    "Devon", 
    "James"
];

people.shift()
console.log(people);

people.splice(2, 1, 'Jason')
console.log(people);

people.push('Stas');
console.log(people);

console.log(people.indexOf('Mary'))

console.log(people.slice(1, 3))

const index = people.indexOf("Foo")
console.log(index)

// Part 2 - Loops
// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.

for (let i=0; i < people.length; i++) { 
    console.log(people[i])
}


for (let i=0; i < people.length; i++) { 
    if (people[i] === 3) {
        console.log('Jason');
        break;
    }
    console.log(people[i]);
}

// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

const myFavoriteColor = [
    'blue',
    'yellow',
    'black',
    'pink',
    'green'
]

console.log(myFavoriteColor)

for (let i=0; i <= myFavoriteColor.length; i++) {
    console.log('My ' + '#' +[i] + ' choice is ' + myFavoriteColor[i])
}

// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?


let number = prompt('give a number');
while (number < 10) {
        console.log('please enter new number');
        number = prompt('give a number');
        number++
}
    console.log('great');

// Exercise 4 : Building Management
// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors)
console.log('First Floor is ' + building.numberOfAptByFloor.firstFloor + ' rooms')
console.log('Third Floor is ' + building.numberOfAptByFloor.thirdFloor + ' rooms')
console.log(building.nameOfTenants[1] + building.numberOfRoomsAndRent.dan[0]) 
console.log(building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1])
building.numberOfRoomsAndRent.dan[1] = 1200
console.log(building)

// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

const family = {
    mother: 'masha',
    dauther: 'lisa',
    father: 'stas'
}

for (let x in family) {
    console.log(x)
}

for (let x in family) {
    console.log(family[x])
}


// Exercise 6 : Rudolf

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let sentence = ' '
for (let y in details) {
    sentence += y + ' ' + details[y] + ' ';
}

console.log(sentence)

// Exercise 7
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let letters = ' '

for(let y of names.sort()) {
    console.log(y)
    letters = letters + y[0]
}
console.log(letters)
