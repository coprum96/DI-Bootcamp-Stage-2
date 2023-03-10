// Handle registration form submission
$('#register-form').submit(function(event) {
	event.preventDefault();
	$.ajax({
		url: '/register',
		method: 'POST',
		data: $(this).serialize(),
		success: function(response) {
			alert(response);
		},
		error: function(xhr, status, error) {
			alert('Registration failed: ' + xhr.responseText);
		}
	});
});

// Handle login form submission
$('#login-form').submit(function(event) {
	event.preventDefault();
	$.ajax({
		url: '/login',
		method: 'POST',
		data: $(this).serialize(),
		success: function(response) {
			alert(response);
		},
		error: function(xhr, status, error) {
			alert('Login failed: ' + xhr.responseText);
		}
	});
});
