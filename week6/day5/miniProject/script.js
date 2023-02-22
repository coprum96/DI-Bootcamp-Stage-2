const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const startInput = document.getElementById('start');
const endInput = document.getElementById('end');
const addButton = document.getElementById('addTaskButton');

let tasks = [];

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement('li');
    li.textContent = `${task.name} - ${task.description} - ${task.start.toLocaleString()} to ${task.end.toLocaleString()}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks.splice(i, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
    });
    
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }
}

function addTask() {
    const name = nameInput.value;
    const description = descriptionInput.value;
    const start = new Date(startInput.value);
    const end = new Date(endInput.value);
    const isCompleted = false;
    
    if (name && description && start && end) {
      const task = {
        name: name,
        description: description,
        start: start,
        end: end,
        isCompleted: isCompleted
      };
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      nameInput.value = '';
      descriptionInput.value = '';
      startInput.value = '';
      endInput.value = '';
      displayTasks();
    }
  }
  
addButton.addEventListener('click', addTask);

window.addEventListener('load', () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    displayTasks();
  }
});
