const faker = require('faker');
const prompt = require('prompt-sync')();

const users = [];

function addUser() {
  const name = prompt('Enter your name: ');
  const street = prompt('Enter your street address: ');
  const country = prompt('Enter your country: ');

  const user = {
    name: name || faker.name.findName(),
    address: {
      street: street || faker.address.streetAddress(),
      country: country || faker.address.country(),
    },
  };

  users.push(user);
}

// Call the function to add 10 fake users to the array
for (let i = 0; i < 10; i++) {
  addUser();
}

// Call the function to add a new user with user input
addUser();

console.log(users);

