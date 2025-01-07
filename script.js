// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // Animaciones de Scroll para secciones
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 }); // Hacer visible cuando el 50% de la sección esté visible

    sections.forEach(section => {
        observer.observe(section);
    });

    // Efecto para el menú de navegación (cuando se hace scroll)
    const nav = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Efecto para enlaces de navegación (hover)
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#00aaff';  // Cambiar color al hacer hover
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';  // Restaurar color original
        });
    });

    // Mostrar alerta al hacer clic en el botón CTA
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        alert('¡Gracias por interesarte en nuestras novedades!');
    });

    // Agregar botón "Scroll to Top" cuando se hace scroll
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollButton);

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mostrar/ocultar el botón "Scroll to Top" en función del scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Funcionalidad para animación de imágenes de la galería al hacer hover
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    // Efecto de "fade in" para las imágenes y textos de la galería
    const fadeElements = document.querySelectorAll('.gallery img, .news-card');
    fadeElements.forEach(element => {
        element.classList.add('fade');
    });
});

