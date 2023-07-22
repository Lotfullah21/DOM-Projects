// initial count
let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.classList);
    const btnClass = e.currentTarget.classList;
    if (btnClass.contains("increase")) {
      count++;
    } else if (btnClass.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    // already we have done the calculation,lets change the color
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
