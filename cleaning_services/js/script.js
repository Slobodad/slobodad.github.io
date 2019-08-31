'use strict'
$(document).ready(function (){

    //Header fixed
    window.onscroll = function(){
        if ($(window).scrollTop()>50)
            $('body').addClass('header-collapse');
        else $('body').removeClass('header-collapse');
    };

    //Humburger active
    $('.header-mobile__menu ').click(function(){
        $(this).toggleClass('open');
    });

    //Mobile menu open / close
    $('.js-open-menu').on('click', function () {
        $('.header__nav').addClass('header__nav--active');
        $('body').css('overflow', 'hidden');
    })

    $('.header__scrolling').on('click', function () {
        $('.header__nav ').removeClass('header__nav--active');
        $('.header-mobile__menu ').removeClass('open');
        $('body').css('overflow', 'auto');
    })

    $('.header__nav ').on('click', function (e) {
        if(e.target.className === 'header__nav header__nav--active') {
            $('.header__nav ').removeClass('header__nav--active');
            $('.header-mobile__menu ').removeClass('open');
            $('body').css('overflow', 'auto');
        }
    })

    // Scroll to section
    $(".header__scrolling").on("click", function(event) {
        event.preventDefault();
        var hash = $(this).attr('href');
        $("html, body").animate({
            scrollTop: $(hash).offset().top-100
        },1000);
    });

    //Scroll up
    $(".scroll-up").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1200);
        return false;
    });

    $(document).on("scroll", window, function () {
        if ($(window).scrollTop()>200)
        {
            $(".scroll-up").show();
        }
        else
        {
            $(".scroll-up").hide();
        }
    });

    // Popup
    $('.js-open-popup').on('click', function () {
        $('.popup__wrapper ').addClass('popup__wrapper--active');
        $('body').css('overflow', 'hidden');
    })

    $('.js-close-popup').on('click', function () {
        $('.popup__wrapper ').removeClass('popup__wrapper--active');
        $('body').css('overflow', 'auto');
    })

    $('.popup__wrapper ').on('click', function (e) {
        if(e.target.className === 'popup__wrapper popup__wrapper--active') {
            $('.popup__wrapper ').removeClass('popup__wrapper--active');
            $('body').css('overflow', 'auto');
        }
    })

})