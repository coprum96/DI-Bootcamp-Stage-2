// Add the code above, to your HTML file

// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

const changeId = document.querySelector('#navBar');
changeId.setAttribute('id', 'socialNetworkNavigation');

const newLi = document.createElement('li');
newLi.appendChild(document.createTextNode('Logout'));

const navBarUl = document.querySelector('#socialNetworkNavigation ul');
navBarUl.appendChild(newLi);
