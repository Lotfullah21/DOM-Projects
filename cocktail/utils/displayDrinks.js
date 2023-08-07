import getElement from "./get-element.js";
import showDrinks from "./giveDrinks.js";
import { hideLoading } from "./toggle.js";
// here we directly destructuring the object and saying that okay, out of th prameter which might be apssed laters, get the drinks object from it.
const displayDrinks = ({ drinks }) => {
  const sectionCenter = getElement(".section-center");
  const errorTitle = getElement(".title");
  console.log(drinks);
  if (!drinks) {
    hideLoading();
    errorTitle.textContent = "No Match found for your search";
    sectionCenter.innerHTML = null;
    console.log(drinks, "does not exist");
    // return from this function
    return;
  }
  // if loading was successfull

  const drinksArray = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb } = drink;
      return `      
        <a href="./home.html">
          <article class="cocktail" data-id="${id}">
            <img src=${strDrinkThumb} alt="cocktail-image" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");
  hideLoading();
  errorTitle.textContent = "";
  sectionCenter.innerHTML = drinksArray;
  return sectionCenter;
};

export default displayDrinks;
