import fetchUser from "./utils/fetch-user.js";
import get from "./utils/get-element.js";
import displayUser from "./utils/display-user.js";

const btn = get(".random-user");

const showUser = async () => {
  const data = await fetchUser();
  displayUser(data);
};

btn.addEventListener("click", showUser);
document.addEventListener("DOMContentLoaded", showUser);
