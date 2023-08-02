const items = [...document.querySelectorAll(".number")];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;
  // to stop the execution,we need to save the function into a variable so that later we can clear the interval.
  const increaseCount = setInterval(() => {
    initialValue = initialValue + increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 10);
};

items.forEach((x) => {
  updateCount(x);
});

console.log(Math.floor(10 / 1000));
console.log(Math.ceil(2000 / 1000));
