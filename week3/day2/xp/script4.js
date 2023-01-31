// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

const form = document.forms[0];
const radiusInput = document.querySelector('#radius');
const volumeOutput = document.querySelector('#volume');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', calculateOfValue)

function calculateOfValue(event) {
  event.preventDefault();

  const radius = Math.abs(radiusInput.value);
  const volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volumeOutput.value = volume.toFixed(4);
};
