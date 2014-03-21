var find_section = function ()
{
  var sections, section_bottom, section_top;

  sections = $('.section-holder > section, .section-holder > .section');

  sections.each(function (i, val)
  {
    var offset_top = val.offsetTop;

    // finner den översta sektionen som syns på skärmen vilken är intressant när man scrollar nedåt
    if (offset_top <= 0)
    {
      section_top = val;
    }

    // finner den nedersta sektionen som syns på skärmen vilken är intressant när man scrollar uppåt
    if (offset_top >= $(window).height())
    {
      // har funnit bägge sektionerna, avbryt iteration nu innan nytt värde tilldelas
      return false;
    }
    section_bottom = val;

  });

  return Array(section_top, section_bottom);
}