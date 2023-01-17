let str = "Hello Everyone, please say hello to the class";
let posUppercaseHello = str.indexOf("Hello"); // case sensitive
let posLowercaseHello = str.indexOf("hello");
console.log(posUppercaseHello) // 0
console.log(posLowercaseHello) // 27

let secondstr = "hello Everyone, please say hello to the class";
let secondStrPosHello = secondstr.indexOf("hello"); 
console.log(secondStrPosHello) // 0