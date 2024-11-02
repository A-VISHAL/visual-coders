document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value; // Get the username input
    const password = document.getElementById('password').value; // Get the password input
    const messageElement = document.getElementById('message'); // Get the message display element

    const validUsername = 'assymetric'; // Define valid username
    const validPassword = '12345'; // Define valid password

    // Check if the username and password are valid
    if (username === validUsername && password === validPassword) {
        messageElement.textContent = 'Login successful!'; // Display success message
        messageElement.style.color = 'green'; // Change message color to green
    } else {
        messageElement.textContent = 'Invalid username or password.'; // Display error message
        messageElement.style.color = 'red'; // Change message color to red
    }
});
