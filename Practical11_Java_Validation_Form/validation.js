document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const submitBtn = document.getElementById('submitBtn');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    function validateUsername() {
        if (username.value.length < 5) {
            usernameError.textContent = 'Username must be at least 5 characters long.';
            return false;
        } else {
            usernameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        const passwordValue = password.value;
        const hasUpperCase = /[A-Z]/.test(passwordValue);
        const hasLowerCase = /[a-z]/.test(passwordValue);
        const hasSpecialChar = /[!@#$%^&*]/.test(passwordValue);
        const hasMinLength = passwordValue.length >= 6;

        if (!hasUpperCase || !hasLowerCase || !hasSpecialChar || !hasMinLength) {
            passwordError.textContent = 'Password must be at least 6 characters long and include uppercase, lowercase, and a special character.';
            return false;
        } else {
            passwordError.textContent = '';
            return true;
        }
    }

    function validateConfirmPassword() {
        if (confirmPassword.value !== password.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            return false;
        } else {
            confirmPasswordError.textContent = '';
            return true;
        }
    }

    function validateForm() {
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    username.addEventListener('input', validateForm);
    email.addEventListener('input', validateForm);
    password.addEventListener('input', validateForm);
    confirmPassword.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission for demo purposes
        if (!submitBtn.disabled) {
            alert('Form successfully submitted!');
        }
    });
});
