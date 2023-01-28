// Today we will be creating a fully functional calculator. In order to do this, we must have our HTML and Javascript files interact with each other.
// We will be using Javascript to dynamically calculate the outcome of the buttons that were clicked on the HTML.
// We will be adding an attribute called onclick to each button. The onclick attribute allows us to call a function from our Javascript file when the button is clicked.
// For example, if you click on the number 2 on the calculator (ie. seen below in the assets), the function number(2) will be called. The argument is the value of the button.

// Use HTML CSS for the visual.


let a = '';
let b = '';
let sign = '';
let finish = '';

const digit = ['0','1','2','3','4','5','6','7','8','9', '.']
const action = ['-','+','X','/']

// screen 
const out = document.querySelector('.calc-screen p')

function clearAll () {
 a = '';
 b = '';
 sign = '';
 finish = '';
 
}








function number (num) {

}

function operator (operator) {
    switch (operator) {
        case '+';
        result = num1 + num2; 
        break;
        case '-';


    }
}

function equal () {

}