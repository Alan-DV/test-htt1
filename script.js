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
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Abrir/Cerrar menú
    nav.classList.toggle('nav-active');
    
    // Animación de la hamburguesa (se convierte en X)
    burger.classList.toggle('toggle');
});

// Cerrar menú al hacer click en cualquier link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});