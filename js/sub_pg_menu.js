// Menu opacity
if ($(window).scrollTop() === 0) {
    $(".navbar-fixed-top").addClass("bg-nav");
    $(".menu>li>a").css("color", "#444");
    $("a.active").css("color", "#4879bc");
}
$(window).scroll(function () {
    if ($(window).scrollTop() === 0) {
        $(".navbar-fixed-top").addClass("bg-nav");
        $(".menu>li>a").css("color", "#444");
        $("a.active").css("color", "#4879bc");
    }
});

// mobile

if (window.matchMedia("(max-width: 375px)").matches === true) {
    $("header").css("display", "none");
    $("#mobile").css("display", "block");
    $('#mobile_btn').click(function () {
        if (mobile_count % 2 === 0) {
            $(this).children('i').removeClass('fa-bars').addClass('fa-times');
        } else {
            $(this).children('i').removeClass('fa-times').addClass('fa-bars');
        }
        mobile_count++;
    });
}