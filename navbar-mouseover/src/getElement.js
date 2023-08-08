function get(selector) {
  const element = document.querySelector(selector);

  if (element) {
    return element;
  } else {
    console.log("something went wrong", { selector });
  }
}

export default get;
