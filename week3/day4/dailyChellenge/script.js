const tasks = [];

document.querySelector('#push').addEventListener('click', function() {
  const taskInput = document.querySelector('#newtask input');
  if (taskInput.value.trim().length === 0) {
    alert("Enter Task Name!!!!");
  } else {
    const taskContainer = document.querySelector('#tasks');
    const task = document.createElement('div');
    task.classList.add('task');

    const taskName = document.createElement('span');
    taskName.id = 'taskname';
    taskName.textContent = taskInput.value;
    task.appendChild(taskName);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    task.appendChild(deleteButton);

    taskContainer.appendChild(task);

    tasks.push(taskInput.value);

    deleteButton.addEventListener('click', function() {
      task.remove();
      const index = tasks.indexOf(taskInput.value);
      tasks.splice(index, 1);
    });

    taskInput.value = '';

    const doneButton = document.createElement('input');
    doneButton.setAttribute('type', 'checkbox');
    task.appendChild(doneButton);

    doneButton.addEventListener('click', function() {
      if (doneButton.checked) {
        taskName.style.textDecoration = 'line-through';
        taskName.style.color = 'green';
      } else {
        taskName.style.textDecoration = 'none';
        taskName.style.color = 'black';
      }
    });
  }
});


const clearButton = document.createElement('button');
clearButton.textContent = 'CLEAR';
const taskContainer = document.querySelector('#tasks');
document.querySelector('#newtask').appendChild(clearButton);

clearButton.style.color = 'white'
clearButton.style.backgroundColor = 'red'

clearButton.addEventListener('click', function() {
  taskContainer.innerHTML = '';
  tasks.length = 0;
});




