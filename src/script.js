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

// VALIDACIÓN FORMULARIO
let form = document.getElementById("form");
let email = document.getElementById("email");
let errorEmail = document.getElementById("errorEmail");
let password = document.getElementById("password");
let errorPass = document.getElementById("errorPass");
let confirmPassword = document.getElementById("confirmPassword");
let errorConfirmPass = document.getElementById("errorConfirmPass");
let nombre = document.getElementById("nombre");
let errorNombre = document.getElementById("errorNombre");
let apellidos = document.getElementById("apellidos");
let errorApellidos = document.getElementById("errorApellidos");

const validarInputs = (event) => {
  let elemento = event.target;
  if (elemento.validity.valid) {
    elemento.nextElementSibling.textContent = "";
  }
};

const validarFormulario = (event) => {
  let valido = true; 
  event.preventDefault();

  if (nombre.validity.valueMissing) {
    errorNombre.textContent = "*Debes de introducir un nombre.";
    valido = false;
  } else if (nombre.validity.tooShort) {
    errorNombre.textContent = "*El nombre debe tener al menos 3 caracteres.";
    valido = false;
  } else {
    errorNombre.textContent = "";
  }

  if (apellidos.validity.valueMissing) {
    errorApellidos.textContent = "*Debes de introducir tus apellidos.";
    valido = false;
  } else {
    errorApellidos.textContent = "";
  }

  if (email.validity.valueMissing) {
    errorEmail.textContent = "*Debes de introducir un correo electrónico.";
    valido = false;
  } else if (email.validity.typeMismatch) {
    errorEmail.textContent = "*Formato de correo incorrecto.";
    valido = false;
  } else {
    errorEmail.textContent = "";
  }

  if (password.validity.valueMissing) {
    errorPass.textContent = "*Debes de introducir una contraseña.";
    valido = false;
  } else if (password.validity.tooShort) {
    errorPass.textContent = "*La contraseña debe tener al menos 6 caracteres.";
    valido = false;
  } else {
    errorPass.textContent = "";
  }

  if (confirmPassword.validity.valueMissing) {
    errorConfirmPass.textContent = "*Debes confirmar la contraseña.";
    valido = false;
  } else if (confirmPassword.value !== password.value) {
    errorConfirmPass.textContent = "*Las contraseñas no coinciden.";
    valido = false;
  } else {
    errorConfirmPass.textContent = "";
  }

  if (valido) {
    form.submit();
  }
};

// MODAL
let modal = document.getElementById("modal");
let closeModal = document.getElementById("closeModal");

const cerrarModal = () =>{  
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}


// LISTENER
closeModal.addEventListener("click",cerrarModal);
form.addEventListener("submit", validarFormulario);
form.addEventListener("input", validarInputs);

