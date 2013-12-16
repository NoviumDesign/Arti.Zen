var flip_page = function (direction)
{
  var section, n_s, b_o_t;

  b_o_t = $('body').offset().top;
  section = $(find_section());

  // section higher than window

  if (direction === -1 && section.next('section').length)
  {
    // down
    n_s = section.next('section')[0];

    $('body').css('marginTop', b_o_t - n_s.offsetTop + 'px');

  }
  else if (direction === 1 && section.prev('section').length)
  {
    // up
    n_s = section.prev('section')[0];

    $('body').css('marginTop', b_o_t - n_s.offsetTop + 'px');
  }
}