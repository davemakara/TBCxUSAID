const cardContainer = document.getElementById("cardsContainer");

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

const svgArrow = `<svg preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666" xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16" width="17" data-type="color" role="presentation" aria-hidden="true"><defs><style>#comp-lnoncoa62__12a0b52d-d2f4-498f-8668-ef4342a659a0 svg [data-color="1"] {fill: #00AEEF;}</style></defs>
<g>
    <path fill="#ffffff" d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z" data-color="1"></path>
</g>
</svg>`;

cards.forEach((cardData) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `<div class="card-content"><img src=${cardData.image} alt=${cardData.title} /> <p class="card-title">${cardData.title}</p><p class="card-description">${cardData.description}</p></div> <p class="card-details">${svgArrow} <span>კურსის დეტალები</span></p>`;

  cardContainer.appendChild(card);
});
