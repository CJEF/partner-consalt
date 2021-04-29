const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  spaceBetween: 10,

  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<svg class="swiper-pagination-bullet" width="17" height="20" viewbox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 14.6163V5.38373L8.5 1.14843L16 5.38373V14.6163L8.5 18.8516L1 14.6163Z" stroke="#FA830B" stroke-width="2"/></svg>';
    },
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

const anchors = document.querySelectorAll('a[href*="#about"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
