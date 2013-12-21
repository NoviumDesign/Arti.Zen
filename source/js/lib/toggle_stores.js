var toggle_store = function (id)
{
  $(".popwrap#" + id).toggleClass( "hide" );

  // show map
  show_map(id);
}