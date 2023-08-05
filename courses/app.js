function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    console.log(`${element} does not exist`);
  }
}

const courseCenter = getElement(".courses-center");

const url = "https://course-api.com/javascript-store-products";

const fetchData = async () => {
  courseCenter.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    courseCenter.innerHTML = `<p class="error-message">there was an error</p>`;
  }
};

const showProducts = (x) => {
  const products = x
    .map((product) => {
      const { id } = product;
      const { name, price, company } = product.fields;
      const { url } = product.fields.image[0];
      const priceCent = price / 100;
      // console.log(url, name, company);
      return `<a class="single-course" href="./public/home.html?id=${id}&name=me">
            <img
              src="${url}"
              alt="machine learning"
              class="single-course-img"
            />
            <footer>
              <h5 class="course-title">${company}</h5>
              <p class="duration">${priceCent}</p>
            </footer>
          </a>`;
    })
    .join("");
  courseCenter.innerHTML = `<div class="course-container">
${products}
        </div>`;
};

const start = async () => {
  const data = await fetchData();
  showProducts(data);
};

start();
