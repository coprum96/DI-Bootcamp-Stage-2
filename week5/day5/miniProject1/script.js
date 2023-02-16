//Select elements in DOM
let button = document.querySelector('#button');
let names = document.querySelector('#name');
let height = document.querySelector('#height');
let gender = document.querySelector('#gender');
let birthYear = document.querySelector('#birth-year');
let homeWorld = document.querySelector('#home-world');

//Get the info from API and catch for Errors
function getInfo () {
  //Call Loading Data
  updateWithLoading();
  //Get Random people in the API between 1 and 88
  let randomNumber = Math.floor((Math.random() * 88) + 1);
  let apiUrl = 'https://swapi.dev/api/people/' + randomNumber + '/';

  
  // fetch
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      updateInfo(data);
    })
    .catch(error => {
      console.log(error);
      updateInfoWithError();
    });
}

//Display info on screen
function updateInfo(resp) {
  // fetch
  let url = new URL(resp.homeworld);
  url.protocol = 'https:';

  fetch(url.href)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      updateInfo2(data);
    })
    .catch(error => {
      console.log(error);
      updateInfoWithError();
    });

  names.innerText = resp.name;
  height.innerText = `Height: ${resp.height}`;
  gender.innerText = `Gender: ${resp.gender}`;
  birthYear.innerText = `Birth Year: ${resp.birth_year}`;
}

//Display Home World
function updateInfo2(re){
  homeWorld.innerText = `Home World: ${re.name}`;
}

//Display when Error
function updateInfoWithError() {
  names.innerText = 'Oh No! That person isnt available.';
  height.innerText = '';
  gender.innerText = '';
  birthYear.innerText = '';
  homeWorld.innerText = '';
}

//Display when updating info (pending data)
function updateWithLoading(){
  names.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
  height.innerText = '';
  gender.innerText = '';
  birthYear.innerText = '';
  homeWorld.innerText = '';
}

button.addEventListener('click', getInfo);
