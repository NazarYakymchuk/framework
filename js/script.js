const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-hamburger');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});