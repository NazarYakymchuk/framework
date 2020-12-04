const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-hamburger');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

const hamburger_01 = document.getElementById('hamburge_01');
const nav_01 = document.getElementById('nav-hamburger_01');

hamburger_01.addEventListener('click', () => {
    nav_01.classList.toggle('active');
    hamburger_01.classList.toggle('active');
});


new Swiper('.sl_slider', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});