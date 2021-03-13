const queryParam = window.location.search;
const destination = new URLSearchParams(queryParam.slice(1)).getAll('destination')[0];
const selectedLocatin = locations.filter(loc => loc.name === destination)[0];

const destinationDiv = document.getElementById('destination');

const renderDestination = () => {
  let innerDestination = '';

  Object.keys(selectedLocatin).map(key => {
    return innerDestination += `${key} - ${selectedLocatin[key]}<br/>`;
  });

  destinationDiv.innerHTML = innerDestination
}

renderDestination();
