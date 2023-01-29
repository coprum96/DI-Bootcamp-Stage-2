// Exercise 2 : Users And Style
// Add the code above, to your HTML file

// Add a “light blue” background color and some padding to the <div>.

// Do not display the <li> that contains the text node “John”.

// Add a border to the <li> that contains the text node “Pete”.

// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

// {/* <div>Users:</div>
// <ul>
//     <li>John</li>
//     <li>Pete</li>
// </ul> */}

const div1 = document.querySelector ('div').style.color = 'lightblue'

const noJohn = document.querySelector('li')
noJohn.style.display = 'none'

const peteBorder = document.querySelector('li') 
peteBorder.style.borderColor = 'black'

document.body.style.fontSize = '145px';
