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


// costomer add

//      document.getElementById('addButton').addEventListener('click', function() {
//     const itemInput = document.getElementById('itemInput');
//     const itemName = itemInput.value.trim(); // Get input value and remove extra spaces
    
//     if (itemName) { // Check if input is not empty
//         const itemList = document.getElementById('itemList');
//         const newItem = document.createElement('li'); // Create a new list item element
//         newItem.textContent = itemName; // Set the text content to the input value
//         itemList.appendChild(newItem); // Add the new item to the list
        
//         itemInput.value = ''; // Clear the input field
//     } else {
//         alert('Please enter an item name!'); // Alert user if input is empty
//     }
// });


