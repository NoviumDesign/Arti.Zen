var navigate = function (nav_to)
{
  var section, offset;

  if (flip_page.busy)
  {
    return false;
  }
  flip_page.busy = 1;

  section = $('section' + nav_to + ', .section' + nav_to).first();

  offset = $('.section_holder').offset().top - section.offset().top;

  $('.section_holder').css('marginTop', offset + 'px');

  setTimeout(function ()
  {
    // functions
    fix_nav();
    body_id();

    window.location.hash = nav_to;
    flip_page.busy = 0;

  }, anim);
}