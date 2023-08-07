import showDrinks from "./giveDrinks.js";
import getElement from "./get-element.js";

const BaseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = getElement(".cocktail-form");
// get the elemnet which has the name="drink" attribute
const input = getElement('[name="drink"]');
// every time we press a key, our callback function is going to fire.
form.addEventListener("keyup", (e) => {
  // to prevent default submission
  e.preventDefault();
  // console.log(input.value);
  const value = input.value;
  if (!value) {
    return;
  } else {
    showDrinks(`${BaseUrl}${value}`);
  }
});
