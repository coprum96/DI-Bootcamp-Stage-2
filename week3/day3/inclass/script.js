


const id = setInterval(sayHello, 1000);
console.log(id);

function sayHello () {
  console.log("The sales end in 10");
  clearInterval(id)
}

const idInterval = setInterval(sayHelloAgain, 1000);
console.log(idInterval);

let counter = 10;

function sayHelloAgain () {
    counter --;
    if(counter >= 0){
      document.getElementById("message").innerHTML = "The sales end in " + counter;
    } else {
      clearInterval(idInterval); //clear the interval from the memory
    }
  }
  
  let message = document.getElementById("message")
  message.style.color = 'pink'
  message.style.fontSize = '50px'
  message.style.border = '3px solid black'
  message.style.textAlign = 'center'
