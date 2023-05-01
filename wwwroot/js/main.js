(function ($) {
    "use strict"

    /* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $(".header-sticky").removeClass("sticky-bar");
            $('#back-top').fadeOut(500);
        } else {
            $(".header-sticky").addClass("sticky-bar");
            $('#back-top').fadeIn(500);
        }
    });

})(jQuery);

$(document).ready(function () {
    var swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: false,
        slidesPerView: 5,
        spaceBetween: 5,
        slidesPerGroup: 5,
        // Navigation arrows
        navigation: {
            nextEl: '.handleNext',
            prevEl: '.handlePrev',
        },
    });
    /*$('#trending').slick({
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
    $('#row1').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: $('.handlePrev'),
        nextArrow: $('.handleNext'),
        variableWidth: false,
        onInit: function () {
            console.log('working');
        },
        afterChange: function (currentSlide) {
            console.log(currentSlide);
            $('.slider').slick('slickSetOption', 'infinite', true);
            console.log('loop: on');
        },
    });*/
});

// when the button is clicked, load the content and show the modal
$('#previewModal').on('show.bs.modal', function(event) {
    console.log('opened');
    // get the film details page URL and title
    var filmDetailsUrl = '/movie-details';
    var filmDetailsTitle = 'watchin';
    var filmTitle = 'Rise of Empires: Ottoman';  // replace with actual film title from page content
    
    function change(){
      document.title = filmTitle + ' - ' + filmDetailsTitle;
      console.log('Title changed to: ' + document.title);
      history.pushState({}, '', filmDetailsUrl);
    }

    // load the content of the film details page into the modal
    $(this).find('.modal-content').load(filmDetailsUrl + '.html', change());
  });
  
  // when the modal is hidden, restore the page title and URL
  $('#previewModal').on('hidden.bs.modal', function(event) {
    document.title = 'Home - wanchin'; // replace with actual home page title
    console.log('Title changed to: ' + document.title);
    history.pushState({}, '', '/');
  });