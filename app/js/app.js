const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  spaceBetween: 10,
  paginationClickable: true,

  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
