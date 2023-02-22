const taskList = document.getElementById('task-list');

function displayTasks() {
  taskList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    
    const li = document.createElement('li');
    const name = document.createElement('span');
    const startDate = document.createElement('span');
    const remainingDays = document.createElement('span');
    
    name.textContent = task.name;
    startDate.textContent = task.start.toDateString();
    remainingDays.textContent = getRemainingDays(task.end);
    
    li.appendChild(name);
    li.appendChild(startDate);
    li.appendChild(remainingDays);
    
    taskList.appendChild(li);
  }
}

function getRemainingDays(date) {
  const today = new Date();
  const daysLeft = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysLeft > 0) {
    return ` - ${daysLeft} days left to complete the task.`;
  } else if (daysLeft === 0) {
    return ` - Today is the last day to complete the task.`;
  } else {
    return ` - Task is already overdue by ${Math.abs(daysLeft)} days.`;
  }
}

window.addEventListener('load', () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    displayTasks();
  }
});
