const get = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  else {
    console.log(element, "does not exist");
  }
};

export default get;
