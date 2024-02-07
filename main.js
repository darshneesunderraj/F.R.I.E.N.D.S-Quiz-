// Login Function
function saveLoginDetails(event) {
    event.preventDefault();

    // Get values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the user is registered
    fetch('users.txt')
        .then(response => response.text())
        .then(data => {
            const users = JSON.parse(data);
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                // Save login details to localStorage
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);

                // Redirect to the next page
                window.location.href = "index.html";
            } else {
                alert("Incorrect username or password. Please try again.");
            }
        });
}

// Register Function
function saveUserDetails(username, password) {
    // Save user details to a text file
    fetch('users.txt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{ username, password }])
    });
}