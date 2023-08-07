import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";
const showDrinks = async (url) => {
  // fetch drinks'
  const data = await fetchDrinks(url);
  // show drinks
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
    console.log(section);
  } else {
    console.log("does not exist.");
  }
};
export default showDrinks;
