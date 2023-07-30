function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw new Error(`make sure ${selector} exists`);
  }
}

function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll(".img")];
  this.modal = getElement(".modal");
  this.modalContent = getElement(".modal-content");
  this.mainImage = getElement(".main-img");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevtBtn = getElement(".prev-btn");
  console.log(this.list);
  // bind function to gallery so that we can have access to the modal in OpenModal Prototype.
  //   this.OpenModal = this.OpenModal.bind(this);
  this.container.addEventListener(
    "click",
    function (e) {
      console.log(this);
      this.OpenModal;
    }.bind(this)
  );
}

Gallery.prototype.OpenModal = function () {
  console.log(this);
  console.log("open modal");
  this.modal.classList.add("open");
};

const artificialI = new Gallery(getElement(".AI"));
const python = new Gallery(getElement(".mix"));
