const slider = document.querySelector('.carousel-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('dragging'); // Desactivamos el "snap"
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('dragging');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('dragging'); // Reactivamos el "snap" para que encaje al soltar
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    // Bajamos el multiplicador a 1.5 para que no sea tan veloz y se sienta natural
    const walk = (x - startX) * 1.5; 
    slider.scrollLeft = scrollLeft - walk;
});

const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-menu');
const navLinks = document.querySelectorAll('.nav-links li a');

// Función para abrir/cerrar
const toggleNav = () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
}

// Abrir con el burger
burger.addEventListener('click', toggleNav);

// Cerrar con la X
closeBtn.addEventListener('click', toggleNav);

// Cerrar al tocar cualquier link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});

// --- CERRAR AL TOCAR FUERA DEL WRAP ---
document.addEventListener('click', (event) => {
    const isClickInsideMenu = nav.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);

    // Si el menú está abierto y el clic NO fue en el menú ni en el burger, cerramos
    if (nav.classList.contains('nav-active') && !isClickInsideMenu && !isClickOnBurger) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    }
});