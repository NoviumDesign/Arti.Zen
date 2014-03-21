var Sections = function ()
{
  var
    sectionHolder = $('.section-holder'),
    that = this;

  this.currentSectionIndex = 0;

  this.resize = function ()
  {
    var h = $(window).height();

    $('.section-holder > .h100').outerHeight(h);
    $('.section-holder > .mh100').css('minHeight', h + 'px');
  }

  this.storeSectionIndex = function (section)
  {
    var removeClass = this.getSection(this.currentSectionIndex).attr('id');

    $('body').removeClass(removeClass);
    $('body').addClass(section.attr('id'));

    this.currentSectionIndex = section.index();
    
    this.navbar();
  }

  this.setSection = function (section)
  {
    var offset;

    if (section)
    {
      offset = sectionHolder.offset().top - section.offset().top;

      if (offset < $(window).height() - sectionHolder.height())
      {
        // offset larger than maximum -> set to max
        offset = $(window).height() - sectionHolder.height();
      }

      this.storeSectionIndex(section);

      sectionHolder.css('marginTop', offset + 'px');   
    }
  }

  this.getSection = function (index)
  {
    var section = sectionHolder.children('section, .section').eq(index);

    if (section.length)
    {
      return section;
    }
    
    return false
  }

  this.findSection = function (htmlId)
  {
    if (htmlId.length > 0)
    { 
      var section = sectionHolder.children('section, .section').filter('#' + htmlId);

      if (section.length)
      {
        return section;
      }
    }
    
    return false
  }

  this.navbar = function ()
  {
    if (this.currentSectionIndex > 0)
    {
      $('nav').addClass('fixed-nav');
    }
    else
    {
      $('nav').removeClass('fixed-nav');
    }
  }

  $(window).on('resize', function ()
  {
    that.resize();
  });

  $('document').ready(function ()
  {
    that.resize();

    // set body intro class, may be overwritten via "Navigate.js"
    that.storeSectionIndex(that.getSection(0));
  });
}