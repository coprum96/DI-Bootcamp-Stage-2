// Select DOM elements
const button = document.querySelector('#button');
const name = document.querySelector('#name');
const nickname = document.querySelector('#nickname');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const type = document.querySelector('#type');
const imgContainer = document.querySelector('.img-container');

// Function to get random number between 1 and 898 (total number of pokemons in the API)
function getRandomPokemonId() {
  return Math.floor(Math.random() * 898) + 1;
}

// Function to display the info on the page
function displayInfo(data) {
  name.innerText = data.name;
  nickname.innerText = `Nickname: ${data.nickname}`;
  height.innerText = `Height: ${data.height}`;
  weight.innerText = `Weight: ${data.weight}`;
  type.innerText = `Type: ${data.type}`;

  const img = document.createElement('img');
  img.src = data.imageUrl;
  img.alt = data.name;
  imgContainer.innerHTML = '';
  imgContainer.appendChild(img);
}

// Function to handle errors
function displayError() {
  name.innerText = 'Oh no! An error occurred.';
  nickname.innerText = '';
  height.innerText = '';
  weight.innerText = '';
  type.innerText = '';
  imgContainer.innerHTML = '';
}

// Function to handle loading state
function displayLoading() {
  name.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
  nickname.innerText = '';
  height.innerText = '';
  weight.innerText = '';
  type.innerText = '';
  imgContainer.innerHTML = '';
}

// Function to fetch the data from the PokeAPI
function fetchPokemon() {
  // Display loading state
  displayLoading();

  // Get a random Pokemon id
  const id = getRandomPokemonId();

  // Construct the URL for the API request
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // Make the API request with fetch
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Get the information we need from the API response
      const pokemonData = {
        name: data.name,
        nickname: data.forms[0].name,
        height: data.height,
        weight: data.weight,
        type: data.types.map(type => type.type.name).join(', '),
        imageUrl: data.sprites.front_default
      };

      // Display the info on the page
      displayInfo(pokemonData);
    })
    .catch(error => {
      // Display error message on the page
      console.error(error);
      displayError();
    });
}

// Attach the click event to the button
button.addEventListener('click', fetchPokemon);
