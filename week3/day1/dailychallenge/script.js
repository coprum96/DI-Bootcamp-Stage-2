// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

const planets = [
  { name: "Mercury", color: "gray", moons: [] }, 
  { name: "Venus", color: "yellow", moons: [] }, 
  { name: "Earth", color: "blue", moons: ["Moon"] }, 
  { name: "Mars", color: "red", moons: ["Phobos", "Deimos"] }, 
  { name: "Jupiter", color: "orange", moons: ["Io", "Europa", "Ganymede", "Callisto"] }, 
  { name: "Saturn", color: "tan", moons: ["Titan", "Rhea", "Iapetus"] }, 
  { name: "Uranus", color: "light-blue", moons: ["Ariel", "Umbriel", "Titania", "Oberon"] }, 
  { name: "Neptune", color: "dark-blue", moons: ["Triton", "Proteus", "Nereid"] }
];

const container = document.getElementById("listPlanets");

for (let i = 0; i < planets.length; i++) {
const planetDiv = document.createElement("div");
planetDiv.classList.add("planet", planets[i].color);
planetDiv.innerHTML = planets[i].name;
container.appendChild(planetDiv);

const moonsContainer = document.createElement("div");
moonsContainer.classList.add("moons-container");
planetDiv.appendChild(moonsContainer);

for (let j = 0; j < planets[i].moons.length; j++) {
  const moonDiv = document.createElement("div");
  moonDiv.classList.add("moon");
  moonDiv.innerHTML = planets[i].moons[j];
  moonsContainer.appendChild(moonDiv);
}
}
