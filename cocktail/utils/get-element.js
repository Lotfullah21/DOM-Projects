function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    return `${selector} does not exist`;
  }
}

export default getElement;
