const apiKey = "AIzaSyAEu1mtMmyOj19JwZwkD93bJvNCcDdgGNA";

let centerCoordLat = parseFloat(selectedLocation.lat);
let centerCoordLong = parseFloat(selectedLocation.long);

function initMap(){
    let destMap = new google.maps.Map(document.getElementById("map-canvas"), {
        zoom: 6,
        center:{
            lat:centerCoordLat,
            lng:centerCoordLong
        }
    })
}

let hotelLabels = "Hotels"
let foodLabels = "Food and Drinks"
let thingsLabels = "Things to do"

