function validateForm() {
    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("lastNameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Remove error class
    document.getElementById("userName").classList.remove("error");
    document.getElementById("lastName").classList.remove("error");
    document.getElementById("userEmail").classList.remove("error");
    document.getElementById("userPassword").classList.remove("error");

    let isValid = true; // Form validity flag

    // Get input values
    const firstName = document.getElementById("userName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;

    // Validate each field
    if (!firstName) {
        document.getElementById("nameError").textContent = "Please enter your first name";
        document.getElementById("userName").classList.add("error");
        isValid = false;
    }
    if (!lastName) {
        document.getElementById("lastNameError").textContent = "Please enter your last name";
        document.getElementById("lastName").classList.add("error");
        isValid = false;
    }
    if (!email) {
        document.getElementById("emailError").textContent = "Please enter your email";
        document.getElementById("userEmail").classList.add("error");
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Simple email validation
        document.getElementById("emailError").textContent = "Please enter a valid email";
        document.getElementById("userEmail").classList.add("error");
        isValid = false;
    }
    if (!password) {
        document.getElementById("passwordError").textContent = "Please enter a password";
        document.getElementById("userPassword").classList.add("error");
        isValid = false;
    } else if (password.length < 6) { // Password length validation
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long";
        document.getElementById("userPassword").classList.add("error");
        isValid = false;
    }

    if (isValid) {
        // Redirect to the login page if the form is valid
        window.location.href = "login.html"; // Update with your actual path
    }

    return false; // Prevent form submission
}
function validateForm() {
    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("lastNameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Remove error class and reset styles
    resetFieldStyles();

    let isValid = true; // Form validity flag

    // Get input values
    const firstName = document.getElementById("userName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;

    // Validate each field
    if (!firstName) {
        showError("nameError", "Please enter your first name", "userName");
        isValid = false;
    }
    if (!lastName) {
        showError("lastNameError", "Please enter your last name", "lastName");
        isValid = false;
    }
    if (!email) {
        showError("emailError", "Please enter your email", "userEmail");
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Simple email validation
        showError("emailError", "Please enter a valid email", "userEmail");
        isValid = false;
    }
    if (!password) {
        showError("passwordError", "Please enter a password", "userPassword");
        isValid = false;
    } else if (password.length < 6) { // Password length validation
        showError("passwordError", "Password must be at least 6 characters long", "userPassword");
        isValid = false;
    }

    if (isValid) {
        // Redirect to the login page if the form is valid
        window.location.href = "index.html"; // Update with your actual path
    }

    return false; // Prevent form submission
}

function showError(errorId, message, inputId) {
    document.getElementById(errorId).textContent = message;
    document.getElementById(inputId).style.borderColor = "red "; // Apply red border
}

function resetFieldStyles() {
    const inputFields = [
        "userName", 
        "lastName", 
        "userEmail", 
        "userPassword"
    ];
    inputFields.forEach(id => {
        document.getElementById(id).style.borderColor = ""; // Reset border color
    });
}
