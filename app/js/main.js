!(function ($) {
  "use strict";

  $(".slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: `<img src="assets/images/slider-arrow.svg" class="arrows next-arrow"></img>`,
    prevArrow: `<img src="assets/images/slider-arrow.svg" class="arrows prev-arrow"></img>`,
  });

  $(".nav-toogler").click(function (event) {
    $(".nav-toogler, .nav-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
})(jQuery);
