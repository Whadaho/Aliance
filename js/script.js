const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
  logo.href.baseVal = "img/sprites.svg#logo";
};
const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
  logo.href.baseVal = "img/sprites.svg#logo-light";
};

const openMenu = (event) => {
  menu.classList.add("is-open");
  mMToggle.classList.add("close-menu");
  document.body.style.overflow = "hidden";
  lightModeOn();
};
const closeMenu = (event) => {
  menu.classList.remove("is-open");
  mMToggle.classList.remove("close-menu");

  document.body.style.overflow = "";
  lightModeOff();
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff();
});

mMToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});

const swiper = new Swiper(".swiper", {
  speed: 400,
  slidesPerView: 1,
  autoHeight: true,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 5,
    },
  },
});
