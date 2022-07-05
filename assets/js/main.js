(function($) {
    "use strict";
    /*----- 
    	Mobile Menu 
    -----------------------------------*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
    });

    /*----- 
    	Properties Slider 
    ------------------------------------*/
    $('.properties-slider').slick({
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    /*----- 
    	Home 3 Properties Slider 
    ------------------------------------*/
    $('.home3-pro-slider').slick({
        speed: 300,
        centerMode: true,
        centerPadding: '368px',
        slidesToShow: 2,
        responsive: [{
                breakpoint: 1400,
                settings: {
                    centerPadding: '200px',
                }
            },
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '250px',
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '150px',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                }
            },
        ]
    });

    /*----- 
    	Testimonial Slider 
    ----------------------------------*/
    $('.testimonial-slider').slick({
        arrows: false,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.testimonial2-slider').slick({
        arrows: false,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.testimonial3-slider').slick({
        arrows: false,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    /*----- 
    	Properties Details Slider 
    ------------------------------------*/
    $('.property-details-slider').slick({
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>',
    });
    /*----- 
    	Partner Slider 
    ------------------------------------*/
    $('.partner-slider').slick({
        arrows: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
    /*----- 
    	News Image Slider 
    ----------------------------------*/
    $('.news-image-slider').slick({
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    /*----- 
    	Blog Masonary 
    ------------------------------------*/
    $(".masonry-blog").masonry({
        // options...
        itemSelector: '.sin-blog',
    });
    /*----- 
    	Blog Match Height
    ------------------------------------*/
    $('.sin-blog-3').matchHeight();
    /*----- 
    	Gallery Slider 
    ------------------------------------*/
    $('.gallery-nav-slider').slick({
        centerPadding: '0px',
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.gallery-main-slider',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>',
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1169,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });
    $('.gallery-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery-nav-slider'
    });
    /*--
      Ajax Contact Form JS
    ------------------------*/
    $(function() {
        // Get the form.
        var form = $('#contact-form');
        // Get the messages div.
        var formMessages = $('.form-message');
        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
            // Stop the browser from submitting the form.
            e.preventDefault();
            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData,
                })
                .done(function(response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#contact-form input,#contact-form textarea').val('');
                })
                .fail(function(data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text(
                            'Oops! An error occured and your message could not be sent.'
                        );
                    }
                });
        });
    });
    /*----- 
    	Scroll Up 
    -------------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*----- 
    	Count UP Timer
    ------------------------------------*/
    $('.timer').countTo({
        speed: 3000,
    });

})(jQuery);