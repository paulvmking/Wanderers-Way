const queryParam = window.location.search;
const destination = new URLSearchParams(queryParam.slice(1)).getAll('destination')[0];
const selectedLocation = locations.filter(loc => loc.name === destination)[0];

const destinationDiv = document.getElementById('destination');

const renderDestination = () => {
  let innerDestination = '';

  Object.keys(selectedLocation).map(key => {
    return innerDestination += `${key} - ${selectedLocation[key]}`;
  });

  destinationDiv.innerHTML = innerDestination;
  console.log(destinationDiv);
}

renderDestination();
