// Exercise 2 - using the event object
// const colors = ["blue", "yellow", "green", "pink"];

// Add inside the HTML file a div of id "container" (do it directly in the HTML)
// Using a loop, add one button per color inside the div container (do it directly in the JS)
// Each button should have an "click" event listener that changes the background color of the document, to the color of the button (do it directly in the JS)

const colors = ["blue", "yellow", "green", "pink"]

const container = document.getElementById('container')

for (let i = 0; i < colors.length; i++) {
    const button = document.createElement('button');
    button.innerHTML = colors[i];
    container.append(button);
    function backgroundColor () {
        document.body.style.backgroundColor = colors[i];
      };
    
      button.addEventListener('click', backgroundColor)
  }

  


