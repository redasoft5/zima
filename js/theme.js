"use strict"; // Start of use strict


//Contact Form Validation
function contactFormValidation () {
    if($('.contact-form').length){
        $('.contact-form').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            submitHandler: function (form) { 
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function (response) {
                    $(form).parent('div').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                });
                return false;
            }
        });
    }
}

// add your custom functions 
function serviceCarosule () {
    if ($('#services .owl-carousel').length) {
        $('#services .owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            height:300,
            margin:30,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                },
                1200:{
                    items:3
                },
                1920:{
                    items:3
                },
            }
        });
    }
}


// add your custom functions 
function testimonialsCarosule () {
    if ($('#testimonials .owl-carousel').length) {
        $('#testimonials .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                },
                1200:{
                    items:2
                },
                1920:{
                    items:2
                }
            }
        });
    }
}

// add your custom functions 
function CounterNumberChanger () {
    var timer = $('.timer');
    if(timer.length) {
        timer.appear(function () {
            timer.countTo();
        })
    }

}
// add your custom functions 
function clientCarosule () {
    if ($('#clients .owl-carousel').length) {
        $('#clients .owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin:70,
            autoWidth: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                },
                1200:{
                    items:5
                }
            }
        });
    }
}

// wow activator
function wowActivator () {
    var wow = new WOW ({
        offset: 0
    });
    wow.init();
}

// instance of fuction while Document ready event   
jQuery(document).on('ready', function() {
    (function($) {
        serviceCarosule();
        testimonialsCarosule();
        clientCarosule();
        CounterNumberChanger();
        contactFormValidation();
        wowActivator();

    })(jQuery);
});


