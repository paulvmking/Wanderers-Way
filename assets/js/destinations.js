const destinationsDiv = document.getElementById('destinations');
const queryParam = window.location.search;
const weather = new URLSearchParams(queryParam.slice(1)).getAll('weather')[0];

const renderDestinations = () => {
  const destinationsByWeather = locations.filter(loca => loca.weather === weather);

  let innerDestination = '';

  destinationsByWeather.map(dest => {
    return innerDestination = `${innerDestination}<a href="destination.html?destination=${dest.name}">${dest.name}</a>`;
  });

  destinationsDiv.innerHTML = innerDestination
}

renderDestinations();