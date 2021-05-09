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

    