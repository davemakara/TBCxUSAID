const hamMenu = document.querySelector(".ham-menu");
const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay");
const body = document.body;

const cardContainer = document.getElementById("cardsContainer");

const burgerMenuToggle = () => {
  hamMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  overlay.classList.toggle("hidden");

  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
};

hamMenu.addEventListener("click", burgerMenuToggle);

overlay.addEventListener("click", burgerMenuToggle);

const cards = [
  {
    title: "iOS Development",
    description: "რეგისტრაცია დასრულებულია",
    image: "./assets/image/cards/iOSDevelopment.webp",
    id: "c1",
  },
  {
    title: "React",
    description: "რეგისტრაცია დასრულებულია",
    image: "./assets/image/cards/react.webp",
    id: "c2",
  },
  {
    title: "Intro to Python",
    description: "რეგისტრაცია დასრულებულია",
    image: "./assets/image/cards/python.webp",
    id: "c3",
  },
  {
    title: "Advanced Python",
    description: "რეგისტრაცია დასრულებულია",
    image: "./assets/image/cards/advancedPython.webp",
    id: "c4",
  },
  {
    title: "Advanced Cybersecurity Course",
    description: "რეგისტრაცია დასრულებულია",
    image: "./assets/image/cards/cyberSecurity.webp",
    id: "c5",
  },
  {
    title: "ToT - Training of Trainers",
    description: "რეგისტრაცია დასრულებულია",
    image: "./assets/image/cards/training.webp",
    id: "c6",
  },
  {
    title: "Blockchain",
    description: "რეგისტრაცია დასრულებულია",
    image: "./assets/image/cards/blockchain.webp",
    id: "c7",
  },
  {
    title: "DevOps",
    description: "რეგისტრაცია დასრულებულია",
    image: "./assets/image/cards/devOps.webp",
    id: "c8",
  },
  {
    title: "Information Security Governance",
    description: "რეგისტრაცია დასრულებულია",
    image: "./assets/image/cards/infoGovernance.webp",
    id: "c9",
  },
];

cards.forEach((cardData) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `<img src=${cardData.image} alt=${cardData.title} /> <p class="card-title">${cardData.title}</p><p class="card-description">${cardData.description}</p> <p class="card-details"><i class="fa-solid fa-arrow-right"></i> კურსის დეტალები</p>`;

  cardContainer.appendChild(card);
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.opacity = "0";
    slides[i].classList.add("hidden-items");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // slides[slideIndex - 1].style.opacity = "1";
  slides[slideIndex - 1].classList.remove("hidden-items");
  dots[slideIndex - 1].className += " active";
}
