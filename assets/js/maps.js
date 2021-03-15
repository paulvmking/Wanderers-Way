const apiKey = "AIzaSyAEu1mtMmyOj19JwZwkD93bJvNCcDdgGNA";

let centerCoordLat = parseFloat(selectedLocation.lat);
let centerCoordLong = parseFloat(selectedLocation.long);

let hotelCoordLat = parseFloat(selectedLocation.hotelsLat);
let hotelCoordLong = parseFloat(selectedLocation.hotelsLong);
let thingsCoordLat = parseFloat(selectedLocation.thingsToDoLat);
let thingsCoordLong = parseFloat(selectedLocation.thingsToDoLong);
let foodDrinksLat = parseFloat(selectedLocation.foodDrinksLat);
let foodDrinksLong = parseFloat(selectedLocation.foodDrinksLong);


function initMap(){
    let destMap = new google.maps.Map(document.getElementById("map-canvas"), {
        zoom: 8,
        center:{
            lat:centerCoordLat,
            lng:centerCoordLong
        }
    })

    let labels = "ABC";

    let allLocationsShow = [
    {lat:hotelCoordLat, lng:hotelCoordLong},
    {lat:thingsCoordLat, lng:thingsCoordLong},
    {lat:foodDrinksLat, lng:foodDrinksLong}
    ];

    let markers = allLocationsShow.map(function(location, i ){
        return new google.maps.Marker({
            position:location,
            label:labels[i % labels.length]
        });
    })
    let markerClusters = new MarkerClusterer(destMap, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}


