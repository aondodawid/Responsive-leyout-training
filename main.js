const hamburger = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", (e) =>
  nav.classList.toggle("nav--visible")
);
