// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {

    // Efecto de animación al hacer scroll
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 }); // Hacer visible cuando el 50% de la sección esté visible

    // Observamos todas las secciones
    sections.forEach(section => {
        observer.observe(section);
    });

    // Efecto para el menú de navegación
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Cambiar color de los enlaces de navegación al hacer hover
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#00aaff';  // Cambiar el color al pasar el mouse
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';  // Restaurar el color original
        });
    });

    // Efecto para el botón de llamada a la acción
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', (event) => {
        // Este efecto puede ser utilizado para mostrar un mensaje o hacer otra acción.
        alert('¡Gracias por interesarte en nuestras novedades!');
    });

    // Opcional: Efecto de "scroll-to-top" al llegar al final de la página
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '?';
    scrollButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollButton);

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mostrar el botón solo cuando el usuario hace scroll hacia abajo
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
});
