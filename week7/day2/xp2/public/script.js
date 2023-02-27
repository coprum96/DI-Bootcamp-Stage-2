fetch('/user')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#firstname').textContent = data.firstname;
        document.querySelector('#lastname').textContent = data.lastname;
        console.log(data);
    })
    .catch(error => console.error(error));
