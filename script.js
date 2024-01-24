const hamMenu = document.querySelector(".ham-menu");
const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  overlay.classList.toggle("hidden");
});
