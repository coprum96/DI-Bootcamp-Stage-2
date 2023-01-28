// Exercise 1
let myNummber = 0535249628
let myAdress = 'Ha-Roe'
let myCountry = 'Ramat-Gan'

console.log('Hi, i am Stas and my Number is ' + myNummber + ' my adress is ' + myAdress +' in ' + myCountry)

let globalAdress = 'I live in BenYehuda 5, in Israel'
console.log(globalAdress)

// Exercise 2
let myBirthdayYear = 1996
let myFutureYear =  2023

console.log('i will be ' + (myFutureYear - myBirthdayYear) + ' in ' + myFutureYear)

// Exercise 3
let pets = ['cat', 'dog', 'fish','rabbit','cow']
const secondPet =pets[1];
console.log(pets[1])

pets.push('horse');
pets.splice(3, 1);
console.log(pets)

let petsLenght = pets.length
console.log(pets + ' ' + petsLenght)
