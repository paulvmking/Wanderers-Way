// To filter what cards are shown depending on the url of the current page and what category sun or snow was clicked
// Mentor assisted with implementation of Url Parameters

const destinationsDiv = document.getElementById("destinations");
const queryParam = window.location.search;
const weather = new URLSearchParams(queryParam.slice(1)).getAll("weather")[0];

const renderDestinations = () => {
  const destinationsByWeather = locations.filter(
    (loca) => loca.weather === weather
  );
  let innerDestination = "";

  destinationsByWeather.map((dest) => {
    return (innerDestination = `${innerDestination}<a class="hover ${dest.name}-card" href="destination.html?destination=${dest.name}"><img class="card-img-top" src="${dest.image}" alt="Card image cap"><div class="card-body"><h4 class="card-title">${dest.name}</h4><p class="card-text">${dest.price}</p></div></a>`);
  });

  destinationsDiv.innerHTML = innerDestination;
};

renderDestinations();

// To show only selected budget locations after button click

function showBudget(category) {
  if (category === "all") {
    locations.map((location) => $(`.${location.name}-card`).toggle(true));
  } else {
    let selectedLocation = locations.filter(
      (location) => location.budget === category
    );
    let nonSelectedLocation = locations.filter(
      (location) => location.budget !== category
    );

    selectedLocation.map((location) =>
      $(`.${location.name}-card`).toggle(true)
    );
    nonSelectedLocation.map((location) =>
      $(`.${location.name}-card`).toggle(false)
    );
  }
}
