let burgerIcon = document.querySelector('.main-menu__burger');
let menu = document.querySelector('.main-menu__menu');
let body = document.querySelector('body');
burgerIcon.addEventListener('click', function(){
    burgerIcon.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})