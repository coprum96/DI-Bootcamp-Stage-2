// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

const form = document.querySelector('form');
console.log(form);

const inputOne = document.querySelector('#fname');
const inputTwo = document.querySelector('#lname');
const inputThree = document.querySelector('#submit');
console.log(inputOne);
console.log(inputTwo);
console.log(inputThree);

const inputAll = document.querySelector('input');
console.log(inputAll);

form.addEventListener('submit', formFunction);
const usersAnswerList = document.querySelector(".usersAnswer");

function formFunction (event) {
    event.preventDefault();
    const inputOneF = inputOne.value;
    const inputTwoL = inputTwo.value;

    if (inputOneF.length && inputTwoL.length) {
        const inputOneItem = document.createElement('li');
        inputOneItem.textContent = 'First Name: ' + inputOneF;
        usersAnswerList.appendChild(inputOneItem);

        const inputTwoItem = document.createElement('li');
        inputTwoItem.textContent = 'Last Name: ' + inputTwoL;
        usersAnswerList.appendChild(inputTwoItem);
    }
}

