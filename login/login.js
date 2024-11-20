document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Simple form validation
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Por favor, ingrese un correo electrónico válido');
            return;
        }

        // Password length validation
        if (passwordInput.value.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        // Simulated login process
        console.log('Intentando iniciar sesión');
        simulateLogin(emailInput.value, passwordInput.value);
    });

    // Social login buttons
    const googleBtn = document.querySelector('.social-btn.google');
    const facebookBtn = document.querySelector('.social-btn.facebook');

    googleBtn.addEventListener('click', function() {
        alert('Inicio de sesión con Google próximamente');
    });

    facebookBtn.addEventListener('click', function() {
        alert('Inicio de sesión con Facebook próximamente');
    });

    // Forgot password link
    const forgotPasswordLink = document.querySelector('.forgot-password');
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Función de recuperación de contraseña próximamente');
    });

    // Register link
    const registerLink = document.querySelector('.register-link');
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Registro de nueva cuenta próximamente');
    });

    // Simulated login function
    function simulateLogin(email, password) {
        // In a real application, this would be an AJAX call to a backend
        setTimeout(() => {
            // Simulated successful login
            if (email === 'usuario@sanandres.edu' && password === 'password123') {
                alert('Inicio de sesión exitoso');
                // Redirect to dashboard or home page
                // window.location.href = '/dashboard.html';
            } else {
                alert('Credenciales incorrectas');
            }
        }, 1000);
    }
});
