// Utility functions
function $(id) { return document.getElementById(id); }
function show(el) { el.style.display = ''; }
function hide(el) { el.style.display = 'none'; }
function hideAllErrors() { document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none'); }
function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

// Elements
const loginForm = $('login-form');
const registerForm = $('register-form');
const formTitle = $('form-title');
const generalMessage = $('general-message');
const qrCodeSection = $('qr-code-section');
const loginButton = $('login-button');
const loginSpinner = $('login-spinner');
const registerButton = $('register-button');
const registerSpinner = $('register-spinner');

// Toggle forms
function showLoginForm() {
    hideAllErrors();
    show(loginForm);
    hide(registerForm);
    show(qrCodeSection);
    formTitle.textContent = 'Welcome Back!';
    generalMessage.style.display = 'none';
    loginSpinner.style.display = 'none';
    registerSpinner.style.display = 'none';
    loginButton.disabled = false;
    registerButton.disabled = false;
}
function showRegisterForm() {
    hideAllErrors();
    hide(loginForm);
    show(registerForm);
    hide(qrCodeSection);
    formTitle.textContent = 'Create an Account';
    generalMessage.style.display = 'none';
    loginSpinner.style.display = 'none';
    registerSpinner.style.display = 'none';
    loginButton.disabled = false;
    registerButton.disabled = false;
}

// Keyboard accessibility for toggle links
$('show-register').addEventListener('click', showRegisterForm);
$('show-register').addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') showRegisterForm(); });
$('show-login').addEventListener('click', showLoginForm);
$('show-login').addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') showLoginForm(); });

// Message display
function displayMessage(message, type = 'success') {
    generalMessage.textContent = message;
    generalMessage.className = type === 'success' ? 'success-message' : 'error-message';
    generalMessage.style.display = 'block';
    loginSpinner.style.display = 'none';
    registerSpinner.style.display = 'none';
    loginButton.disabled = false;
    registerButton.disabled = false;
    setTimeout(() => { generalMessage.style.display = 'none'; generalMessage.textContent = ''; }, 3000);
}

// Login logic
loginButton.addEventListener('click', () => {
    hideAllErrors();
    generalMessage.style.display = 'none';
    const identifier = $('login-identifier').value.trim();
    const password = $('login-password').value.trim();
    let isValid = true;
    if (!identifier) {
$('login-identifier-error').textContent = 'Email or phone number cannot be empty.';
show($('login-identifier-error'));
isValid = false;
    } else if (!isValidEmail(identifier) && !/^\d+$/.test(identifier)) {
$('login-identifier-error').textContent = 'Please enter a valid email or phone number.';
show($('login-identifier-error'));
isValid = false;
    }
    if (!password) {
$('login-password-error').textContent = 'Password cannot be empty.';
show($('login-password-error'));
isValid = false;
    }
    if (isValid) {
loginSpinner.style.display = 'inline-block';
loginButton.disabled = true;
setTimeout(() => {
    displayMessage('Login successful! Welcome to Discord. (Simulated)', 'success');
    loginSpinner.style.display = 'none';
    loginButton.disabled = false;
}, 1500);
    } else {
displayMessage('Please correct the errors in the form.', 'error');
    }
});

// Register logic
registerButton.addEventListener('click', () => {
    hideAllErrors();
    generalMessage.style.display = 'none';
    const email = $('register-email').value.trim();
    const username = $('register-username').value.trim();
    const password = $('register-password').value.trim();
    const confirmPassword = $('register-confirm-password').value.trim();
    let isValid = true;
    if (!email || !isValidEmail(email)) {
$('register-email-error').textContent = 'Please enter a valid email address.';
show($('register-email-error'));
isValid = false;
    }
    if (username.length < 3) {
$('register-username-error').textContent = 'Username must be at least 3 characters long.';
show($('register-username-error'));
isValid = false;
    }
    if (password.length < 6) {
$('register-password-error').textContent = 'Password must be at least 6 characters long.';
show($('register-password-error'));
isValid = false;
    }
    if (password !== confirmPassword) {
$('register-confirm-password-error').textContent = 'Passwords do not match.';
show($('register-confirm-password-error'));
isValid = false;
    }
    if (isValid) {
registerSpinner.style.display = 'inline-block';
registerButton.disabled = true;
setTimeout(() => {
    displayMessage('Registration successful! You can now log in. (Simulated)', 'success');
    setTimeout(showLoginForm, 2000);
    registerSpinner.style.display = 'none';
    registerButton.disabled = false;
}, 1500);
    } else {
displayMessage('Please correct the errors in the form.', 'error');
    }
});

// Show login form on load
document.addEventListener('DOMContentLoaded', showLoginForm);
