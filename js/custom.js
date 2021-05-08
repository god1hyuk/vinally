// JavaScript Document

window.onload = function () {
    setTimeout (function () {
    scrollTo(0, 0);
    }, 20);
  }

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});


$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
        $(".menu>li>a").css("color","#444");
        $("a.active").css("color","#4879bc");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
        $(".menu>li>a").css("color","#fff");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
            $(".menu>li>a").css("color","#444");
            $("a.active").css("color","#4879bc");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
            $(".menu>li>a").css("color","#fff");
        }
    });




    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });




    //animatedModal
    $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

    // Contact Form 	

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function () {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#contact').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });
});




// vp-01 animation


// vp-01 slider

// $('.vp-01_slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });

  $('.vp-01_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<i class="fas fa-caret-left"></i>',
    nextArrow: '<i class="fas fa-caret-right"></i>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      }
    ]
  });

// album covers

$(function(){

    $('#vinyl1').click(function () {
        $('#vinyl1').css('filter','none');
        $('#vinyl2').css('filter','grayscale(100%)');
        $('#vinyl3').css('filter','grayscale(100%)');
        $('#vinyl4').css('filter','grayscale(100%)');
        $('#vinyl5').css('filter','grayscale(100%)');
        $('#vinyl6').css('filter','grayscale(100%)');
        $('#vinyl7').css('filter','grayscale(100%)');
        $('#vinyl8').css('filter','grayscale(100%)');
        $('#vinyl9').css('filter','grayscale(100%)');
    });

    $('#vinyl2').click(function () {
        $('#vinyl2').css('filter','none');
        $('#vinyl1').css('filter','grayscale(100%)');
        $('#vinyl3').css('filter','grayscale(100%)');
        $('#vinyl4').css('filter','grayscale(100%)');
        $('#vinyl5').css('filter','grayscale(100%)');
        $('#vinyl6').css('filter','grayscale(100%)');
        $('#vinyl7').css('filter','grayscale(100%)');
        $('#vinyl8').css('filter','grayscale(100%)');
        $('#vinyl9').css('filter','grayscale(100%)');
    });

    $('#vinyl3').click(function () {
        $('#vinyl3').css('filter','none');
        $('#vinyl1').css('filter','grayscale(100%)');
        $('#vinyl2').css('filter','grayscale(100%)');
        $('#vinyl4').css('filter','grayscale(100%)');
        $('#vinyl5').css('filter','grayscale(100%)');
        $('#vinyl6').css('filter','grayscale(100%)');
        $('#vinyl7').css('filter','grayscale(100%)');
        $('#vinyl8').css('filter','grayscale(100%)');
        $('#vinyl9').css('filter','grayscale(100%)');
    });

    $('#vinyl4').click(function () {
        $('#vinyl4').css('filter','none');
        $('#vinyl1').css('filter','grayscale(100%)');
        $('#vinyl2').css('filter','grayscale(100%)');
        $('#vinyl3').css('filter','grayscale(100%)');
        $('#vinyl5').css('filter','grayscale(100%)');
        $('#vinyl6').css('filter','grayscale(100%)');
        $('#vinyl7').css('filter','grayscale(100%)');
        $('#vinyl8').css('filter','grayscale(100%)');
        $('#vinyl9').css('filter','grayscale(100%)');
    });

    $('#vinyl5').click(function () {
        $('#vinyl5').css('filter','none');
        $('#vinyl1').css('filter','grayscale(100%)');
        $('#vinyl2').css('filter','grayscale(100%)');
        $('#vinyl3').css('filter','grayscale(100%)');
        $('#vinyl4').css('filter','grayscale(100%)');
        $('#vinyl6').css('filter','grayscale(100%)');
        $('#vinyl7').css('filter','grayscale(100%)');
        $('#vinyl8').css('filter','grayscale(100%)');
        $('#vinyl9').css('filter','grayscale(100%)');
    });

    $('#vinyl6').click(function () {
        $('#vinyl6').css('filter','none');
        $('#vinyl1').css('filter','grayscale(100%)');
        $('#vinyl2').css('filter','grayscale(100%)');
        $('#vinyl3').css('filter','grayscale(100%)');
        $('#vinyl4').css('filter','grayscale(100%)');
        $('#vinyl5').css('filter','grayscale(100%)');
        $('#vinyl7').css('filter','grayscale(100%)');
        $('#vinyl8').css('filter','grayscale(100%)');
        $('#vinyl9').css('filter','grayscale(100%)');
    });

    $('#vinyl7').click(function () {
        $('#vinyl7').css('filter','none');
        $('#vinyl1').css('filter','grayscale(100%)');
        $('#vinyl2').css('filter','grayscale(100%)');
        $('#vinyl3').css('filter','grayscale(100%)');
        $('#vinyl4').css('filter','grayscale(100%)');
        $('#vinyl5').css('filter','grayscale(100%)');
        $('#vinyl6').css('filter','grayscale(100%)');
        $('#vinyl8').css('filter','grayscale(100%)');
        $('#vinyl9').css('filter','grayscale(100%)');
    });

    $('#vinyl8').click(function () {
        $('#vinyl8').css('filter','none');
        $('#vinyl1').css('filter','grayscale(100%)');
        $('#vinyl2').css('filter','grayscale(100%)');
        $('#vinyl3').css('filter','grayscale(100%)');
        $('#vinyl4').css('filter','grayscale(100%)');
        $('#vinyl5').css('filter','grayscale(100%)');
        $('#vinyl6').css('filter','grayscale(100%)');
        $('#vinyl7').css('filter','grayscale(100%)');
        $('#vinyl9').css('filter','grayscale(100%)');
    });

    $('#vinyl9').click(function () {
        $('#vinyl9').css('filter','none');
        $('#vinyl1').css('filter','grayscale(100%)');
        $('#vinyl2').css('filter','grayscale(100%)');
        $('#vinyl3').css('filter','grayscale(100%)');
        $('#vinyl4').css('filter','grayscale(100%)');
        $('#vinyl5').css('filter','grayscale(100%)');
        $('#vinyl6').css('filter','grayscale(100%)');
        $('#vinyl7').css('filter','grayscale(100%)');
        $('#vinyl8').css('filter','grayscale(100%)');
    })
});


// vp-01 play

let switchCount = 0;

$(function () {
    $('.vp-01_play').click(function () {
        if (switchCount % 2 === 0) {
            $(this).text('STOP');
            $('.vp-01_wrap').stop().css('filter','grayscale(0%)').css('transition','filter 0.2s ease');
            $('.vp-01_switch').stop().animate({
                top: '-45'
            }, 1000);
            $('.vp-01_cap').stop().animate({
                left: '90'
            }, 1000);
            setTimeout(function() {
                $('.vp-01_spindle').stop().css('animation-play-state','running');
            }, 500);
        } else {
            $(this).text('PLAY');
            $('.vp-01_wrap').stop().css('filter','grayscale(100%)').css('transition','filter 0.2s ease');
            $('.vp-01_switch').stop().animate({
            top: '0'
            }, 1000);
            $('.vp-01_cap').stop().animate({
                left: '0'
            }, 1000);
            $('.vp-01_spindle').stop().css('animation-play-state','paused');
        }
        switchCount++;
    });

    $('.vp-01_play').mouseover(function () {
        $('.vp-01_wrap').stop().css('filter','grayscale(0%)').css('transition','filter 0.2s ease');
    });
    $('.vp-01_play').mouseout(function () {
        if (switchCount % 2 === 0) {
            $('.vp-01_wrap').stop().css('filter','grayscale(100%)').css('transition','filter 0.2s ease');
        } else {
            $('.vp-01_wrap').stop().css('filter','grayscale(0%)').css('transition','filter 0.2s ease');
        }
    });

});

const audioContainer = document.querySelector('#audioContainer');
const playBtn = document.querySelector('.vp-01_play');
const album1 = document.querySelector('#vinyl1');
const album2 = document.querySelector('#vinyl2');
const album3 = document.querySelector('#vinyl3');
const album4 = document.querySelector('#vinyl4');
const album5 = document.querySelector('#vinyl5');
const album6 = document.querySelector('#vinyl6');
const album7 = document.querySelector('#vinyl7');
const album8 = document.querySelector('#vinyl8');
const album9 = document.querySelector('#vinyl9');


let currentAudio;

album1.addEventListener('click', function () {
    currentAudio = 1;
});

album2.addEventListener('click', function () {
    currentAudio = 2;
});

album3.addEventListener('click', function () {
    currentAudio = 3;
});

album4.addEventListener('click', function () {
    currentAudio = 4;
});

album5.addEventListener('click', function () {
    currentAudio = 5;
});

album6.addEventListener('click', function () {
    currentAudio = 6;
});

album7.addEventListener('click', function () {
    currentAudio = 7;
});

album8.addEventListener('click', function () {
    currentAudio = 8;
});

album9.addEventListener('click', function () {
    currentAudio = 9;
});


function playAudio () {
    audioContainer.volume = 0.5;
    audioContainer.play();
}

function stopAudio () {
    audioContainer.pause();
}

function loadAudio () {
    const source = document.querySelector('#audioSource');
    source.src = `audio/${currentAudio}.mp3`;
    audioContainer.load();
    playAudio();
    console.log(source.src);
}

let playCount = 0;

playBtn.addEventListener('click', function () {
    if (playCount % 2 === 0) {
        loadAudio();
    } else {
        stopAudio();
    }
    playCount++;
    console.log(playCount);
});