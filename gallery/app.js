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
  this.modalName = getElement(".image-name");
  this.mainImage = getElement(".main-img");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");
  console.log(this.list);
  // bind function to gallery so that we can have access to the modal in openModal Prototype.
  // this.openModal = this.openModal.bind(this);
  // important to bind them back to the gallery
  this.closeModal = this.closeModal.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.prevImage = this.prevImage.bind(this);
  this.choosenImage = this.choosenImage.bind(this);
  this.container.addEventListener(
    "click",
    function (e) {
      if (e.target.classList.contains("img")) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (selectedImage, list) {
  this.setMainImage(selectedImage);
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src="${
        image.src
      }" alt="${image.alt}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}" />`;
    })
    .join("");
  this.modal.classList.add("open");
  this.closeBtn.addEventListener("click", this.closeModal);
  this.nextBtn.addEventListener("click", this.nextImage);
  this.prevBtn.addEventListener("click", this.prevImage);
  this.modalImages.addEventListener("click", this.choosenImage);
};

Gallery.prototype.setMainImage = function (selectedImage) {
  this.mainImage.src = selectedImage.src;
  this.modalName.textContent = selectedImage.alt;
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove("open");
  // remove all the event listeners once we close the modal
  this.closeBtn.removeEventListener("click", this.closeModal);
  this.nextBtn.removeEventListener("click", this.nextImage);
  this.prevBtn.removeEventListener("click", this.prevImage);
  this.modalImages.removeEventListener("click", this.choosenImage);
};
Gallery.prototype.nextImage = function () {
  const selectedImage = this.modalImages.querySelector(".selected");
  // choose the next image, or if we are at the end of the list, go for first image.
  const next =
    selectedImage.nextElementSibling || this.modalImages.firstElementChild;
  selectedImage.classList.remove("selected");
  next.classList.add("selected");
  this.setMainImage(next);
};
Gallery.prototype.prevImage = function () {
  const selectedImage = this.modalImages.querySelector(".selected");
  // choose the next image, or if we are at the end of the list, go for first image.
  const prev =
    selectedImage.previousElementSibling || this.modalImages.lastElementChild;
  selectedImage.classList.remove("selected");
  prev.classList.add("selected");
  this.setMainImage(prev);
};

Gallery.prototype.choosenImage = function (e) {
  if (e.target.classList.contains("modal-img")) {
    const selected = this.modalImages.querySelector(".selected");
    selected.classList.remove("selected");
    this.setMainImage(e.target);
    e.target.classList.add("selected");
  }
};
const artificialI = new Gallery(getElement(".AI"));
const python = new Gallery(getElement(".mix"));
