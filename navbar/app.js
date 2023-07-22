const toggleBtn = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");
//
//
//

toggleBtn.addEventListener("click", function () {
  if (navLinks.classList.contains("show-links")) {
    navLinks.classList.remove("show-links");
  } else navLinks.classList.add("show-links");
  console.log(navLinks.classList);
  // shorter way
  //   navLinks.classList.toggle("show-links");
});
