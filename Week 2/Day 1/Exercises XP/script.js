// Exercise XP
// Exercise 1
// 1. Store your favorite food into a variable.

// 2. Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// 3. Console.log I eat <favorite food> at every <favorite meal>

let favoriteFood = 'schaschluk';
let favoriteMeal = 'pelmeni';
let favoriteDrink = 'Vodka';

console.log('I eat everyday ' + favoriteFood + ' and ' + favoriteMeal + ' and drink ' + favoriteDrink + '!')


// Exercise 2 Part 1
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeriesLength = myWatchedSeries.length
const myWatchedSeriesSentence = 'black mirror, money heist';
const myLastSeries = 'the big bang theory'

console.log('I watched ' + myWatchedSeriesLength + ' series: ' + myWatchedSeriesSentence + ' and ' + myLastSeries)

// Exercise 2 Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.

// Add, at the end of the array, the name of another series you watched.

// Add, at the beginning of the array, the name of your favorite series.

// Delete the series “black mirror”.

// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

// Change the series “the big bang theory” to “friends”

const index = myWatchedSeries.indexOf('the big bang theory');
myWatchedSeries.splice(index, 1, 'friends');
myWatchedSeries.shift()
myWatchedSeries.push('lost')

console.log('I watched ' + myWatchedSeriesLength + ' series: '+ myWatchedSeries)


// Exercise 3
// 1. Store a celsius temperature into a variable.

// 2. Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

let celsiusTemperatur = 18
let fahrenheitTemperatur = (celsiusTemperatur / 5) * 9 + 32
console.log('The Temperatur in Tel-Aviv is ' + fahrenheitTemperatur + 'fahrenheit')

// Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: It will output 55, because 34 and 21 are numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: It will output 23, because 2 and 21 are numbers
// Actual:23

// What will be the outcome of a + b in the first expression ? 55

// What will be the outcome of a + b in the second expression ? 23
// What is the value of c? undifined

console.log(3 + 4 + '5'); // 75


// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

typeof(15)
// Prediction: "number"
// Actual: 55

typeof(5.5)
// Prediction: "number"
// Actual: 55

typeof(NaN)
// Prediction: "number"
// Actual: 0

typeof("hello")
// Prediction: "string"
// Actual: hello

typeof(true)
// Prediction: boolean
// Actual: true

typeof(1 != 2)
// Prediction: boolean
// Actual: false

"hamburger" + "s"
// Prediction:
// Actual: hamburgers

"hamburgers" - "s"
// Prediction:
// Actual: s

"1" + "3"
// Prediction: numbers
// Actual: 4

"1" - "3"
// Prediction: numbers
// Actual: -2

"johnny" + 5
// Prediction: 
// Actual: johnny5

"johnny" - 5
// Prediction:
// Actual: NaN

99 * "hello"
// Prediction:
// Actual: NaN

1 != 1
// Prediction:
// Actual: false

1 == "1"
// Prediction:
// Actual: true

1 === "1"
// Prediction:
// Actual: true
