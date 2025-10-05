// Contenido de script.js
document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("mainHeader");
    let lastScrollY = 0;

    // Función que se ejecuta al hacer scroll
    window.addEventListener("scroll", function() {
        const currentScrollY = window.scrollY;

        // Si el usuario se desplaza hacia abajo (scrolling down)
        // Y no está cerca de la parte superior
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Oculta la cabecera, añade la clase CSS 'header-hidden'
            header.classList.add('header-hidden');
        } 
        // Si el usuario se desplaza hacia arriba (scrolling up)
        else {
            // Muestra la cabecera, elimina la clase CSS 'header-hidden'
            header.classList.remove('header-hidden');
        }

        // Actualiza la última posición conocida de scroll
        lastScrollY = currentScrollY;
    });
});