const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const d = new Date();
const day = days[d.getDay()];
document.getElementById("demo").innerHTML = day;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = months[d.getMonth()];
document.getElementById("demo").innerHTML = month + ' ' + day;

document.querySelector('.h-wed').scrollIntoView({ 
  behavior: 'smooth' 
});

// Get references to the HTML elements
const form = document.querySelector('form');
const { description, start, end } = form.elements;
const ganttContainer = document.querySelector('.gantt-container');

// Define a function to add a task to the Gantt chart
function addTaskToGanttChart(start, end) {
  // Calculate the start and end days of the task
  const startDate = new Date(start);
  const endDate = new Date(end);
  if (endDate <= startDate) {
    alert('End date must be after start date!');
    return;
  }
  const startDay = startDate.getDay();
  const endDay = endDate.getDay();
  const daysDiff = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
  
  // Create a new task element
  const taskEl = document.createElement('div');
  taskEl.classList.add('task');
  taskEl.style.gridRowStart = startDay + 1;
  taskEl.style.gridRowEnd = endDay + 2;
  taskEl.style.gridColumnStart = 't-' + startDay;
  taskEl.style.gridColumnEnd = 't-' + (startDay + daysDiff);

  // Add the task description to the element
  const descriptionEl = document.createElement('div');
  descriptionEl.classList.add('description');
  descriptionEl.textContent = description.value;
  taskEl.appendChild(descriptionEl);

  // Add the task element to the Gantt chart
  ganttContainer.appendChild(taskEl);
}

// Define a function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  addTaskToGanttChart(start.value, end.value);
  form.reset();
}

// Attach an event listener to the form submit button
form.addEventListener('submit', handleSubmit);

