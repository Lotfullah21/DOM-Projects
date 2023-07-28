/*
target: shows us which excat target(element) we are clicking exaclty



*/

const tabBtns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e.target.dataset.id);
  id = e.target.dataset.id;
  if (id) {
    // remove active from all btns
    tabBtns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const ele = document.getElementById(id);
    ele.classList.add("active");
    // const h = document.getElementById("vision");
    // const m = document.getElementById("mission");
    // h.classList.add("active");
    // m.classList.add("active");
  }
});
