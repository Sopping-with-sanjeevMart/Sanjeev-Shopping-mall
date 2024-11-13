/* START ADD CLASS active-link IN CURRENT BAGE */
const links = document.querySelectorAll(".nav-link");
const current = location.href;

links.forEach((link) => {
  if (link.href === current) {
    link.classList.add("active-link");
  }
});
/* END ADD CLASS active-link IN CURRENT BAGE */

/* START SHOW MENU */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });

  /* Validate if constant exists */
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
}
/* END SHOW MENU */

/* START SWIPER CATEGORIES */
var swiperCategories = new Swiper(".categories-container", {
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});
/* END SWIPER CATEGORIES */

/* START SWIPER PRODUCTS */
var swiperProducts = new Swiper(".new-container", {
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
/* End SWIPER PRODUCTS */

/* START CHANGE COLOR HEART AND SHOW sweetalert2 LIBRARY */
function changeHeartColor(event) {
  const heart = event.target;
  event.preventDefault();

  if (heart.style.color === "red") {
    heart.style.color = "#898989";
  } else {
    heart.style.color = "red";
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Add To Wishlist Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
/* END CHANGE COLOR HEART AND SHOW sweetalert2 LIBRARY */

/* START CHANGE COLOR CART AND SHOW sweetalert2 LIBRARY */
function changeCart(event) {
  event.preventDefault();
  const heart = event.target;

  if (heart.style.color === "red") {
    heart.style.color = "#898989";
  } else {
    heart.style.color = "#9e9e9eb3";
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Add To Cart Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
/* END CHANGE COLOR CART AND SHOW sweetalert2 LIBRARY */
