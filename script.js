document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    //set username and password to something. 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        window.location.href = 'files.html';
    } else {
        alert('Please enter both username and password.');
    }
});
