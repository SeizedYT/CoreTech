
var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");
var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");

function validateEmail(email) {

    const validDomains = /@(gmail\.com|outlook\.com)$/;
    return validDomains.test(email);
}

function login() {
    const emailField = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");


    const email = emailField.value.trim();

    if (!validateEmail(email)) {
  
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please enter a valid email address (@gmail.com or @outlook.com).";
    } else {

        errorMessage.style.display = "none";
        alert("Login successful!");
  
        window.location.href = "index.html";
    }
}

function login() {
    console.log("Función login ejecutada"); 
    loginForm.style.left = "4px";
    registerForm.style.right = "-520px";
    loginBtn.className += " white-btn";
    registerBtn.className = "btn";
    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;

}

function register() {
    console.log("Función register ejecutada"); 
    loginForm.style.left = "-510px";
    registerForm.style.right = "5px";
    loginBtn.className = "btn";
    registerBtn.className += " white-btn";
    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;

}

function myMenuFunction() {
    var navMenu = document.getElementById("navMenu");
    if (navMenu.className === "nav-menu") {
        navMenu.className += " responsive";
    } else {
        navMenu.className = "nav-menu";
    }
}

document.querySelector(".login-container .submit").addEventListener("click", function () {
    console.log("Redirigiendo desde el botón Sign In");
    window.location.href = "index.html";
});

document.querySelector(".register-container .submit").addEventListener("click", function () {
    console.log("Redirigiendo desde el botón Register");
    window.location.href = "index.html";
});
