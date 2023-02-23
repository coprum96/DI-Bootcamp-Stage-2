// get tasks from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// sort tasks by start date
tasks.sort(function(a, b) {
  return a.start - b.start;
});

// display tasks in list
const taskList = document.querySelector('#task-list');
tasks.forEach(function(task, index) {
  const li = document.createElement('li');
  const name = document.createElement('h2');
  const description = document.createElement('p');
  const start = document.createElement('p');
  const end = document.createElement('p');
  const done = document.createElement('p')
  const deleteButton = document.createElement('button');
  const editButton = document.createElement('button');
  
  name.textContent = 'Name:' + task.name;
  description.textContent = 'Description: ' + task.description;
  start.textContent = 'Start date and time: ' + new Date(task.start).toLocaleString();
  end.textContent = ' End date and time: ' + new Date(task.end).toLocaleString();
  done.textContent = 'Done: ' + task.done;
  deleteButton.textContent = 'Delete the task'
  editButton.textContent = 'Edit';
  
  li.appendChild(name);
  li.appendChild(description);
  li.appendChild(start);
  li.appendChild(end);
  li.appendChild(done);
  li.appendChild(deleteButton);
  li.appendChild(editButton);

  deleteButton.addEventListener('click', function() {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    li.remove();
  });

  editButton.addEventListener('click', function() {
    const newName = prompt('Enter a new name:', task.name);
    if (newName) {
      task.name = newName;
      const newDescription = prompt('Enter a new description:', task.description);
      if (newDescription) {
        task.description = newDescription;
        const newStart = prompt('Enter a new start date and time (YYYY-MM-DDTHH:MM):', new Date(task.start).toISOString().slice(0, 16));
        if (newStart) {
          task.start = new Date(newStart).getTime();
          const newEnd = prompt('Enter a new end date and time (YYYY-MM-DDTHH:MM):', new Date(task.end).toISOString().slice(0, 16));
          if (newEnd) {
            task.end = new Date(newEnd).getTime();
            localStorage.setItem('tasks', JSON.stringify(tasks));
            name.textContent = 'Name: ' + task.name;
            description.textContent = 'Description: ' + task.description;
            start.textContent = 'Start date and time: ' + new Date(task.start).toLocaleString();
            end.textContent = 'End date and time: ' + new Date(task.end).toLocaleString();
          }
        }
      }
    }
  });
  
  taskList.appendChild(li);
});

// add event listener to clear button
const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', function() {
  localStorage.removeItem('tasks');
  location.reload();
});



