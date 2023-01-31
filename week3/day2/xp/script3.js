// In the JS file:

// Declare a global variable named allBoldItems.

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called return_normal() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph).


const allBoldItems = [];
let boldElements;

function getBold_items() {
  boldElements = document.querySelectorAll("strong");
  boldElements.forEach(boldItem => {
    allBoldItems.push(boldItem.textContent);
    boldItem.addEventListener("mouseover", highlight);
    boldItem.addEventListener("mouseout", return_normal);
  });
}

getBold_items();
console.log(allBoldItems);

function highlight() {
  this.style.color = "blue";
}

function return_normal() {
  this.style.color = "black";
}
