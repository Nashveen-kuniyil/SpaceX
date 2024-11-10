

const btn = document.querySelector('.hamburger');
const overlay = document.querySelector('#overlay');
const menu = document.querySelector('#mobile-menu');
const counters = document.querySelectorAll('.counter');


// hamburg menu
btn.addEventListener('click', function() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    menu.classList.toggle('show-menu');
    document.body.classList.toggle('no-scroll');
});


