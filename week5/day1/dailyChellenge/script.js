const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const lastname = document.querySelector('#lastname').value;
    const jsonString = JSON.stringify({ name, lastname });
    const p = document.createElement('p');
    p.textContent = jsonString;
    document.body.appendChild(p);
    console.log(jsonString);
});

