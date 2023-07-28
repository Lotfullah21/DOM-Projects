const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
prevBtn.addEventListener("click", function () {
  counter--;
  moveImage();
});
nextBtn.addEventListener("click", function () {
  counter++;
  moveImage();
});

function moveImage() {
  //   if (counter === slides.length) {
  //     counter = 0;
  //   }
  //   if (counter < 0) {
  //     counter = slides.length - 1;
  //   }
  // going with buttons
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
