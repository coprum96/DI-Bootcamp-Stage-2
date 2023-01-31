// Exercise 5 : Event Listeners
// Instructions
// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.

const oneElement = document.body.firstElementChild

oneElement.addEventListener('click' , highlight)

oneElement.addEventListener('mouseover' , return_normal)

oneElement.addEventListener('dblclick' , doubleClick)

function highlight() {
    this.style.color = "blue";
  }
  
function return_normal() {
    this.style.color = "black";
  }

function doubleClick() {
    this.style.fontSize = "45px";
  }
