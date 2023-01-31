// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions


const container = document.querySelector('#container')
const animate = document.querySelector('#animate')
const button = document.body.firstElementChild

console.log(container)
console.log(animate)
console.log(button)


function myMove() {
    let id = null;
    const animate = document.querySelector('#animate')
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        animate.style.right = pos + 'px';
        animate.style.left = pos + 'px';
      }
    }
  }
