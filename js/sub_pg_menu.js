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

let mobile_count = 0;

if (window.matchMedia("(max-width: 375px)").matches === true) {
    $('#mobile_btn').click(function () {
        if (mobile_count % 2 === 0) {
            $(this).children('i').removeClass('fa-bars').addClass('ion-close-round');
        } else {
            $(this).children('i').removeClass('ion-close-round').addClass('fa-bars');
        }
        mobile_count++;
    });
}