var find_section = function ()
{
  var sections, w_h, section;

  sections = $('body > section');
  w_h = $(window).height();

  sections.each(function (i, val)
  {
    var offsetBottom = val.offsetTop + val.offsetHeight;

    // first section with visible "bottom"
    if (offsetBottom >= 1)
    {
      section = val;

      return false;
    }
  });

  return section;
}