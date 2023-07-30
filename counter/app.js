function Counter(element, value) {
  this.counter = element;
  this.value = value;
  // keep note of we are selecting from container not the document.
  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  this.DOMValue = element.querySelector(".value");
  this.DOMValue.textContent = this.value;
  // if we do not use bind and this, beacuse 'this' is used inside a callback, and this will point to the btn not the counter.
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
}

Counter.prototype.increase = function () {
  console.log(this);
  this.value++;
  this.DOMValue.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.DOMValue.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.DOMValue.textContent = this.value;
};
// put this one after adding the prototypes
const firstCounter = new Counter(getElement(".first-counter"), 10);
const secondCounter = new Counter(getElement(".second-counter"), 99);

function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw new Error("check for selector.");
  }
}
