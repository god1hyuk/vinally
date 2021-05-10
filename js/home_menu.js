// Menu opacity
if ($(window).scrollTop() > 80) {
    $(".navbar-fixed-top").addClass("bg-nav");
    $(".menu>li>a").css("color", "#444");
} else {
    $(".navbar-fixed-top").removeClass("bg-nav");
    $(".menu>li>a").css("color", "#fff");
    $("a.active").css("color","#4879bc");
}
$(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
        $(".menu>li>a").css("color", "#444");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
        $(".menu>li>a").css("color", "#fff");
        $("a.active").css("color","#4879bc");
    }
});

// mobile

let mobile_count = 0;

if (window.matchMedia("(max-width: 375px)").matches === true) {
    $('#mobile_btn').click(function () {
        if (mobile_count % 2 === 0) {
            $(this).children('i').removeClass('fa-bars').addClass('fa-times');
        } else {
            $(this).children('i').removeClass('fa-times').addClass('fa-bars');
        }
        mobile_count++;
    });
} else {
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
        $(".menu>li>a").css("color", "#444");
        $("a.active").css("color", "#4879bc");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
        $(".menu>li>a").css("color", "#fff");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
            $(".menu>li>a").css("color", "#444");
            $("a.active").css("color", "#4879bc");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
            $(".menu>li>a").css("color", "#fff");
        }
    });
}
