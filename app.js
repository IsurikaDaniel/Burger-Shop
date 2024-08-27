document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (Replace this with your actual authentication logic)
    if (username === 'admin' && password === 'password123') {
        // Redirect to another page after successful login
        window.location.href = 'mainPage.html';
    } else {
        alert('Invalid username or password');
    }
});
