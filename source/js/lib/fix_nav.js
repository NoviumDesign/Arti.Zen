var fix_nav = function ()
{
  var nav, scrollamount, b_o_t;

  nav = $('nav');
  scrollamount = 350;
  b_o_t = $('body').offset().top;

  if (-b_o_t > scrollamount)
  {
    nav.addClass('fixed-nav');
  }
  else
  {
    nav.removeClass('fixed-nav');
  }
}