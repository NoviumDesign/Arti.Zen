Navigate = function (sectionsClass)
{
  var
    sectionHolder = $('.section-holder'),
    that = this;

  this.to = function (htmlId)
  {
    var section = sectionsClass.findSection(htmlId);

    sectionsClass.setSection(section);
  }

  this.changeHash = function (hash)
  {
    var
      section,
      triggerElement;

    if (hash.length > 0)
    {
      section = sectionsClass.findSection(hash);

      if (section) {
        // fires with click and hashchange

        // remove id
        section.attr('id', '');

        // create fake element with the removen id
        triggerElement = $('<div></div>')
          .css({
              position: 'absolute',
              visibility: 'hidden',
              top: '0px'
          })
          .attr('id', hash)
          .appendTo(document.body);

        // reload hash
        window.location.hash = '';
        window.location.hash = hash;

        // reset as before
        setTimeout(function ()
        {
          triggerElement.remove();
          section.attr('id', hash);

          that.to(hash);
        }, 0);

      }
    }
  }


  $('a').click(function (event)
  {
    var
      href = $(this).attr('href'),
      hash = href ? href.replace(/^#/, '') : false;

    if (href && href.substring(0, 1) == '#')
    {
      // is #-link
      event.preventDefault();

      that.changeHash(hash);
    }
  });

  $('document').ready(function ()
  {
    // load page
    var hash = window.location.hash.substring(1);

    that.changeHash(hash);
  });

  $(window).on('hashchange', function ()
  {
    // change hash
    var hash = window.location.hash.substring(1);
    
    that.changeHash(hash);
  });

}