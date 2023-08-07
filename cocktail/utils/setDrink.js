const setDrink = (section) => {
  console.log("secttion", section);
  section.addEventListener("click", function (e) {
    // e.preventDefault();
    console.log("current target", e.target);
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("drink", id);
    console.log("Id", id);
  });
};

export default setDrink;
