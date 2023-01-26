
// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:


// My solution
let userAnswer = prompt('give several word')
let wordArray = userAnswer.split(/\s+/)

function frame(str){
    let result = '';
    let border = '*'.repeat(wordArray.length + 10)
    for (let word of wordArray) {
        result += ' * ' + word + ' * \n'
    } 
    return border + '\n' + result + '\n' + border
}
console.log(frame(userAnswer))

// example 2
// Prompt the user for several words (separated by commas).
// Put the words into an array. 
// Hello,hi,morning
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
let sentence = prompt(`Please, enter several words (separated by commas and space)`);
sentence = sentence.split(", ");
console.log(sentence);
let longest = 0;
for (let i of sentence) {
 if (i.length>longest){
    longest = i.length;
    continue;
 }
}
let div;
for (let i = -1; i <= sentence.length; i++){
    if (i<0 || i === sentence.length){
        div = "";
        div = div.padEnd(longest+4,"*")
        console.log(div)
        continue
    } else  {
        div = "";
        div = "* "+sentence[i] + div.padEnd(longest-sentence[i].length," ") + " *";
        console.log(div);
        continue
    } 
}