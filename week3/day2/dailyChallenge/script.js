// Daily Challenge
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

// const libform = document.querySelector('form');
// console.log(libform)

// const noun = document.getElementById('noun')
// console.log(noun)

// const adjective = document.getElementById('adjective')
// console.log(adjective)

// const person = document.getElementById('person')
// console.log(person);

// const verb = document.getElementById('verb')
// console.log(verb)

// const place = document.getElementById('place')
// console.log(place)

// const button = document.querySelector('button')
// console.log(button)

const story = document.getElementById('story')

function madLibs() {
    const libform = document.querySelector('form');
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;

    libform.innerHTML = noun + ', ' + adjective + " " + person + " " + verb + place + "!";
    
}


const button = document.querySelector('button');
button.addEventListener('click', madLibs);

story.append(libform)





