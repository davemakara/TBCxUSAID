const hamMenu = document.querySelector(".ham-menu");
const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay");
const body = document.body;

let lastScrollPosition = 0;

const burgerMenuToggle = () => {
  hamMenu.classList.toggle("active");
  burgerMenu.classList.toggle("menu-active");
  overlay.classList.toggle("active");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
};

const closeMenu = () => {
  overlay.classList.remove("active");
  hamMenu.classList.remove("active");
  burgerMenu.classList.remove("menu-active");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
};

const outSideClick = (e) => {
  if (e.currentTarget === e.target) closeMenu();
};

const handleHeader = (e) => {
  const currentScrollPosition = window.scrollY;
  const header = document.querySelector("header");
  if (currentScrollPosition < lastScrollPosition) {
    header.classList.add("show-header");
  } else {
    header.classList.remove("show-header");
  }

  if (currentScrollPosition === 0) header.classList.remove("show-header");

  lastScrollPosition = currentScrollPosition;
};

hamMenu.addEventListener("click", burgerMenuToggle);
overlay.addEventListener("click", outSideClick);
window.addEventListener("scroll", handleHeader);
