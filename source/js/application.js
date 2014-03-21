#= require ./vendor/autocomplete.js
#= require ./vendor/scroll-start.js
#= require ./vendor/jquery-mousewheel.min.js
#= require_tree ./lib
#= require events

var
  sections = new Sections(),
  navigate = new Navigate(sections),
  scroll = new Scroll(sections),
  swipe = new Swipe(scroll);