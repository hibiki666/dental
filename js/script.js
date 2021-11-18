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
  jQuery('.footer_fixd').toggleClass('is_active');

  return false
});

// スムーススクロール
jQuery(function() {
  var appear = false;
  var pagetop = $('.to_top');
  $(window).scroll(function () {
    if (200 < jQuery(this).scrollTop()) {
      jQuery('.to_top').addClass('is_show')
      pagetop.fadeIn(1000);
    } else {
      jQuery('.to_top').removeClass('is_show')
      pagetop.fadeOut(1000);
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});


// is_activeをつける
jQuery('.header_nav .header_list .header_item li a .header_image svg ').on('click', function() {
  jQuery('.header_nav .header_item .header_image svg li a').removeClass('is_active');
  jQuery(this).addClass('is_active')
});