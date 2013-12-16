var fix_nav = function ()
{
  var nav, scrollamount;

  nav = $('nav');
  scrollamount = 350;

  $(window).scroll(function ()
  {
    if ($(this).scrollTop() > scrollamount)
    {
      nav.addClass('fixed-nav');
    }
    else
    {
      nav.removeClass('fixed-nav');
    }
  });
}