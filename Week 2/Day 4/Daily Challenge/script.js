

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

