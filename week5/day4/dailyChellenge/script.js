// 1st Challenge
// Instructions
// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

// Example

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3])
.then((values) => {
    console.log(values)

})

// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

const button = document.querySelector('#button');
button.addEventListener('click', () => {
  const city1Latitude = document.getElementById('latitude1').value;
  const city1Longitude = document.getElementById('longitude1').value;
  const city2Latitude = document.getElementById('latitude2').value;
  const city2Longitude = document.getElementById('longitude2').value;
  
  Promise.all([
    fetch(`https://api.sunrise-sunset.org/json?lat=${city1Latitude}&lng=${city1Longitude}&date=today`)
    .then(response => response.json())
    .then(data => data.results.sunrise),

    fetch(`https://api.sunrise-sunset.org/json?lat=${city2Latitude}&lng=${city2Longitude}&date=today`)
    .then(response => response.json())
    .then(data => data.results.sunrise)
  ])
    .then(([city1Time, city2Time]) => {
    const sunriseTimesDiv = document.getElementById('sunrise-times');

    sunriseTimesDiv.innerHTML = `The sunrise time in the first city is: ${city1Time}<br>The sunrise time in the second city is: ${city2Time}`;
  })
  .catch(error => console.log(error));
});




