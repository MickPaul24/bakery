const menu = document.getElementById('menu');
const menuLinks = document.getElementById('menuLinks');

menuLinks.addEventListener('click', () => {
menuLinks.classList.toggle('active');
menu.classList.toggle('active');
});