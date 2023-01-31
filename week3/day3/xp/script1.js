// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

function sayHi() {
    alert('Hello World');
  }
  
  setTimeout(sayHi, 2000); 

//   Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

const container = document.querySelector('#container')
const helloWorldP = document.createElement('p')
const helloWorld =  document.createTextNode('Hello World')
helloWorldP.appendChild(helloWorld)
container.appendChild(helloWorldP)


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let count = 0;
let id = setInterval(addParagraph, 2000);

function addParagraph() {
  count++;
  const container = document.getElementById("container");
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = "Hello World";
  container.appendChild(newParagraph);

  if (count === 10) {
    clearInterval(id);
  }
}

const button = document.querySelector("#clear");
button.addEventListener("click", clearHelloWorld);

function clearHelloWorld() {
  clearInterval(id);
}
