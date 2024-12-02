let index = 0;

function moveCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const totalItems = carousel.children.length;
    
    // Cambiar a 4 elementos
    index = (index + direction + totalItems) % totalItems;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}