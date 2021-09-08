// Login Function
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username == "") {
        alert("Enter username.");
        return false;
    }
    if (password == "") {
        alert("Enter password.");
        return false;
    }
    return true;
}