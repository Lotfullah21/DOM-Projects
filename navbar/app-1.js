const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", function (e) {
  if (navLinks.classList.contains("show-links")) {
    navLinks.classList.remove("show-links");
  } else {
    navLinks.classList.add("show-links");
  }
});
