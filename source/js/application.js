// #= require ./vendor/modernizr.min.js
// #= require ./vendor/jquery.min.js


#= require_tree ./vendor
#= require_tree ./lib
#= require events

// animation tim for page to flip
var anim = 200;

// stores data
var stores = [
   {value: 'Stockholm', id: '1'},
   {value: 'Ikano', id: '2'}
];

$('.typeahead').autocomplete(
{
  lookup: stores,
  onSelect: function(value)
  {
    // reset
    $('.typeahead').val('');

    // toggle store
    toggle_store(value.id)
  }
});