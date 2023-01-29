// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

const allBooks = [];

let book1 = {
    title: "'War and Peace' written by",
    author: "Leo Tolstoi",
    image: "https://www.storytel.com/images/e/640x640/0000740374.jpg",
    alreadyRead: false
  };
  
  let book2 = {
    title: "'Anna Karenina' written by",
    author: "Leo Tolsoi",
    image: "https://flxt.tmsimg.com/assets/p9248601_p_v8_ae.jpg",
    alreadyRead: true
  };

allBooks.push(book1)
allBooks.push(book2)


let listBooks = document.querySelector('.listBooks');

let table = document.createElement('table');


listBooks.appendChild(table);


for (let i = 0; i < allBooks.length; i++) {
  let book = allBooks[i];


  let row = table.insertRow();


  let titleCell = row.insertCell();


  let authorCell = row.insertCell();

  titleCell.innerHTML = book.title;
  authorCell.innerHTML = book.author;


  let imgCell = row.insertCell();

  let img = document.createElement('img');
  img.src = book.image;
  img.style.width = "300px";
  imgCell.appendChild(img);


  if (book.alreadyRead) {
    row.style.color = 'red';
  }
}
const styleBooks = document.querySelector('div')

styleBooks.style.backgroundColor = 'lightgreen'
styleBooks.style.border = '6px dotted black'
