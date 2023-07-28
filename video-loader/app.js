const videoContainer = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switch-button");
const preLoader = document.querySelector(".preloader");
switchBtn.addEventListener("click", function () {
  if (switchBtn.classList.contains("slide")) {
    switchBtn.classList.remove("slide");
    videoContainer.play();
  } else {
    switchBtn.classList.add("slide");
    videoContainer.pause();
  }
});

window.addEventListener("load", function () {
  preLoader.classList.add("hide-prloader");
});
