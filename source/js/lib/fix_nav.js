var fix_nav = function ()
{
  var scrollamount, offset_top;

  scrollamount = 350;
  offset_top = $('.section_holder').offset().top;

  if (-offset_top > scrollamount)
  {
    $('nav').addClass('fixed-nav');
  }
  else
  {
    $('nav').removeClass('fixed-nav');
  }
}