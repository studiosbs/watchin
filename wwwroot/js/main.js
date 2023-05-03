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
    var prevButton = document.querySelector('.handlePrev');
    prevButton.style.display = "none";
});

var row1Prev = document.querySelector('#row1-prev');

var swiper = new Swiper('#row1', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    /*spaceBetween: 4,*/
    slidesPerGroup: 5,

    on: {
        init: function () {
            row1Prev.style.display = "none";
        },
        slideChange: function () {
            row1Prev.style.display = "flex";
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.handleNext',
        prevEl: '.handlePrev',
    },
});

var row2Prev = document.querySelector('#row2-prev');

var swiper2 = new Swiper('#row2', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    /*spaceBetween: 4,*/
    slidesPerGroup: 5,

    on: {
        init: function () {
            row2Prev.style.display = "none";
        },
        slideChange: function () {
            row2Prev.style.display = "flex";
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.handleNext',
        prevEl: '.handlePrev',
    },
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