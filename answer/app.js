const btns = document.querySelectorAll(".question-button");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget.parentElement.parentElement);
    question = e.currentTarget.parentElement.parentElement;
    if (question.classList.contains("show-text")) {
      question.classList.remove("show-text");
    } else {
      question.classList.add("show-text");
    }
  });
});
