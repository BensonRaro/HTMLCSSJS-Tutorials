// navbar toggling
// FIX HERE : menu => .menu
const navMenu = document.querySelector(".menu");
// FIX HERE : menu-btn => .menu-btn
const navToggle = document.querySelector(".menu-btn");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// closing Menu when  navlink is clicked
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  // FIX HERE : menu => .menu
  const navMenu = document.querySelector(".menu");
  navMenu.classList.remove("active");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Sticky Navbar
var navbar = document.querySelector(".navbar");
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

// Changing color product
const pic = document.querySelector("#main-watch");
const cyan = document.querySelector(".cyan");
const purple = document.querySelector(".purple");
const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const green = document.querySelector(".green");
const red = document.querySelector(".red");

// missing colors function
const colors = document.querySelectorAll(".color");

// Array of all Watches
const info = [
  { src: "./images/cyan.png" },
  { src: "./images/purple.png" },
  { src: "./images/blue.png" },
  { src: "./images/pink.png" },
  { src: "./images/green.png" },
  { src: "./images/red.png" },
];

cyan.addEventListener("click", function () {
  pic.src = info[0].src;
});

purple.addEventListener("click", function () {
  pic.src = info[1].src;
});

blue.addEventListener("click", function () {
  pic.src = info[2].src;
});

pink.addEventListener("click", function () {
  pic.src = info[3].src;
});

green.addEventListener("click", function () {
  pic.src = info[4].src;
});

red.addEventListener("click", function () {
  pic.src = info[5].src;
});

function color() {
  colors.forEach((c) => c.classList.remove("active"));
  this.classList.add("active");
}

colors.forEach((c) => c.addEventListener("click", color));
