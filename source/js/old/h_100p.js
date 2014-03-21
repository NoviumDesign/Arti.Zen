var h_100p = function ()
{
  var elem;

  elem = $('.hp100');

  elem.each(function (i, val)
  {
    var h;

    h = $(this).parent().outerHeight();

    $(this).height(h);
  });
}