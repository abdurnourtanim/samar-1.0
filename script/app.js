// Mobile menu
const mobileBar = document.querySelector(".mobile__bar");
const mobileMenu = document.querySelector(".nav__items");
mobileBar.addEventListener("click", () => {
  mobileMenu.classList.toggle("nav__items__show");
});

// counter
$(".count__number").counterUp({
  delay: 10,
  time: 2000,
});

// sponsor slick slider
$(".slide__wrapper").slick({
  autoplay: true,
  slidesToShow: 6,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// disable all button click on reload page
const form = document.querySelector("form");
form.addEventListener("click", (e) => {
  e.preventDefault();
});

// Page scrolling times navbar fixed on top
const navbar = document.querySelector(".navbar");
const navbarFixed = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("navbar__sticky");
  } else {
    navbar.classList.remove("navbar__sticky");
  }
};
// window.addEventListener("scroll", navbarFixed);
