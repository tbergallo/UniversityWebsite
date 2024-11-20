document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchInput = document.querySelector('.search-input');
    const areaFilter = document.querySelector('.area-filter');
    const durationFilter = document.querySelector('.duration-filter');

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

    // Navbar transparente y sólido al scroll
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

    // Base de datos de carreras (ejemplo para demostración)
    const carreras = [
        {
            id: 1,
            nombre: 'Ingeniería en Sistemas',
            descripcion: 'Forma parte de la revolución tecnológica. Aprende a desarrollar soluciones innovadoras que transforman el mundo digital.',
            icono: 'laptop-code',
            duracion: 5,
            area: 'tecnologia',
            modalidad: 'Presencial'
        },
        {
            id: 2,
            nombre: 'Medicina',
            descripcion: 'Desarrolla tu vocación de servicio con un programa integral que te forma como un profesional de la salud comprometido.',
            icono: 'notes-medical',
            duracion: 6,
            area: 'salud',
            modalidad: 'Presencial'
        },
        {
            id: 3,
            nombre: 'Administración de Empresas',
            descripcion: 'Aprende a liderar organizaciones con visión estratégica y habilidades gerenciales de vanguardia.',
            icono: 'chart-line',
            duracion: 4,
            area: 'negocios',
            modalidad: 'Presencial/Virtual'
        }
    ];

    // Función para crear cards de carreras
    function crearCardCarrera(carrera) {
        const careerCard = document.createElement('div');
        careerCard.classList.add('career-card');
        careerCard.setAttribute('data-area', carrera.area);
        careerCard.setAttribute('data-duracion', carrera.duracion);

        careerCard.innerHTML = `
            <div class="career-icon">
                <i class="fas fa-${carrera.icono}"></i>
            </div>
            <div class="career-info">
                <h3>${carrera.nombre}</h3>
                <p>${carrera.descripcion}</p>
                <div class="career-details">
                    <span class="detail"><i class="fas fa-clock"></i> ${carrera.duracion} años</span>
                    <span class="detail"><i class="fas fa-graduation-cap"></i> Título Oficial</span>
                    <span class="detail"><i class="fas fa-building"></i> ${carrera.modalidad}</span>
                </div>
                <a href="#" class="more-info-btn">Más Información</a>
            </div>
        `;

        return careerCard;
    }

    // Renderizar carreras iniciales
    const careersGrid = document.querySelector('.careers-grid');
    carreras.forEach(carrera => {
        careersGrid.appendChild(crearCardCarrera(carrera));
    });

    // Función de búsqueda de carreras
    function buscarCarreras() {
        const termino = searchInput.value.toLowerCase();
        const areaSeleccionada = areaFilter.value;
        const duracionSeleccionada = durationFilter.value;

        const cardsCarrera = document.querySelectorAll('.career-card');

        cardsCarrera.forEach(card => {
            const nombreCarrera = card.querySelector('h3').textContent.toLowerCase();
            const descripcionCarrera = card.querySelector('p').textContent.toLowerCase();
            const areaCarrera = card.getAttribute('data-area');
            const duracionCarrera = card.getAttribute('data-duracion');

            const coincideBusqueda = nombreCarrera.includes(termino) || descripcionCarrera.includes(termino);
            const coincideArea = areaSeleccionada === '' || areaCarrera === areaSeleccionada;
            const coincideDuracion = duracionSeleccionada === '' || duracionCarrera === duracionSeleccionada;

            if (coincideBusqueda && coincideArea && coincideDuracion) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event listeners para búsqueda y filtros
    searchInput.addEventListener('input', buscarCarreras);
    areaFilter.addEventListener('change', buscarCarreras);
    durationFilter.addEventListener('change', buscarCarreras);

    // Modal para más información de carrera
    function setupCareerInfoModal() {
        const moreInfoBtns = document.querySelectorAll('.more-info-btn');
        const modal = document.createElement('div');
        modal.classList.add('career-modal');
        
        moreInfoBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const carrera = this.closest('.career-card');
                const nombreCarrera = carrera.querySelector('h3').textContent;
                
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-modal">&times;</span>
                        <h2>${nombreCarrera}</h2>
                        <p>Información detallada de la carrera próximamente...</p>
                        <button class="contact-btn">Contactar</button>
                    </div>
                `;
                
                document.body.appendChild(modal);
                modal.style.display = 'block';
                
                modal.querySelector('.close-modal').addEventListener('click', () => {
                    modal.style.display = 'none';
                });
            });
        });
    }

    setupCareerInfoModal();

    // Animaciones CSS
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

        .career-modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.5);
        }

        .modal-content {
            background-color: white;
            margin: 10% auto;
            padding: 20px;
            border-radius: 10px;
            width: 70%;
            max-width: 500px;
            position: relative;
        }

        .close-modal {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }
    `;
    document.head.appendChild(styleSheet);
});
