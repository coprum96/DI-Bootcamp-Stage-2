// Exercise 1

// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// Delete the <li> that contains the text node “Sarah”.

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

const divElement = document.body.children[0]
console.log(divElement)

const renameNameUl = document.body.children[1]
const renameNameLi = renameNameUl.children[1]
console.log(renameNameLi)
renameNameLi.textContent = 'Richard'


const lists = document.getElementsByClassName('list')
for(let i = 0; i < lists.length; i++) {
    let listsItems = lists[i].getElementsByTagName('li')
    listsItems[0].innerHTML = 'Stas'
}

const contains = document.getElementsByClassName('list')
for(let i = 0; i < lists.length; i++) {
    var listsItems = lists[i].getElementsByTagName('li')
    for(let j = 0; j < lists.length; j++)
    if (listsItems[j].textContent === 'Sarah') {
        lists[i].removeChild(listsItems[j])
    }
}





