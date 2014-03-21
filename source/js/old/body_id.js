var body_id = function ()
{
  var section, at, id;

  section = find_section();

  if (section[0] === section[1])
  {
    at = $(section[1]); 
  }
  else
  {
    at = $(section[1]).prev('section, .section'); 
  }

  id = at.attr('id');

  $('body').attr('id', id);
}