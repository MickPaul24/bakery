const Menu = document.querySelector("menu");
const MenuLinks = document.querySelector("links");

Menu.addEventListener("click", () => {
Menu.classList.toggle("active");
MenuLinks.classList.toggle("active");

});