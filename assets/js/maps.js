// To convert strings in objects from array into usable numbers for longtitudes and latitudes

let centerCoordLat = parseFloat(selectedLocation.lat);
let centerCoordLong = parseFloat(selectedLocation.long);
let hotelCoordLat = parseFloat(selectedLocation.hotelsLat);
let hotelCoordLong = parseFloat(selectedLocation.hotelsLong);
let thingsCoordLat = parseFloat(selectedLocation.thingsToDoLat);
let thingsCoordLong = parseFloat(selectedLocation.thingsToDoLong);
let foodDrinksLat = parseFloat(selectedLocation.foodDrinksLat);
let foodDrinksLong = parseFloat(selectedLocation.foodDrinksLong);
let map;
let markers = [];

// To initialise map and centre it upon destination that has been chosen

function initMap() {
  let hotel = { lat: hotelCoordLat, lng: hotelCoordLong };
  let things = { lat: thingsCoordLat, lng: thingsCoordLong };
  let food = { lat: foodDrinksLat, lng: foodDrinksLong };

  map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 8,
    center: {
      lat: centerCoordLat,
      lng: centerCoordLong,
    },
  });

  // To show and hide markers when buttons are clicked for hotels, food and drinks and things to do. Taken and edited to purpose from google maps API documentation.

  function addMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map,
    });
    markers.push(marker);
  }

  function clearMarkers() {
    setMapOnAll(null);
  }

  $(document).ready(function () {
    $("#hotelBtn").on("click", (event) => {
      clearMarkers();
      addMarker(hotel);
    });
  });

  $(document).ready(function () {
    $("#thingsBtn").on("click", (event) => {
      clearMarkers();
      addMarker(things);
    });
  });

  $(document).ready(function () {
    $("#foodBtn").on("click", (event) => {
      clearMarkers();
      addMarker(food);
    });
  });

  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  //To add and remove current class to provide visual to user when button has been clicked

  $("#map-buttons").on("click", ".mapBtn", function () {
    $(this).addClass("current").siblings().removeClass("current");
  });
}
