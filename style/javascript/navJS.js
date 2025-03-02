$(document).ready(function () {
    var navbar = $(".navbar");
    var brand = $(".navbar-brand");
    var jumbotronHeight = $(".homeHeader").offset().top + $(".homeHeader").outerHeight();
    var navbarHeight = navbar.outerHeight();

    $(window).scroll(function () {
        if ($(window).scrollTop() >= jumbotronHeight) {
            navbar.addClass("sticky-nav");
            brand.addClass("visible-brand");
            $("body").css("padding-top", navbarHeight + "px");
        } else {
            navbar.removeClass("sticky-nav");
            brand.removeClass("visible-brand");
            $("body").css("padding-top", "0");
        }
    });
});