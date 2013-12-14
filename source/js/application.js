#= require_tree ./vendor
#= require_tree ./lib

/* Fix nav on scroll */ 
$("document").ready(function ($) {

    var nav = $('nav');
    var scrollamount = 350;

    $(window).scroll(function () {
        if ($(this).scrollTop() > scrollamount) {
            nav.addClass("fixed-nav");
        } else {
            nav.removeClass("fixed-nav");
        }
    });
});

$( "#menu-toggle" ).click(function() {
  $(".main-menu").toggleClass( "open" );
});