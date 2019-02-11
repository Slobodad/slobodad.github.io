'use strict';

$(document).ready(function(){

  // Scroll
  $("a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          1000,
          function() {
            window.location.hash = hash;
          }
        );
      }
  });
  //End scroll 

  // Nav__btn

  var navBtn = $('.nav__btn--js');
  var navBtnNone = $('.nav__btn--js')
  var navList = $('.nav__list');
  var navClose = $('.nav__link');

  navBtn.on('click', function() {
    navList.addClass('nav__list--is-active');
    navBtnNone.addClass('nav__btn--is-active')
  });

  navClose.on('click', function() {
    navList.removeClass('nav__list--is-active');
    navBtnNone.removeClass('nav__btn--is-active')
});

});
