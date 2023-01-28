// Exercise 1 : Checking The BMI
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// Outside of the objects, create a JS function that compares the BMI of both objects.

// Display the name of the person who has the largest BMI.


const infoAboutMe = {
    fullname: 'stas',
    mass: 82,
    height: 180
};

const infoAboutMascha = {
    fullname: 'mascha',
    mass: 60,
    height: 170
}

function BMI (infoAbout) {
     let myBMI = infoAbout.mass / (infoAbout.height/100 * infoAbout.height/100) 
     return myBMI;
}
console.log(BMI(infoAboutMe))
console.log(BMI(infoAboutMascha))


let bestBMI = BMI(infoAboutMe) > BMI(infoAboutMascha) ? infoAboutMe.fullname : infoAboutMascha.fullname;
console.log('The person with the best BMI is: ' + bestBMI)

// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed

// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.



function findAvg(gradesList) {
let total = 0
for (let i = 0; i < gradesList.lenght; i++)
total += gradesList[i]
}
let avg = total / gradesList.lenght
findAvg()
