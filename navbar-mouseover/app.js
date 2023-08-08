import sublinks from "./src/data.js";
import get from "./src/getElement.js";

// Navbar
const nav = get(".nav");
const navCenter = get(".nav-center");
const toggleBtn = get(".toggle-btn");
const linkBtns = [...document.querySelectorAll(".btn-link")];
// Hero
const hero = document.querySelector(".hero");
// Sidebar
const sidebarWraper = get(".sidebar-wraper");
const sidebar = get(".sidebar");
const closeBtn = get(".close-btn");
const sideBarLinks = get(".sidebar-links");
const subMenu = get(".submenu");
toggleBtn.addEventListener("click", () => {
  sidebarWraper.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebarWraper.classList.remove("show");
});

console.table(sublinks);

// set the sublinks to the sidebar

const sublinksData = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article class="sidebarlinks"><h4>${page}</h4>
      <div class="sidebar-sublinks">
       ${links
         .map((link) => {
           return `<a href="${link.url}">
         <i class="${link.icon}"></i>${link.label}
           </a>`;
         })
         .join("")}
       
       </div>
      </article>`;
  })
  .join("");

sideBarLinks.innerHTML = sublinksData;

// setting submenu while hovering

linkBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    const text = e.currentTarget.textContent;
    // get the dimension of the each btn and add the submenu to them
    const bounding = e.currentTarget.getBoundingClientRect();
    const bottom = bounding.bottom - 2;
    const center = (bounding.right + bounding.left) / 2;
    console.log(bounding, bottom, center, bounding.right);
    console.log(e.currentTarget);
    subMenu.classList.add("show");
    subMenu.style.left = `${center}px`;
    subMenu.style.top = `${bottom}px`;
  });
});
