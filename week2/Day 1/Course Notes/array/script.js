// complex data type
// list of elements - an array

// const shopping = ["chocolate", "shoes", "apple"];

// let all = [12, "hello", true, ["apple", "melon"]];

const colors = ["blue", "red", "yellow", ["white", "black"]];
// to retrieve an element from an array, I need specify
// nameArray[position of the element]

const favoriteColor = colors[1];
const sentence = `My favorite colors is ${favoriteColor}`;
console.log(sentence);


const hatedColor = colors[3][0]; //["white", "black"]
console.log(hatedColor);//white

//change yellow to orange
// I need to find the position of yellow
colors[2] = "orange";
console.log(colors);

const positionRed = colors.indexOf("red"); //1
colors[positionRed] = "green";
// colors[1]
console.log(colors);

const positionWhite = colors.indexOf("white");
console.log(positionWhite); //not found : -1

const fruits = ["apple", "banana", "pear"];
const lastItem = fruits[2];

// position last item : 2
// length : 3

//USE THE LENGTH TO FIND THE LAST ELEMENT
const lengthArray = fruits.length; //length property -- value 3
const positionOfLastElement = lengthArray-1;
const lastElement = fruits[positionOfLastElement]; //fruits[3-1] //fruits[2]

// add an element at the end of the array
fruits.push("melon");
// ["apple", "banana", "pear", "melon"];

// delete an element from the end of the array
fruits.pop();
// ["apple", "banana", "pear"];

//delete or add elements within the array

// splice(start index, how many elements I want to delete, what elements I want to add)


const myFruits = ["apple", "banana", "pear"];
// add between apple and banana
myFruits.splice(1, 0, "melon");
console.log(myFruits);

// ['apple', 'melon', 'banana', 'pear']
// delete banana and pear
myFruits.splice(2, 2)
// I want to start deleting at position 2
// and I want to delete 2 elements
// ['apple', 'melon']


console.log(myFruits);