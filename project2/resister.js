function register() {
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;
    var email = document.getElementById("register-email").value;

    // You would typically make an AJAX request to the server here to register the user
    // For simplicity, we're just showing an alert
    alert("Register with Username: " + username + ", Password: " + password + ", and Email: " + email);
}
function redirectTo(page) {
    window.location.href = page;
}

