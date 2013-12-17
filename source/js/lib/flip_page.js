var flip_page = function (direction)
{
  var sections, section_top, section_bottom, top_next, bottom_next, top_prev, bottom_prev, to_scroll, accuracy, percentage, new_offset, holder_offset;


  // not "spamable"
  if (flip_page.busy)
  {
    return false;
  }
  flip_page.busy= 1;

  setTimeout(function ()
  {
    // reactivate
    flip_page.busy = 0;

    // functions
    fix_nav();
    body_id();
  }, anim);


  accuracy = 10;
  percentage = 0.5

  holder_offset = $('.section_holder').offset().top;
  sections = find_section();

  section_top = $(sections[0]);
  section_bottom = $(sections[1]);

  top_next = section_top.next('section, .section');
  // bottom_next = section_bottom.next('section, .section');

  top_prev = section_top.prev('section, .section');
  // bottom_prev = section_bottom.prev('section, .section');


  if (direction < 0)
  {
    // down

    if (
      section_top[0] == section_bottom[0] && 
      top_next.offset().top < $(window).height()*(1 + percentage) && 
      top_next.offset().top - $(window).height() > accuracy
    )
    {
      // section longer that the height of the window, but there is little left so go down bottom to bottom
      to_scroll = top_next.offset().top - $(window).height();
    }
    else if (top_next.offset().top - accuracy > $(window).height())  // need accuracy
    {
      // section longer that the height of the window, go a bit down
      to_scroll = $(window).height()*percentage;
    }
    else
    {
      // next section
      to_scroll = top_next.offset().top;
    }

    new_offset = holder_offset - to_scroll;


    if (new_offset < $(window).height() - $('.section_holder').height())
    {
      // exceeds area of content
      // set to max instead
      new_offset = $(window).height() - $('.section_holder').height();
    }

    $('.section_holder').css('marginTop', new_offset + 'px');
  }
  else if (direction > 0)
  {
    // up
    // "backa upp"

    if (section_top.offset().top === 0 && top_prev.length)
    {
      section_top = top_prev;
    }

    to_scroll = section_top.offset().top;
    // om to_scroll är för liten så tag sectionen ovanför



    if (-to_scroll > $(window).height())
    {
      to_scroll = -$(window).height()*percentage;
    }

    new_offset = holder_offset - to_scroll

    if (new_offset > 0)
    {
      // exceeds area of content
      // set to min instead
      new_offset = 0;
    }

    $('.section_holder').css('marginTop', new_offset + 'px');
  }
}
flip_page.busy = 0;