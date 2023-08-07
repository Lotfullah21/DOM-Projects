import { showLoading } from "./toggle.js";
const fetchDrinks = async (url) => {
  // while we are fetching the data, show loading.
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`${error}`);
  }
};
export default fetchDrinks;
