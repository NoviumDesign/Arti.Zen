var centerTextholder = function ()
{
  var
    textholder = $('.textholder.center'),
    height = textholder.outerHeight(),
    containerHeight = textholder.parent().height();

  textholder.css('marginTop', (containerHeight - height)/2 + 'px');
}

$('document').ready(function ()
{
  // wait for section resize
  setTimeout(function() {
    centerTextholder();
  }, 0);
});

$(window).resize(function ()
{
  centerTextholder();
});