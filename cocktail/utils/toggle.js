import getElement from "./get-element.js";

const loading = getElement(".loading");

export const showLoading = () => {
  loading.classList.remove("hide-loading");
};
export const hideLoading = () => {
  loading.classList.add("hide-loading");
};
