// Importar bibliotecas necesarias de CDN (asegúrate de que estén en el HTML)
document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Control del menú móvil
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
            // Animación de aparición
            navLinks.style.animation = 'slideIn 0.3s ease forwards';
        } else {
            // Animación de desaparición
            navLinks.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 300);
        }
    });

    // Navbar transparente al inicio y sólido al scroll
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    }

    window.addEventListener('scroll', updateNavbar);
    
    // Animaciones al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll(
            '.program-card, .feature, .news-card, .campus-gallery img'
        );
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    
    // Contador de estadísticas
    function animateNumbers() {
        const stats = document.querySelectorAll('.feature');
        
        stats.forEach(stat => {
            const countTo = parseInt(stat.getAttribute('data-count'));
            
            if (countTo) {
                let count = 0;
                const timer = setInterval(() => {
                    count++;
                    stat.querySelector('span').textContent = count;
                    
                    if (count === countTo) {
                        clearInterval(timer);
                    }
                }, 20);
            }
        });
    }

    // Carrusel de imágenes automático para la galería
    const galleryImages = document.querySelectorAll('.campus-gallery img');
    let currentImageIndex = 0;

    function rotateGalleryImages() {
        galleryImages.forEach(img => img.classList.remove('active'));
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        galleryImages[currentImageIndex].classList.add('active');
    }

    setInterval(rotateGalleryImages, 5000);

    // Búsqueda en tiempo real para el buscador de carreras
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const programCards = document.querySelectorAll('.program-card');
            
            programCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Lazy loading para imágenes
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Modal para login
    const loginBtn = document.querySelector('.login-btn');
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.close-modal');

    if (loginBtn && modal) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Animaciones CSS adicionales
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

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .animate {
            animation: fadeIn 0.5s ease-out forwards;
        }

        .campus-gallery img.active {
            transform: scale(1.05);
            transition: transform 0.5s ease;
        }
    `;
    document.head.appendChild(styleSheet);
});
