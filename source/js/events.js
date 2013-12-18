// init
$('document').ready(function ($)
{
  // fix nav on scroll
  fix_nav();

  // set window height to body
  w_h();

  // set section id on body
  body_id();

  h_e_w();
  h_100p();
});


// rezise browser
$(window).resize(function()
{
  // fix nav on scroll
  fix_nav();

  // set window height to body
  w_h();

  // set section id on body
  body_id();

  h_e_w();
  h_100p();
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

  // up or down
  if (event.deltaY)
  {
    flip_page(event.deltaY);
  }
}));


$(document).keydown(function (event)
{
  var k = event.which;

  if (k == '40')
  {
    // down
    event.preventDefault();
    flip_page(-1);
  }
  else if (k == '38')
  {
    // up
    event.preventDefault();
    flip_page(1);
  }
});