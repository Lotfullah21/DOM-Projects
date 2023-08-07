import { hideLoading } from "./toggle.js";
import getElement from "./get-element.js";

const displayDrink = (data) => {
  console.log(data);

  hideLoading();
  const drink = data.drinks[0];
  const {
    idDrink: id,
    strDrinkThumb: image,
    strDrink: name,
    strInstructions: description,
  } = drink;
  const ingradients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
  ];
  const img = getElement(".drink-img");
  const drinkName = getElement(".drink-name");
  const drinInfo = getElement(".drink-description");
  const ingradList = getElement(".drink-ingradients");
  img.src = image;
  drinkName.textContent = name;
  drinInfo.textContent = description;
  document.title = drinkName;
  ingradList.innerHTML = ingradients
    .map((flavor) => {
      if (!flavor) {
        return;
      } else {
        return `<li><i class="far fa-check-square"></i>${flavor}</li>`;
      }
    })
    .join("");
  console.log("drink", description, ingradients);
};

export default displayDrink;
