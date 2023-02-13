(function ($)
  { "use strict"

/* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

})(jQuery);

$(document).ready(function () {
  $('#trending').slick({
    accessibility: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    prevArrow: $('#trending-prev'),
    nextArrow: $('#trending-next'),
  });
  $('#popular').slick({
    accessibility: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    prevArrow: $('#popular-prev'),
    nextArrow: $('#popular-next'),
  });
  $('#documentary').slick({
    accessibility: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    prevArrow: $('#documentary-prev'),
    nextArrow: $('#documentary-next'),
  });
  $('#forkids').slick({
    accessibility: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    prevArrow: $('#forkinds-prev'),
    nextArrow: $('#forkinds-next'),
  });
  $('related').slick({
    accessibility: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    prevArrow: $('#related-prev'),
    nextArrow: $('#related-next'),
  });
});