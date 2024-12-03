let index = 0;

// FUNCION CARRUSEL
function moveCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const totalItems = carousel.children.length;
    index = (index + direction + totalItems) % totalItems;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// FUNCION MENÚ
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('hidden'); 
    });
});
