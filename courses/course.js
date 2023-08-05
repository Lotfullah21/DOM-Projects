function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    console.log(`${element} does not exist`);
  }
}

const url = "https://course-api.com/javascript-store-single-product";

const backHomeBtn = getElement(".back-home");
const cartBtn = getElement(".cart");
const courseDOM = getElement(".course");

// function to get the data (fetch data fom url)

const fetchData = async () => {
  try {
    courseDOM.innerHTML = `<h3 class="course-loading">Loading...</h3>`;
    console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log("id", id);
    const courses = await fetch(`${url}?id=${id}`);
    const data = await courses.json();
    console.log("data", data);
    return data;
  } catch (error) {
    courseDOM.innerHTML = `<h4>${error}</h4>`;
  }
};
// to render the data in the page
const showCourses = (courses) => {
  const { company, colors, name, price, description } = courses.fields;
  const { url } = courses.fields.image[0];
  document.title = name;
  const colorsChanged = colors
    .map((color) => {
      return `<span class="course-color" style="background-color: ${color}"></span>`;
    })
    .join("");
  console.log("url", url);
  courseDOM.innerHTML = `   <div class="course-wraper">
        <img src="${url}" alt="" />
        <div class="course-info">
          <h3 class="course-title">${name}</h3>
          <h5 class="college-name">${company}</h5>
          <span class="duration">$ ${price / 100}</span>
          <div class="colors">
     ${colorsChanged}
          </div>
          <p class="course-info">
      ${description}
          </p>
          <button class="btn cart">add to cart</button>
        </div>
      </div>`;
};

// to encapsulate the above two functions into one place

const start = async () => {
  const data = await fetchData();
  showCourses(data);
};

start();
