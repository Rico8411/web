document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Add input validation styles
    function validateInput(input) {
        if (input.value.length > 0) {
            input.style.borderColor = '#dbdbdb';
        } else {
            input.style.borderColor = '#ed4956';
        }
    }

    usernameInput.addEventListener('input', () => validateInput(usernameInput));
    passwordInput.addEventListener('input', () => validateInput(passwordInput));

    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate username
        if (usernameInput.value.trim() === '') {
            usernameInput.style.borderColor = '#ed4956';
            isValid = false;
        }
        
        // Validate password
        if (passwordInput.value.trim() === '') {
            passwordInput.style.borderColor = '#ed4956';
            isValid = false;
        }
        
        if (isValid) {
            // Here you would typically send the data to your server
            console.log('Form submitted:', {
                username: usernameInput.value,
                password: passwordInput.value
            });
            
            // Show loading state
            const loginButton = document.querySelector('.login-button');
            loginButton.textContent = 'Logging in...';
            loginButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Login functionality would be implemented here');
                loginButton.textContent = 'Log In';
                loginButton.disabled = false;
            }, 1500);
        }
    });

    // Add password visibility toggle
    const togglePassword = document.createElement('button');
    togglePassword.type = 'button';
    togglePassword.className = 'toggle-password';
    togglePassword.innerHTML = 'Show';
    togglePassword.style.cssText = `
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: #00376b;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
    `;

    const passwordContainer = passwordInput.parentElement;
    passwordContainer.style.position = 'relative';
    passwordContainer.appendChild(togglePassword);

    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? 'Show' : 'Hide';
    });
}); 