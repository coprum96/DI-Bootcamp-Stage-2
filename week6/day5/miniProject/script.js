// get references to form and submit button
const form = document.querySelector('form');
const submitBtn = document.querySelector('a');

// add event listener to submit button
submitBtn.addEventListener('click', function(e) {
  e.preventDefault(); // prevent form from submitting normally
  
  // get form values
  const name = document.querySelector('#name').value;
  const description = document.querySelector('#description').value;
  const start = new Date(document.querySelector('#start').value).getTime();
  const end = new Date(document.querySelector('#end').value).getTime();
  const done = document.querySelector('#done').value
  // create task object
  const task = {
    name,
    description,
    start,
    end,
    done
  };
  
  // save task to local storage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  // redirect to tasks page
  window.location.href = 'tasks.html';
});
