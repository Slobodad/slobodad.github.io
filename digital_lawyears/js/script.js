'use strict'

$(document).ready(function() {
    //Header menu open / close
    $('.js-open-menu').on('click', function () {
        $('.header__wrapper').addClass('header__wrapper--active');
        $('body').addClass('body-overflow-hidden ');
    });

    $('.js-menu-close').on('click', function () {
        $('.header__wrapper').removeClass('header__wrapper--active');
        $('body').removeClass('body-overflow-hidden ');
    });

    $('.header__wrapper').on('click', function (e) {
        if(e.target.className === 'header__wrapper header__wrapper--active') {
            $('.header__wrapper').removeClass('header__wrapper--active');
            $('body').removeClass('body-overflow-hidden ');
        }
    });

    $('.header__scrolling').on('click', function () {
        $('.header__wrapper').removeClass('header__wrapper--active');
        $('body').removeClass('body-overflow-hidden ');
    });

    // Scroll to section
    $(".header__scrolling, .banner__scroll").on("click", function(event) {
        event.preventDefault();
        var hash = $(this).attr('href');
        $("html, body").animate({
            scrollTop: $(hash).offset().top-100
        },1000);
    });

    // Services slider
    var screenWidth = $(window).width();
    if(screenWidth < 767 && $('.services__wrapper').length > 0) {
        $('.services__wrapper').slick ({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            nextArrow: $('.services-slider__right'),
            prevArrow: $('.services-slider__left'),
        });
    };

    // Cases Slider
    if ($('.cases__slider').length > 0) {
        $('.cases__slider').slick ({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            nextArrow: $('.cases-slider__right'),
            prevArrow: $('.cases-slider__left'),
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: true,
                        nextArrow: $('.cases-slider__right'),
                        prevArrow: $('.cases-slider__left'),
                    }
                }
            ]
        });
    };
    //Cases readmore
    if(screenWidth < 767 && $('.cases__about').length > 0) {
        $('article').readmore({
            speed: 50,
            collapsedHeight: 130,
            moreLink: '<a href="javascript:void(0)" class="cases__readmore">Read more</a>',
            lessLink: '<a href="javascript:void(0)" class="cases__readmore">Close</a>'
        });
    };


    // Reviews mobile slider
    if(screenWidth < 767 && $('.reviews__list').length > 0) {
        $('.reviews__list').slick ({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            nextArrow: $('.reviews-slider__right'),
            prevArrow: $('.reviews-slider__left'),
        });
    };

    // Partners Slider
    if($('.partners__slider').length > 0) {
        $('.partners__slider').slick ({
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            nextArrow: $('.partners-slider__right'),
            prevArrow: $('.partners-slider__left'),
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        nextArrow: $('.partners-slider__right'),
                        prevArrow: $('.partners-slider__left'),
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        nextArrow: $('.partners-slider__right'),
                        prevArrow: $('.partners-slider__left'),
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        nextArrow: $('.partners-slider__right'),
                        prevArrow: $('.partners-slider__left'),
                        centerMode: false,
                    }
                }
            ]
        });
    };

    // Ambassadors Slider
    if ($('.ambassadors__slider').length > 0) {
        $('.ambassadors__slider').slick ({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            nextArrow: $('.ambassadors-slider__right'),
            prevArrow: $('.ambassadors-slider__left'),
        });
    };

    // Modal section Services
    $('.js-open-services-modal').on('click', function () {
        $('.modals__wrapper ').addClass('modals__wrapper--active');
        $('body').addClass('body-overflow-hidden');
        if(screenWidth > 1199) {
            $('body').css('padding-right', '17px');
        }
    });

        $('.js-close-services-modal').on('click', function () {
            $('.modals__wrapper ').removeClass('modals__wrapper--active');
            $('body').removeClass('body-overflow-hidden ');
            if(screenWidth > 1199) {
                $('body').css('padding-right', '0');
            }
        });

    $('.modals__wrapper ').on('click', function (e) {
        if (e.target.className === 'modals__wrapper modals__wrapper--active') {
            $('.modals__wrapper ').removeClass('modals__wrapper--active');
            $('body').removeClass('body-overflow-hidden ');
            if(screenWidth > 1199) {
                $('body').css('padding-right', '0');
            }
        }
    });

    // Modal section Why-Us
    $('.js-open-whyUs-modal').on('click', function () {
        $('.why-us__wrapper').addClass('why-us__wrapper--active');
        $('body').addClass('body-overflow-hidden ');
    });

    $('.js-close-whyUs-modal').on('click', function () {
        $('.why-us__wrapper').removeClass('why-us__wrapper--active');
        $('body').removeClass('body-overflow-hidden ');
    });

});