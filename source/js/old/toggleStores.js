var toggleStore = function (id)
{
  $(".popwrap#" + id).toggleClass( "hide" );

  // show map
  show_map(id);
}