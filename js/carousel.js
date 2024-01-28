const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");
const carouselContainer = document.querySelector(".carousel-container");

let slideIndex = 1;
let interval;

const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("shown-items");
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].classList.add("shown-items");
  dots[slideIndex - 1].className += " active";
};

// Next/previous controls
const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

// Thumbnail image controls
const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

showSlides(slideIndex);

const startAutoScroll = () => {
  interval = null;
  interval = setInterval(() => {
    showSlides(slideIndex);
    slideIndex++;
  }, 3000);
};

const stopAutoScroll = () => {
  clearInterval(interval);
};

prevArrow.addEventListener("click", () => plusSlides(-1));
nextArrow.addEventListener("click", () => plusSlides(1));

carouselContainer.addEventListener("mouseleave", startAutoScroll);
carouselContainer.addEventListener("mouseover", stopAutoScroll);
