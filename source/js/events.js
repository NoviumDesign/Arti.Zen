// init
$('document').ready(function ($)
{
  // fix nav on scroll
  fix_nav();

  // set window height to body
  w_h();
});


// rezise browser
$(window).resize(function()
{
  // set window height to body
  w_h();
});


// click
$('#menu-toggle').click(function ()
{
  $('.main-menu').toggleClass('open');
});


// scroll
$(window).mousewheel($.debounce(60, true, function (event)
{
  event.preventDefault();

  console.log(1)

  // up or down
  if (event.deltaY)
  {
    flip_page(event.deltaY);
  }

}));




// touch scroll
// var s_t = 0;
// $('body').bind('scrollstop', function (event)
// {

//   // up or down
//   if ($(window).scrollTop() - s_t > 0)
//   {
//     console.log(-1)
//     flip_page(-1);
//   }
//   else if ($(window).scrollTop() - s_t < 0)
//   {
//     console.log(1)
//     flip_page(1);
//   }

//   event.preventDefault();

//   s_t = $(window).scrollTop()

// });