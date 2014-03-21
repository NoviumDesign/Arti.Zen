var read_hash = function ()
{
  var hash, id;

  hash = window.location.hash;

  // scroll to top is needed
  window.location.hash = '#';

  navigate(hash);
}