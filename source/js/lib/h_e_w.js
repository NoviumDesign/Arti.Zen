var h_e_w = function ()
{
  var elem;

  elem = $('.hew');

  elem.each(function (i, val)
  {
    var w;

    w = $(this).outerWidth();

    $(this).height(w);
  });
}