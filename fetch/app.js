const btn = document.querySelector(".btn");
const url = "./api/colleges.json";

btn.addEventListener("click", () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showNames(data);
    })
    .catch((err) => console.log(err));
});

const showNames = (colleges) => {
  const displayData = colleges
    .map((college) => {
      const { name, location } = college;
      return `<h5>${name} is located in ${location}</h5>`;
    })
    .join(" ");
  const ele = document.createElement("article");
  ele.innerHTML = displayData;
  document.body.appendChild(ele);
  console.log(displayData);
};

// fetch(url)
//   .then((respon) => {
//     return respon.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
