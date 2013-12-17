#= require ./vendor/modernizr.min.js
#= require ./vendor/jquery.min.js


#= require_tree ./vendor
#= require_tree ./lib
#= require events

// animation tim for page to flip
var anim = 800;




// // scroll
// if($.browser.mozilla || $.browser.msie) {
//   // firefox and IE
//   jQuery(function($) {
//     $(document).bind('mousewheel', function(event, delta) {

//       var scrollAt, dy;
//       dy = -delta*70;

//       scrollAt = $(window).scrollLeft();

//       if(dy != 0) {
//         $(document).scrollLeft(scrollAt + dy);
//         event.preventDefault();
//       }

//       });
//   });
// } else {
//   other
//   $('body').bind('mousewheel', function(event)
//   {
//     console.log(1)
//     var scrollAt, dy;
//     dy = -event.originalEvent.wheelDeltaY;

//     scrollAt = $(window).scrollLeft();

//     if(dy != 0) {
//       $('body').scrollLeft(scrollAt + dy);
//       event.preventDefault();
//     }
//   });
// }

// $('body').bind('mousewheel', function(event)
//   {
//     console.log(1)
//     var scrollAt, dy;
//     dy = -event.originalEvent.wheelDeltaY;

//     scrollAt = $(window).scrollLeft();

//     if(dy != 0) {
//       $('body').scrollLeft(scrollAt + dy);
//       event.preventDefault();
//     }
//   });



