// ******************** SET DATE ************************
const date = new Date().getFullYear();
const footerDate = document.getElementById("date");

footerDate.innerHTML = date;

// ******************** CLOSE NAVBAR ************************
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const socialIcons = document.querySelector(".social-icons");
const navContainer = document.querySelector(".navlinks-container");

// we dynamically finding the height of the links and adding them while toggline
navToggle.addEventListener("click", function () {
  //   navContainer.classList.toggle("show-nav-container");
  const navContainerHeight = navContainer.getBoundingClientRect().height;
  const linksHeight = navLinks.getBoundingClientRect().height;
  const sociaIconsHeight = socialIcons.getBoundingClientRect().height;
  const totalHeight = linksHeight + sociaIconsHeight;
  console.log(`${totalHeight}px`);
  console.log(navContainerHeight);
  if (navContainerHeight === 0) {
    navContainer.style.height = `${totalHeight}px`;
  } else {
    navContainer.style.height = 0;
  }
});

// ******************** FIXED NAVBAR ************************

const navbar = document.getElementById("navbar");
const topFixedLink = document.querySelector(".top-fixed-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }

  if (scrollHeight > 500) {
    topFixedLink.classList.add("show-fixed-top-link");
  } else {
    topFixedLink.classList.remove("show-fixed-top-link");
  }
});

// ******************** Scroll ************************

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    //   navigate to specific href
    console.log(e.currentTarget);
    //   slice gives as a new string,here starting from 0th index of each href.
    const id = e.currentTarget.getAttribute("href").slice(1);
    const ele = document.getElementById(id);
    //   ********* get the height *************
    const navHeight = navbar.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-navbar");
    //   how much distance from top begining in pixels.
    let topPosition = ele.offsetTop - navHeight;
    //   hide the links once we click on them
    navContainer.style.height = 0;
    if (!fixedNav) {
      topPosition = topPosition - navHeight;
    }
    //   it  means we have opened the links in smaller screen
    if (navHeight > 82) {
      topPosition = topPosition + navContainerHeight;
    }
    //  where to scroll.
    window.scrollTo({ left: 0, top: topPosition });
    console.log("href", id);
    console.log("element", ele);
    console.log("top-position", topPosition);
    console.log(navHeight, navContainerHeight, fixedNav);
  });
});
