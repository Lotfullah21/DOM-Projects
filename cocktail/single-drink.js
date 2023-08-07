import fetchDrinks from "./utils/fetchDrinks.js";
import displayDrink from "./utils/displaySingleDrink.js";

const showDrink = async () => {
  const id = localStorage.getItem("drink");
  if (!id) {
    // if id does not exist go back to index.html
    window.location.replace("index.html");
  } else {
    const drink = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displayDrink(drink);
  }
};

window.addEventListener("DOMContentLoaded", showDrink);
