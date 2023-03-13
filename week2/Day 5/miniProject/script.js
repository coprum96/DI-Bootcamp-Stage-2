let currentNumber = '';
let currentOperator = '';
let previousNumber = '';
let result = '';

function number(num) {
  currentNumber += num;
  document.getElementById('output').innerHTML = currentNumber;
}

function operator(op) {
  if (previousNumber !== '') {
    equal();
  }
  currentOperator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function equal() {
  if (currentOperator === '+') {
    result = parseFloat(previousNumber) + parseFloat(currentNumber);
  } else if (currentOperator === '-') {
    result = parseFloat(previousNumber) - parseFloat(currentNumber);
  } else if (currentOperator === '*') {
    result = parseFloat(previousNumber) * parseFloat(currentNumber);
  } else if (currentOperator === '/') {
    result = parseFloat(previousNumber) / parseFloat(currentNumber);
  }
  
  document.getElementById('output').innerHTML = result;
  previousNumber = result;
  currentNumber = '';
  currentOperator = '';
}


