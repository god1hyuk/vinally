    // Menu opacity
    if ($(window).scrollTop() === 0) {
        $(".navbar-fixed-top").addClass("bg-nav");
        $(".menu>li>a").css("color","#444");
        $("a.active").css("color","#4879bc");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() === 0) {
            $(".navbar-fixed-top").addClass("bg-nav");
            $(".menu>li>a").css("color","#444");
            $("a.active").css("color","#4879bc");
        }
    });
