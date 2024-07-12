// function login() {
//     const employeeId = document.getElementById('employee-id').value;
//     const password = document.getElementById('password').value;

//     // Add your login logic here. This could involve an API call to your server.
//     // Example using fetch:
//     fetch('https://your-backend-url/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ employeeId, password }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             // Handle successful login, e.g., redirect to a dashboard
//             window.location.href = 'dashboard.html';
//         } else {
//             // Handle login failure, e.g., show an error message
//             alert('Invalid login credentials.');
//         }
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         alert('An error occurred during login. Please try again later.');
//     });
// }
