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

