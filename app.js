// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Simple validation (Replace this with your actual authentication logic)
//     if (username === 'admin' && password === 'a123') {
//         // Redirect to another page after successful login
//         window.location.href = 'mainPage.html';
//     } else if(username === 'emp' && password === 'e123'){
//         window.location.href = 'mainPage.html';
//     }else {
//         alert('Invalid username or password');
//     }
    
// });


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (Replace this with your actual authentication logic)
    if (username.charAt(0) == "E" || password.charAt(0) == "e") {
        // Redirect to another page after successful login
        window.location.href = 'mainPage.html';
    } else if(username.charAt(0) == "M" || password.charAt(0) == "m"){
        window.location.href = 'mainPage.html';
    }else {
        alert('Invalid username or password');
    }
    
});


// function submit(){
//      username = username.value;
//      password = password.value;

//     if(username.charAt(0) == "E" || password.charAt(0) == "e"){

//         username.value = "";
//         password.value = "";
//         window.location.href = "mainPage.html";
//         // employeeShow.value = username;
//     }

//     if(username.charAt(0) == "M" || password.charAt(0) == "m"){

//         username.value = "";
//         password.value = "";
//         window.location.href = "mainPage.html";

//     }
// }




