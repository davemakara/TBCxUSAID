const questionBtns = document.getElementsByClassName("question");
const questionBtnArr = Array.from(questionBtns);

const openAnswer = (e) => {
  const answerDiv = e.currentTarget.parentNode;
  const alreadyOpened = answerDiv.classList.contains("open-answer");

  questionBtnArr.forEach((el) => {
    el.parentNode.classList.remove("open-answer");
  });

  if (alreadyOpened) return answerDiv.classList.remove("open-answer");
  answerDiv.classList.add("open-answer");
};

questionBtnArr.forEach((btn) => btn.addEventListener("click", openAnswer));
