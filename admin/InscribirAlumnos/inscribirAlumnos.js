// inscribirAlumnos.js

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-inscripcion');
    const modal = document.getElementById('modalVistaPrevia');
    const btnVistaPrevia = document.getElementById('btnVistaPrevia');
    const btnCompletar = document.getElementById('btnCompletar');
    const closeModal = document.querySelector('.close-modal');
    const carrerasSelect = document.getElementById('carrera');
    const contentWrapper = document.getElementById('content-wrapper');

    // Agregar opciones de carreras (esto debería venir de una base de datos o un archivo JSON idealmente)
    const carreras = ["Ingeniería en Sistemas", "Medicina", "Abogacía", "Administración de Empresas", "Psicología"];
    carreras.forEach(carrera => {
        const option = document.createElement('option');
        option.value = carrera;
        option.text = carrera;
        carrerasSelect.appendChild(option);
    });

    btnVistaPrevia.addEventListener('click', () => {
        contentWrapper.classList.add('modal-open');
        modal.classList.remove('closing');

        setTimeout(() => {
            modal.style.display = 'block';

            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const dni = document.getElementById('dni').value;
            const fechaNacimiento = document.getElementById('fechaNacimiento').value;
            const telefono = document.getElementById('telefono').value;
            const correo = document.getElementById('correo').value;
            const domicilio = document.getElementById('domicilio').value;
            const carrera = document.getElementById('carrera').value;
            const tituloSecundario = document.getElementById('tituloSecundario').value;
            const fotoDNI = document.getElementById('fotoDNI').value;



            document.getElementById('preview-nombre').textContent = nombre;
            document.getElementById('preview-apellido').textContent = apellido;
            document.getElementById('preview-dni').textContent = dni;
            document.getElementById('preview-fechaNacimiento').textContent = fechaNacimiento;
            document.getElementById('preview-telefono').textContent = telefono;
            document.getElementById('preview-correo').textContent = correo;
            document.getElementById('preview-domicilio').textContent = domicilio;
            document.getElementById('preview-carrera').textContent = carrera;
            document.getElementById('preview-tituloSecundario').textContent = tituloSecundario;
            document.getElementById('preview-fotoDNI').textContent = fotoDNI;



        }, 0);
    });

    closeModal.addEventListener('click', () => {
        contentWrapper.classList.remove('modal-open');
        modal.classList.add('closing');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            contentWrapper.classList.remove('modal-open');
            modal.classList.add('closing');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500);
        }
    });

    btnCompletar.addEventListener('click', () => {
        // Lógica para enviar el formulario (reemplaza la alerta con tu código)

        alert("Formulario enviado correctamente. (Esta es una simulación)");
        contentWrapper.classList.remove('modal-open');
        modal.style.display = 'none';
        formulario.reset();
    });
});