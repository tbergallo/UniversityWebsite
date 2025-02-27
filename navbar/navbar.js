document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar-container');

    navbarContainer.innerHTML = `
        <nav class="navbar">
            <div class="logo">
               <img id="logoUniversidad" src="../assets/udesa_blanco.png" alt="logo de la universidad">
            </div>
            <ul class="nav-links">
                <li><a href="../main/index.html">Home</a></li>
                <li><a href="../carreras/carreras.html">Carreras</a></li>
                <li><a href="#">Inscripciones</a></li>
                <li><a href="../login/login.html" class="login-btn">Login</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    `;

    // Elementos de la barra de navegación (ahora dentro del contenedor)
    const navbar = document.querySelector('.navbar');
    const logo = document.getElementById('logoUniversidad');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Control del menú móvil
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');

        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
            navLinks.style.animation = 'slideIn 0.3s ease forwards';
        } else {
            navLinks.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 300);
        }
    });

    // Navbar transparente al inicio y sólido al scroll + cambio de logo
    function updateNavbar() {
        const logo = document.getElementById('logoUniversidad'); // Obtener el elemento de la imagen
        if (window.scrollY > 0) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            logo.src = '../assets/udesa_color.png'; // Cambiar la imagen al logo de color cuando scrollY <= 50

        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
            logo.src = '../assets/udesa_blanco.png'; // Cambiar la imagen al logo de color cuando scrollY <= 50
        }
    }

    window.addEventListener('scroll', updateNavbar);

    // ... Resto del código (animaciones, etc.), si lo hay ...

});