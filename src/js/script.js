// FUNCION CARRUSEL
let index = 0;
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

// MODAL
let modal = document.getElementById("modal");
let closeModal = document.getElementById("closeModal");

const cerrarModal = () =>{  
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

closeModal.addEventListener("click",cerrarModal);

