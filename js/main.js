(function ($)
  { "use strict"

/* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 200) {
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
    infinite: true,
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
    prevArrow: $('#forkids-prev'),
    nextArrow: $('#forkids-next'),
  });
  $('related').slick({
    accessibility: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    prevArrow: $('#related-prev'),
    nextArrow: $('#related-next'),
  });
  $('season_1').slick({
    accessibility: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    prevArrow: $('#season_1-prev'),
    nextArrow: $('#season_1-next'),
  });
});

$('#row1').slick({
  accessibility: true,
  arrows: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: $('.handlePrev'),
  nextArrow: $('.handleNext'),
  variableWidth: true
});