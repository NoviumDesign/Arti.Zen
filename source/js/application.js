// #= require ./vendor/modernizr.min.js
// #= require ./vendor/jquery.min.js


#= require_tree ./vendor
#= require_tree ./lib
#= require events

// animation tim for page to flip
var anim = 200;

// stores data
var stores = [
   {value: 'Arti.Zen Eurostop (Halmstad)', id: '1'},
   {value: 'Arti.Zen Gränden (Linköping)', id: '2'},
   {value: 'Arti.Zen Helsingborg', id: '3'},
   {value: 'Arti.Zen Huddinge', id: '4'},
   {value: 'Arti.Zen Ikano (Linköping)', id: '5'},
   {value: 'Arti.Zen Jönköping', id: '6'},
   {value: 'Arti.Zen Norrköping', id: '7'},
   {value: 'Arti.Zen Stenungsund', id: '8'},
   {value: 'Arti.Zen Triangeln (Malmö)', id: '9'},
   {value: 'Arti.Zen TunaPark (Eskilstuna)', id: '10'},
   {value: 'Arti.Zen Väla (Helsingborg)', id: '11'}
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