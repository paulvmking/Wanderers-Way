let centerCoordLat = parseFloat(selectedLocation.lat);
let centerCoordLong = parseFloat(selectedLocation.long);

let hotelCoordLat = parseFloat(selectedLocation.hotelsLat);
let hotelCoordLong = parseFloat(selectedLocation.hotelsLong);
let thingsCoordLat = parseFloat(selectedLocation.thingsToDoLat);
let thingsCoordLong = parseFloat(selectedLocation.thingsToDoLong);
let foodDrinksLat = parseFloat(selectedLocation.foodDrinksLat);
let foodDrinksLong = parseFloat(selectedLocation.foodDrinksLong);
let map;
let markers = []

function initMap(){
    let hotel = {lat:hotelCoordLat, lng:hotelCoordLong};
    let things = {lat:thingsCoordLat, lng:thingsCoordLong};
    let food = {lat:foodDrinksLat, lng:foodDrinksLong};

    map = new google.maps.Map(document.getElementById("map-canvas"), {
        zoom: 8,
        center:{
            lat:centerCoordLat,
            lng:centerCoordLong
        }
    })

    function addMarker(location) {
        var marker = new google.maps.Marker({
            position:location,
            map:map
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
        })
    })

    $(document).ready(function () {
        $("#thingsBtn").on("click", (event) => {
            clearMarkers();
            addMarker(things);
        })
    })

    $(document).ready(function () {
        $("#foodBtn").on("click", (event) => {
            clearMarkers();
            addMarker(food);
        })
    })

    function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
}
