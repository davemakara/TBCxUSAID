const closeBtns = document.querySelectorAll(".closeBtn");
const btnArray = Array.from(closeBtns);
const termsBtn = document.querySelector(".terms-and-conditions");
const modal = document.querySelector(".terms-and-conditions-modal");

const openModal = () => {
  modal.classList.add("open-footer-modal");
};

termsBtn.addEventListener("click", openModal);

const closeModal = () => {
  modal.classList.remove("open-footer-modal");
};

const checkForOverlayClick = (e) => {
  if (e.currentTarget === e.target) closeModal();
};

modal.addEventListener("click", checkForOverlayClick);

btnArray.forEach((btn) => btn.addEventListener("click", closeModal));
