var show_map = function (id)
{
  var map, lng, lat, address, city, zip;

  map = $(".popwrap#" + id).find('.map');

  lng = map.attr('data-lng');
  lat = map.attr('data-lat');
  address = map.attr('data-address');
  city = map.attr('data-city');
  zip = map.attr('data-zip');

  if ( ! lng)
  {
    // need to get coords

    $.ajax(
    {
      url: 'http://maps.googleapis.com/maps/api/geocode/json',
      type: 'GET',
      dataType: 'json',
      data: {
        address: address + ', ' + zip + ', ' + zip,
        region: '.se',
        sensor: false
      },
      success: function(response)
      {
        var lng, lat;

        lng = response.results[0].geometry.location.lng;
        lat = response.results[0].geometry.location.lat;

        map.attr('data-lng', lng);
        map.attr('data-lat', lat);

        show_map(id);

        return;
      }
    });

  }
  else
  {
    // show the map
    initialize_map(lat, lng, map[0])
  }
}

function initialize_map(lat, lng, elem)
{
  var mapOptions, map, lat_lng, marker

  // sätter koordinat
  lat_lng = new google.maps.LatLng(lat, lng);

  //
  mapOptions = {
    zoom: 16,
    center: lat_lng,
    disableDefaultUI: true
  };

  //
  map = new google.maps.Map(elem, mapOptions);

  // sättur ut pekare
  marker = new google.maps.Marker({
    position: lat_lng,
    map: map,
    title: 'Butik'
  });
}