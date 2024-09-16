// // Initialize Swiper
// const swiper = new Swiper(".swiper-container", {
//   loop: true, // Infinite loop mode
//   slidesPerView: 3, // Show 3 logos at a time
//   spaceBetween: 30, // Adjust space between slides if necessary

//   // Use your custom buttons as navigation controls
//   navigation: {
//     nextEl: ".swiper-button-next", // Your custom next button
//     prevEl: ".swiper-button-prev", // Your custom previous button
//   },

//   // Optional: Disable Swiper's default navigation buttons behavior
//   allowSlidePrev: true,
//   allowSlideNext: true,
// });

/*
const swiper = new Swiper(".partner__logo__container", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".btn__right__swiper",
    prevEl: ".btn__left__swiper",
  },
});

*/

const swiper = new Swiper(".partner__logo__container", {
  slidesPerView: 3, // Default view
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".btn__right__swiper",
    prevEl: ".btn__left__swiper",
  },
  breakpoints: {
    860: {
      slidesPerView: 3, // 2 logos for screens <= 760px
    },
    550: {
      slidesPerView: 2, // 1 logo for screens <= 550px
    },
    0: {
      slidesPerView: 1,
    },
  },
});
