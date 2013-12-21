// init
$('document').ready(function ($)
{
  // set window height to body
  w_h();

  // calculations
  h_e_w();
  h_100p();

  // load at right section
  // fix_nav() and body_id() is included
  read_hash();

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

$('[navigate]').click(function (event)
{
  event.preventDefault();

  navigate($(this).attr('navigate'))
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


// open popup
$('.storeloader').click(function (event)
{
  event.preventDefault();

  var id = $(this).attr('data-id');

  toggle_store(id);
});

// close popup
$('.popwrap').click(function (event)
{
  if ($(this)[0] == event.target)
  {
    $(this).addClass('hide');
  }
});