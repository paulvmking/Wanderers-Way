const queryParam = window.location.search;
const destination = new URLSearchParams(queryParam.slice(1)).getAll('destination')[0];
const selectedLocation = locations.filter(loc => loc.name === destination)[0];

const destinationDiv = document.getElementById('destination');

const renderDestination = () => {
  let innerDestination = '';

  Object.keys(selectedLocation).filter(key => {
    return innerDestination = `
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 img-container">
                    <div class="main-destination-image" id="dImage">
                        <img src="${selectedLocation.mainimage}" alt="${selectedLocation.class}">
                        <div class="centered">
                            <h1 id="dName">${selectedLocation.name}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid my-3 text-center">
            <div class="row">
                <div class="col-12">
                    <div class="city-info">
                        <h3>City Information<h5>All prices in euros € regardless of local currency</h5></h3>
                        <p>Registration required to see full prices and book Locations</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container text-center">
            <div class="row">
                <div class="col-12">
                    <div class="destination-text">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Average Cost of day</td>
                                    <td id="dayCost">${selectedLocation.costday}</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Average Cost of transport</td>
                                    <td id="transCost">${selectedLocation.transport}</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Average Cost of Meals</td>
                                    <td id="mealCost">${selectedLocation.meals}</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Local Language</td>
                                    <td id="language">${selectedLocation.language}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class= "container">
          <div class= "row">
            <div class="col-12 backBtn">
              <button class ="myBtn" onclick="backChosen()"  >${selectedLocation.button}</button>
            </div>
          </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-6 map-container">
                    <div class="map-buttons text-center my-5" id="map-buttons">
                        <button class="mapBtn" id="hotelBtn">Hotels</button>
                        <button class="mapBtn" id="foodBtn">Food & Drinks</button>
                        <button class="mapBtn" id="thingsBtn">Things to do</button>
                    </div>
                </div>
                <div class="col-6">
                    <div class="map-right my-5" id="map-canvas">
                    </div>
                </div>
            </div>
        </div>
    </br>`;
  });

  destinationDiv.innerHTML = innerDestination;
  console.log(destinationDiv);
}
renderDestination();


function backChosen(){
    let backChosen = selectedLocation.link;
    location.href = backChosen;
}



