// Get the content and dash elements
let content = document.querySelector('.content1');
let dash = document.querySelector('.dash');

// Define the text to display
let text = "Full-Stack Developer";

// Define the speed (in milliseconds) and the current index
let speed = 30;
let index = 0;

// Define a function to write the text
function writeText() {
  // Check if all characters have been displayed
  if (index >= text.length) {
    return;
  }
  
  // Get the next character and append it to the content element
  var char = text.charAt(index);
  content.innerHTML += char;
  
  // Increase the index and set a timeout to call this function again
  index++;
  setTimeout(writeText, speed);
}

// Call the writeText function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
  writeText();
});
