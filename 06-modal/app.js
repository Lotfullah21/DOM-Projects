const closeBtn = document.querySelector(".close-btn");
const modalBtn = document.querySelector(".modal-btn");
const modalOverLay = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", function () {
  modalOverLay.classList.add("show-overlay");
});

closeBtn.addEventListener("click", function () {
  modalOverLay.classList.remove("show-overlay");
});
