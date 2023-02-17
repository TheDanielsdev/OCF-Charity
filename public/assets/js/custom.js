/*-----------------------------------------------------------------------------------

    Template Name: Orphan -  Charity HTML Template


    Note: This is Custom Js file

-----------------------------------------------------------------------------------

    [Table of contents]
    
    1. slider-home-1
    2. slider-home-2
    3. logodata  
    4. gifts slids
    5. child-sponsor-slide
    6. see-impact-slids
    7. mobile-nav
    8. slider-for
    9. slider-for-two
    10. zoom-slider
    11. project-today
    12. accordion-item
    13. progressbar
    14. pd-gallery
    15. Cart Popup Start
    16. Donation Amount Select On Click Start
    17. Preloader
    18. back to top button

-----------------------------------------------------------------------------------*/
/* 1. slider-home-1 */
jQuery(document).ready(function($) {
    if ($.isFunction($.fn.owlCarousel)) {
        $('.slider-home-1').owlCarousel({
            loop: true,
            arrows: false,
            autoplay: true,
            autoplayTimeout: 4000,
            items: 1
        })
        /* 2. slider-home-2 */
        $('.slider-home-2').owlCarousel({
            loop: true,
            arrows: false,
            // autoplay:true,
            items: 1
        })
        /* 3. logodata */
        $('.logodata').owlCarousel({
            loop: true,
            dot: false,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1400: {
                    items: 5
                }
            }
        })
        /* 4. gifts slids */
        $('.gifts-slids').owlCarousel({
            loop: true,
            dot: false,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
        /* 5. child-sponsor-slide */
        $('.child-sponsor-slide').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000,
            navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
        /* 6. see-impact-slids */
        $('.see-impact-slids').owlCarousel({
            loop: true,
            dot: false,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        })
    }
    /* 7. mobile-nav */
    jQuery('.mobile-nav .menu-item-has-children').on('click', function($) {

        jQuery(this).toggleClass('active');

    });



    jQuery('#nav-icon4').click(function($) {

        jQuery('#mobile-nav').toggleClass('open');

    });

    jQuery('#res-cross').click(function($) {

        jQuery('#mobile-nav').removeClass('open');

    });


    jQuery('.bar-menu').click(function($) {

        jQuery('#mobile-nav').toggleClass('open');
        jQuery('#mobile-nav').toggleClass('hmburger-menu');
        jQuery('#mobile-nav').show();

    });

    jQuery('#res-cross').click(function($) {

        jQuery('#mobile-nav').removeClass('open');

    });

});
/* 8. slider-for */
if ($.isFunction($.fn.slick)) {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    /* 9. slider-for-two */
    $('.slider-for-two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav-two'
    });
    $('.slider-nav-two').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for-two',
        dots: true,
        centerMode: true,
        arrows: false,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [{
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
}
/* 10. zoom-slider */
var $owl = $('.zoom-slider');

$owl.children().each(function(index) {
    $(this).attr('data-position', index);
});
if ($.isFunction($.fn.owlCarousel)) {
    $owl.owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 3
            }
        }
    });
}
/* 11. project-today */
if ($(".project-today")[0]) {
    var $owl = $('.project-today');

    $owl.children().each(function(index) {
        $(this).attr('data-position', index);
    });
    $owl.owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            1201: {
                items: 3
            }
        }
    });
}
/* 12. accordion-item */
$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    if ($(this).closest('.accordion-item').hasClass('active')) {
        $('.accordion-item').removeClass('active');
    } else {
        $('.accordion-item').removeClass('active');

        $(this).closest('.accordion-item').addClass('active');
    }
    var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .content').not($content).slideUp('fast');
});
/* 13. progressbar */
{
    function animateElements() {
        $('.progressbar').each(function() {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 10 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 200,
                    thickness: 6,
                    emptyFill: "rgba(250,250,250, .8)",
                    fill: {
                        color: '#ff3636'
                    }
                }).on('circle-animation-progress', function(event, progress, stepValue) {
                    $(this).find('div').text((stepValue * 100).toFixed() + "%");
                }).stop();
            }
        });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
};


/* 14. pd-gallery */
$('.li-pd-imgs').on('click', function() {

    var img_src = "";

    $('.li-pd-imgs.nav-active').removeClass('nav-active');

    $(this).addClass('nav-active');

    img_src = $(this).find('img').attr('src');

    $('.pd-main-img').children('img').attr('src', img_src);

});

/* 15. Cart Popup Start */

jQuery('.pr-cart').on('click', function() {

    jQuery('.cart-popup').toggleClass('show-cart');

});

// Cart Popup End
/* 16. Donation Amount Select On Click Start */

$('.donating').on('click', function() {
    var empty = "";
    $('.donated_amount').attr("placeholder", empty);
    var donation_amount = $(this).children('span').text();
    $('.donated_amount').attr("placeholder", donation_amount);
});

// Donation Amount Select On Click End

/* 17. Preloader */
$(window).on('load', function() {
    $("body").addClass("page-loaded");
    ("loaded")
});

/* 18. back to top button */

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});


// theme-icon/moon
let lightmode = localStorage.getItem('drak-mode');
const lightmodeToggle = document.querySelector('#theme-icon');
const enableLightMode = () => {
    document.body.classList.add('drak-mode');
    localStorage.setItem('drak-mode', 'enabled');
    lightmodeToggle.src = 'assets/img/moon.png';
}

const disablelightmode = () => {
    document.body.classList.remove('drak-mode');
    localStorage.setItem('drak-mode', null);
    lightmodeToggle.src = 'assets/img/sun.png';
}

if (lightmode === 'enabled') {
    enableLightMode();
}

lightmodeToggle.addEventListener('click', () => {
    lightmode = localStorage.getItem('drak-mode');

    if (lightmode !== 'enabled') {
        enableLightMode();
    } else {
        disablelightmode();
    }
});