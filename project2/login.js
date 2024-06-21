function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    // You would typically make an AJAX request to the server here to authenticate the user
    // For simplicity, we're just showing an alert
    alert("Login with Username: " + username + " and Password: " + password);
}
function redirectTo(page) {
    window.location.href = page;
}