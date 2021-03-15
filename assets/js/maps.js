const apiKey = "AIzaSyAEu1mtMmyOj19JwZwkD93bJvNCcDdgGNA";

function initMap(){
    let destMap = new google.maps.Map(document.getElementById("map-canvas"), {
        zoom: 3,
        center:{
            lat:48.141539,
            lng:11.539766
        }
    })
}