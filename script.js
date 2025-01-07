// Esperar a que el DOM est� completamente cargado
document.addEventListener("DOMContentLoaded", function() {

    // Efecto de animaci�n al hacer scroll
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 }); // Hacer visible cuando el 50% de la secci�n est� visible

    // Observamos todas las secciones
    sections.forEach(section => {
        observer.observe(section);
    });

    // Efecto para el men� de navegaci�n
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Cambiar color de los enlaces de navegaci�n al hacer hover
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#00aaff';  // Cambiar el color al pasar el mouse
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';  // Restaurar el color original
        });
    });

    // Efecto para el bot�n de llamada a la acci�n
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', (event) => {
        // Este efecto puede ser utilizado para mostrar un mensaje o hacer otra acci�n.
        alert('�Gracias por interesarte en nuestras novedades!');
    });

    // Opcional: Efecto de "scroll-to-top" al llegar al final de la p�gina
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '?';
    scrollButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollButton);

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mostrar el bot�n solo cuando el usuario hace scroll hacia abajo
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
});
