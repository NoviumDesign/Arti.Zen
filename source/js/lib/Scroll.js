var Scroll = function (sectionsClass)
{
  var
    sectionHolder = $('.section-holder'),
    that = this;

  this.boundSections = function ()
  {
    var
      sections = sectionHolder.children('section, .section'),
      bottomSection,
      topSection;

    sections.each(function (i, elem)
    {
      // finner den översta sektionen som syns på skärmen vilken är intressant när man scrollar nedåt
      if (elem.offsetTop <= 0)
      {
        topSection = $(this);
      }

      // finner den nedersta sektionen som syns på skärmen vilken är intressant när man scrollar uppåt
      if (elem.offsetTop >= $(window).height())
      {
        // har funnit bägge sektionerna, avbryt iteration nu innan nytt värde tilldelas
        return false;
      }
      bottomSection = $(this);
    });

    return {top: topSection, bottom: bottomSection};
  }

  this.scroll = function (direction)
  {
    var
      accuracy = 150,
      percentage = 0.7,

      section = this.boundSections(),
      topPrev = section.top.prev('section, .section'),
      topNext = section.top.next('section, .section'),
      holderOffset = sectionHolder.offset().top,
      wh = $(window).height(),
      toScroll,
      newOffset,
      currentSection;

    if (direction < 0)
    {
      // down

      if (
        section.top[0] == section.bottom[0] && 
        topNext.offset().top < wh*(1 + percentage) && 
        topNext.offset().top - wh > accuracy
      )
      {
        // section longer that the height of the window, but there is little left so go down bottom to bottom
        toScroll = topNext.offset().top - wh;

        currentSection = section.bottom;
      }
      else if (topNext.offset().top - accuracy > wh)  // need accuracy
      {
        // section longer that the height of the window, go a bit down
        toScroll = wh*percentage;

        currentSection = section.bottom;
      }
      else
      {
        // next section
        toScroll = topNext.offset().top;

        currentSection = topNext;
      }

      newOffset = holderOffset - toScroll;

      if (newOffset < wh - sectionHolder.height())
      {
        // exceeds area of content
        // set to max instead
        newOffset = wh - sectionHolder.height();
      }
    }
    else if (direction > 0)
    {
      // up

      if (section.top.offset().top === 0 && topPrev.length)
      {
        section.top = topPrev;
      }

      currentSection = section.top;

      toScroll = section.top.offset().top;

      // om to_scroll är för liten så tag sectionen ovanför
      if (wh < -toScroll)  
      {
        toScroll = -wh*percentage;
      }

      newOffset = holderOffset - toScroll

      if (newOffset > 0)
      {
        // exceeds area of content
        // set to min instead
        newOffset = 0;
      }
    }

    sectionsClass.storeSectionIndex(currentSection);

    sectionHolder.css('marginTop', newOffset + 'px');
  }

  $(document).keydown(function (event)
  {
    var k = event.which;

    if (k == '40')
    {
      // down
      event.preventDefault();
      that.scroll(-1);
    }
    else if (k == '38')
    {
      // up
      event.preventDefault();
      that.scroll(1);
    }
  });

  $(window).on('slide', function (event, data)
  {
    if (data.type == 'y' && data.direction !== 0)
    {
      that.scroll(data.direction);
    } 
  });
}