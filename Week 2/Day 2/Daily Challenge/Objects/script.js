// Primitive data types
// String, Number, Boolean, Undefined and null
// //Complex data type
// Array, Object

// const fruits = ["Banana", "Apples","Blueberries"];
// const prices = [3, 5, 6];
// const qty = [3, 5, 6];


// {
//     key:value,
//     key:value,
// }

// OBJECT
const shopping = {
    nameFruit : "apple",
    price: 0.5,
    qty: 5,
}

// retrieve data from the object
// One way : nameObject.nameKey
// Recommended way: nameObject["nameKey"]

// retrieve the value of the nameFruit key or property
const fruit = shopping.nameFruit;
const fruitOther = shopping["nameFruit"]; //square bracket notation


// modify a value in the object
// change the price of the apple to 1
shopping["price"] = 1;
console.log(shopping);


const family = {
    lastName : "Smith",
    members : 3,
    names : ["John", "Tom", "Diana"],
    isInVacation: true,
}

//modify the key of isInVacation to false
family["isInVacation"] = false;

// Retrieve the name of the last member
const people = family["names"]
//["John", "Tom", "Diana"]
const lastPerson =  family["names"][2];

// dymamic : trickier way but better because not hardcoded, 
// you could also use the length of the array
// const members = family['members']; //3
// const lastPersonOther = family["names"][members-1];
// console.log(lastPersonOther);


const sentence = `There are ${family["members"]} members, the last one is ${family["names"][2]}`;
console.log(sentence);




const trip = {
    city : "Paris",
    date : "June",
    time: 12,
}
console.log(trip);
// 1. I want a sentence saying that "In June I go to Paris";
// 2. Modify the time from 12 to 2
// 3. Add a key in the Object, airline using

//1. retrive some data
const sentenceTrip = `In ${trip["date"]} I go to ${trip["city"]}`;
console.log(sentenceTrip);  //show the value of the variable

//c2. hange the valueof the key time in the trip object
trip["time"] = 2;
console.log(trip);
// {
//     city : "Paris",
//     date : "June",
//     time: 2,
// }

// 3. add a key airlines with the value ELAL to the object
trip["airlines"] = ["ELAL", "USArline"];
console.log(trip);


const secondTrip = {
    city : "Paris",
    date : "June",
    time: 12,
    airlines : {
        type : "ELAL",
        price : 200,
        seats : ["2A", "23B"],
    }
}

const airlineObject = secondTrip["airlines"];
// {
//     type : "ELAL",
//     price : 200,
//     seats : ["2A", "23B"],
// }

const pricesecondTrip = secondTrip["airlines"]["price"] //200
const seatsecondTrip = secondTrip["airlines"]["seats"][0] //"2A"


const cityVacation = secondTrip["city"];
const dateVacation = secondTrip["date"];

// const sentenceOne = "In June I went to Paris"; //not efficient
const sentenceTwo = `In ${dateVacation} I went to ${cityVacation}`;
const sentenceThree = `In ${secondTrip["date"]} I went to ${secondTrip["city"]}`;


//array of objects
const users = [
    {
        username: "John",
        password: 124
    },
    {
        username: "Tom",
        password: 245
    }
]

// retrive the password of the 2nd user
const passwordSecondUser = users[1]["password"];
console.log(passwordSecondUser); //245


// array : its an ordered list
const colors = ["blue", "red"]
// blue is at the position 0
// red is at the position 1

//list of keys and value
const user = {
    username: "John",
    password: 124
}
