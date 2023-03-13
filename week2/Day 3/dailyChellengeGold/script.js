const numbers = [5,0,9,1,7,4,2,6,3,8];

const arrayToSring = numbers.toString()
const arrayToSring2 = numbers.join('')
const arrayToSring3 = numbers.join('+')
const arrayToSring4 = numbers.join('-')
console.log(arrayToSring)
console.log(arrayToSring2)
console.log(arrayToSring3)
console.log(arrayToSring4)


function arrayInDescendingOrder() {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
          [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
      }
    }
    
    return numbers;
  }
  
  console.log(arrayInDescendingOrder(numbers));