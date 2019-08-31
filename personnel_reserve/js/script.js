'use strict'

$(document).ready(function(){

    //Header fixed
    window.onscroll = function(){
        if ($(window).scrollTop()>50)
            $('body').addClass('collapse_header');
        else $('body').removeClass('collapse_header');
    };

    //Humburger active
    $('.header-mobile__menu ').click(function(){
        $(this).toggleClass('open');
    });

    // Mobile menu open / close
    $('.header-menu__wrapper').on('click', function () {
        $('.header-hidden').toggleClass('header-hidden--active');
        $('body').toggleClass('body-active');
    });

    $('.header-hidden').on('click', function (e) {
        if (e.target.className === 'col-xl-6 header-hidden header-hidden--active') {
            $('.header-hidden').removeClass('header-hidden--active');
            $('body').removeClass('body-active');
            $('.header-mobile__menu ').removeClass('open');
        }
    });

    $('.header-nav__close').on('click', function () {
        $('.header-hidden').removeClass('header-hidden--active');
        $('body').removeClass('body-active');
        $('.header-mobile__menu ').removeClass('open');
    });

    // Append icon in menu
    if($(window).width()<1199) {
        $('.menu-item-has-children').append('<i class="icon-next js-open-accordione"></i>');
    }


    $(document).on('click', '.menu-item-has-children > .js-open-accordione', function() {
        $('.dropdown_menu').slideUp();

        $(this).toggleClass('js-open-accordione--active');
        if(!$(this).closest('.menu-item-has-children').hasClass('open_drop')) {
            $('.menu-item-has-children').removeClass('open_drop');
            $(this).closest('.menu-item-has-children').addClass('open_drop').find('.dropdown_menu').slideDown();
        } else {
            $('.menu-item-has-children').removeClass('open_drop');
        }
    });

    // Slider events
    if($('.events-slider').length > 0) {
        $('.events-slider').slick({
            infinite: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: $('.events-slider__right'),
            prevArrow: $('.events-slider__left'),
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
            ]
        });
    }

    // Slider news
    if($('.news-slider').length > 0) {
        $('.news-slider').slick({
            infinite: true,
            arrows: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: $('.news-slider__right'),
            prevArrow: $('.news-slider__left'),
        });
    }

    //Scroll up
    $(".scroll-up").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1200);
        return false;
    });

    if ($('.scroll-up').length > 0) {
        $(document).on("scroll", window, function () {
            if ($(window).scrollTop() > 200) {
                $(".scroll-up").show();
            } else {
                $(".scroll-up").hide();
            }

        });
    }



    //Slider on Page Event
    if($('.page-event__slider').length > 0) {
        $('.page-event__slider').slick({
            centerMode: true,
            centerPadding: '600px',
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: $('.page-event__right'),
            prevArrow: $('.page-event__left'),
            responsive: [
                {
                    breakpoint: 1821,
                    settings: {
                        centerMode: true,
                        centerPadding: '510px',
                        infinite: true,
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        nextArrow: $('.page-event__right'),
                        prevArrow: $('.page-event__left'),
                    }
                },
                {
                    breakpoint: 1721,
                    settings: {
                        centerMode: true,
                        centerPadding: '460px',
                        infinite: true,
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        nextArrow: $('.page-event__right'),
                        prevArrow: $('.page-event__left'),
                    }
                },
                {
                    breakpoint: 1621,
                    settings: {
                        centerMode: true,
                        centerPadding: '410px',
                        infinite: true,
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        nextArrow: $('.page-event__right'),
                        prevArrow: $('.page-event__left'),
                    }
                },
                {
                    breakpoint: 1521,
                    settings: {
                        centerMode: true,
                        centerPadding: '360px',
                        infinite: true,
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        nextArrow: $('.page-event__right'),
                        prevArrow: $('.page-event__left'),
                    }
                },
                {
                    breakpoint: 1441,
                    settings: {
                        centerMode: true,
                        centerPadding: '310px',
                        infinite: true,
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        nextArrow: $('.page-event__right'),
                        prevArrow: $('.page-event__left'),
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        centerPadding: '0',
                        infinite: true,
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        nextArrow: $('.page-event__right'),
                        prevArrow: $('.page-event__left'),
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '0',
                        infinite: true,
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        nextArrow: $('.page-event__right'),
                        prevArrow: $('.page-event__left'),
                    }
                }
            ]
        });
    }


    //Popup photo on page Event

    $( '.js-open-popup').on('click', function () {
        $('.popup-photo__img').attr("src", $(this).data('img'));
        $('.popup-photo__box').addClass('popup-photo__box--active');

    });

    $('.popup-photo__close').on('click', function () {
        $('.popup-photo__box').removeClass('popup-photo__box--active');
    });

    $('.popup-photo__box').on('click', function (e) {
        if (e.target.className === 'popup-photo__box popup-photo__box--active') {
            $('.popup-photo__box').removeClass('popup-photo__box--active');
        }
    });

    //Page news full add sticky-kit
    var offset = 150;
    if($(window).width()<1200) {
        offset = 150
    }else {
        offset = 120
    };

    if($('.news-full__share').length > 0) {
        $(".news-full__share").stick_in_parent({
            offset_top: offset
        });
    }

    //Page Community
    $('.community__item').popover({
        trigger: 'focus',
        container: 'body',
        template: '<div class="community__hover popover"><div class="arrow"></div><img class="community__img" src="" alt="Photo"><div class="community__content"><h3 class="community__title"></h3><span class="community__position"></span><a href="" class="community__link icon-facebook-x-28-alt-x-29"></a></div>',
    });

    $('.community__item').on('shown.bs.popover', function () {
        $('.community__img').attr('src', $(this).attr('data-img'));
        $('.community__title').text($(this).attr('data-myTitle'));
        $('.community__position').text($(this).attr('data-position'));
        $('.community__link').attr('href', $(this).attr('data-link'));
    })
    
    //Page Support. Open / Close Modal

    $('.js-open-modal-first').on('click', function () {
        $('.support-modals__wrapper').addClass('support-modals__wrapper--active');
        $('.support-modals__first').removeClass('support-modals__second--active support-modals__third--active');
        $('.support-modals__first').addClass('support-modals__first--active');
    });

    $('.js-open-modal-second').on('click', function () {
        $('.support-modals__wrapper').addClass('support-modals__wrapper--active');
        $('.support-modals__second').removeClass('support-modals__first--active support-modals__third--active');
        $('.support-modals__second').addClass('support-modals__second--active');
    });

    $('.js-open-modal-third').on('click', function () {
        $('.support-modals__wrapper').addClass('support-modals__wrapper--active');
        $('.support-modals__third').removeClass('support-modals__first--active support-modals__second--active');
        $('.support-modals__third').addClass('support-modals__third--active');
    });

    $('.js-close-support-modal').on('click', function () {
        $('.support-modals__wrapper').removeClass('support-modals__wrapper--active');
        $('.support-modals__container').removeClass('support-modals__first--active support-modals__second--active support-modals__third--active');
    });

    $('.support-modals__wrapper').on('click', function (e) {
        if(e.target.className === 'support-modals__wrapper support-modals__wrapper--active') {
            $('.support-modals__wrapper').removeClass('support-modals__wrapper--active');
            $('.support-modals__container').removeClass('support-modals__first--active support-modals__second--active support-modals__third--active');
        }
    });

    //Page Council. Open / Close Modal
    $('.js-open-council-modal').on('click', function () {
        $('.council-modal__wrapper').addClass('council-modal__wrapper--active');
    });

    $('.js-close-council-modal').on('click', function () {
        $('.council-modal__wrapper').removeClass('council-modal__wrapper--active');
    });

    $('.council-modal__wrapper').on('click', function (e) {
        if(e.target.className === 'council-modal__wrapper council-modal__wrapper--active') {
            $('.council-modal__wrapper').removeClass('council-modal__wrapper--active');
        }
    });

    //Page Form Custom Scroll
    if($('.page-form__dropdown-content').length > 0) {
        $(".page-form__dropdown-content").mCustomScrollbar({
            autoDraggerLength: true,
            scrollInertia:100,
        });
    }
});

//Google map
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.4480077, lng: 30.522664},
        zoom: 15
    });
}