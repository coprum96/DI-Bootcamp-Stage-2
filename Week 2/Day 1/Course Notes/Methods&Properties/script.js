// string
// number

// Properties

// "Hello".length
// 5

const password = "hello1234";
// property length
// PROPERTY
const lengthPassword = password.length; //9

// "Paris" == "paris"
// false
// "Paris".toLowerCase()
// 'paris'


// METHOD need ()
const answer = prompt('where do you want to travel?');
// whatever the prompt returns will be saved into the variable
// PARIS or pAris
// to make sure that the comparaison is true, I need to convert the string to lowercase
console.log(answer.toLowerCase() == "paris");

// to chain methods
const mood = "happy";
console.log(mood.toUpperCase().length); //first to UpperCase then find the length


"hello".substring(0,2) 
// 'he'

"hello".substring(0,3) 
// 'hel'

"hello".substring(0,8) 
// 'hello'

"hello".substring(0) 
// 'hello'

let word = "hello";
let newWord = word.substring(0,3)

console.log(word);
// --> 'hello'

console.log(newWord);
// --> 'hel'