// ********************** SELECT ITEMS *******************************
const alert = document.querySelector(".alert");
const form = document.querySelector(".subjects-form");
const subjects = document.getElementById("subjects");
const subjectsContainer = document.querySelector(".subjects-container");
const list = document.querySelector(".subjects-list");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");

// ********************** edit options *******************************
let editElement;
let editFlag = false;
let editID = "";
// ********************** EVENT LISTENERS *******************************
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);
window.addEventListener("DOMContentLoaded", showItems);
// ********************** FUNCTIONS *******************************
function addItem(e) {
  e.preventDefault();
  console.log(subjects.value);
  const value = subjects.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createArticle(id, value);
    subjectsContainer.classList.add("show-container");
    // show alert
    showAlert("item added to the list", "success");
    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    showAlert("element edited", "success");
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    showAlert("add an item", "danger");
  }
  console.log(id, value);
}
// Display Alert
function showAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remover alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear list
function clearItems() {
  const items = document.querySelector(".subject-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  subjectsContainer.classList.remove("show-container");
  showAlert("Empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("subjects-list");
}

// delete item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    subjectsContainer.classList.remove("show-container");
  }
  showAlert("Item removed", "danger");
  removeFromLocalStorage(id);
}
// edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  subjects.value = editElement.innerHTML;
  console.log("subjecst value is", subjects.value);
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "Edit";
}

// set back to default.
function setBackToDefault() {
  subjects.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ********************** LOCAL STORAGE *******************************
function addToLocalStorage(id, value) {
  const subjects = { id: id, value: value };
  items = getLocalStorageItem();
  items.push(subjects);
  localStorage.setItem("subjects-list", JSON.stringify(items));
  const localSubjects = JSON.parse(localStorage.getItem("subjects-list"));
  console.log(localSubjects);
}
function removeFromLocalStorage(id) {
  let items = getLocalStorageItem();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  // after removing those items, set it to local storage.
  JSON.parse(localStorage.getItem("subjects-list"));
}
function editLocalStorage(id, value) {
  items = getLocalStorageItem();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    } else {
      return item;
    }
  });
  JSON.parse(localStorage.getItem("subjects-list"));
}

function getLocalStorageItem() {
  return localStorage.getItem("subjects-list")
    ? JSON.parse(localStorage.getItem("subjects-list"))
    : [];
}
// ********************** SETUP ITEMS *******************************
function showItems() {
  let items = getLocalStorageItem();
  if (items.length > 0) {
    items.forEach(function (item) {
      createArticle(item.id, item.value);
    });
    subjectsContainer.classList.add("show-container");
  }
}

function createArticle(id, value) {
  // create article
  element = document.createElement("article");
  // add class
  element.classList.add("subject-item");
  // create data-id attribute
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;

  //! important: del and edit btns to later use, as we are adding them dynamically we do not have access outside this function or through document.
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  // event listeners
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  // append child
  list.appendChild(element);
}
