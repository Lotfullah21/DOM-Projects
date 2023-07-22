const colors = ["red", "green", "yellow", "gold", "#fff", "blue", "pink"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.innerHTML = colors[randomNumber];
});

function getRandomNumber() {
  number = Math.floor(Math.random() * colors.length);
  console.log(number);
  return number;
}

// // getRandomNumber();
// console.log(Math.random());
