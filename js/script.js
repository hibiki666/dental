// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 300,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 5000,
  }
});

// ハンバーガーメニュー
jQuery('.drawer_icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer_icon_bars').toggleClass('is_active');
  jQuery('.drawer_contents').toggleClass('is_active');
  jQuery('.drawer_background').toggleClass('is_active');
  jQuery('.drawer_contents__title').toggleClass('is_active');
  jQuery('.header_logo').toggleClass('is_active');
  jQuery('.header').toggleClass('is_active');

  return false
});