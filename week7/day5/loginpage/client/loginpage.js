const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(response => {
      if (response.ok) {
        // Login successful
        console.log('Login successful!');
      } else {
        // Login failed
        console.error('Login failed:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

  