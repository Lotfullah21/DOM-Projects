import get from "./get-element.js";

const img = get(".user-image");
const userName = get(".user-title");
const userValue = get(".user-value");
const btn = get(".random-user");
const btns = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  img.src = person.image;
  userName.textContent = `My Name is`;
  userValue.textContent = person.name;
  btns.forEach((btn) => btn.classList.remove("active"));
  btn.classList.add("active");
  btns[0].classList.add("active");
  btns.map((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      userName.textContent = `my ${label} is`;
      userValue.textContent = person[label];
      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
};

export default displayUser;
