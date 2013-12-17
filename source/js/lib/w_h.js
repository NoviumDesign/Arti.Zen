var w_h = function ()
{
  var w_height;

  w_height = $(window).height();

  $('.section_holder > .h100').outerHeight(w_height);
  $('.section_holder > .mh100').css('minHeight', w_height + 'px');
}