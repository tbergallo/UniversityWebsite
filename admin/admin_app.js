document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');

        if (navLinks.classList.contains('active')) {
            navLinks.style.animation = 'slideIn 0.3s ease forwards';
        } else {
            navLinks.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 300);
        }
    });


    // Animaciones CSS adicionales (añadidas directamente en el JS para evitar un archivo extra)
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-20px); }
        }
        .nav-links.active{
            display: flex;
            flex-direction: column;
        }
    `;
    document.head.appendChild(styleSheet);
});