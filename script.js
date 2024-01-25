const hamMenu = document.querySelector(".ham-menu");
const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay");

const burgerMenuToggle = () => {
  hamMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  overlay.classList.toggle("hidden");
};

hamMenu.addEventListener("click", burgerMenuToggle);

overlay.addEventListener("click", burgerMenuToggle);
