import people from "./src/data.js";
import get from "./src/getElement.js";

const img = get(".person-img");
const desc = get(".description");
const nextBtn = get(".next-btn");
const prevBtn = get(".prev-btn");
const container = get(".slider-container");
const person = people
  .map((item, index) => {
    const { img, name, job, text } = item;
    console.table(item);
    let position = "next";
    if (index === 0) {
      position = "active";
    }
    if (index === people.length - 1) {
      position = "last";
    }

    return `
         <article class="slide ${position}">
          <img
            src=${img}
            alt="person-image"
            class="person-img"
          />
          <h4 class="name">${name}</h4>
          <p class="job">${job}</p>
          <p class="description">
          ${text}
          </p>
          <div class="quote-icon">
            <div class="fas fa-quote-right"></div>
          </div>
        </article>
  `;
  })
  .join("");
container.innerHTML = person;

const startSliding = (type) => {
  const active = get(".active");
  const last = get(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");

    next = last.previousElementSibling;

    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }

  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

nextBtn.addEventListener("click", () => {
  startSliding();
});
prevBtn.addEventListener("click", () => {
  startSliding("prev");
});
