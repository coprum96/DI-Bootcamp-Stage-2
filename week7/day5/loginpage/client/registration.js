// Get the register form and inputs
const registerForm = document.querySelector('#register-form');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// Add event listener to the register form
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get the input values
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Send a POST request to the server
  const response = await fetch('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, email, username, password })
  });

  // Handle the response
  if (response.ok) {
    alert('Registration successful!');
  } else {
    const errorText = await response.text();
    alert(`Registration failed: ${errorText}`);
  }
});