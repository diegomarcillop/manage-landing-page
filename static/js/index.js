const menuIcon = document.querySelector('.hamburger-menu'); 
const navbar = document.querySelector('.nav_bar');
const menuMobile = document.querySelector('.container-nav');

menuIcon.addEventListener('click', () => {
    console.log(menuMobile);
    navbar.classList.toggle("change");
    navbar.classList.toggle("nav-togle");

}) 
