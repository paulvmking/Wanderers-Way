const snowLocations = [
    {
        class: "munich-card",
        name:"Munich",
        budget:"budget",
        price:"€€€",
        image:"assets/images/snow.jpg",
        location:"destination.html?location=munich"
    },
    {
        class: "zurich-card",
        name:"Zurich",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/switzerland-4974469_1280.webp",
        location:"destination.html?location=zurich"
    },
    {
        class: "brasov-card",
        name:"Brasov",
        budget:"budget",
        price:"€€",
        image:"assets/images/snow-5880000_1280.jpg",
        location:"destination.html?location=brasov"
    },
    {
        class: "vienna-card",
        name:"Vienna",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/vienna-2989786_1280.jpg",
        location:"destination.html?location=vienna"
    },
    {
        class: "zakopane-card",
        name:"Zakopane",
        budget:"budget",
        price:"€€€",
        image:"assets/images/tatry-4359240_1280.jpg",
        location:"destination.html?location=zakopane"
    },
    {
        class: "reykjavik-card",
        name:"Reykjavik",
        budget:"luxury",
        price:"€€€€€",
        image:"assets/images/reykjavik-635330_1280.jpg",
        location:"destination.html?location=reykjavik"
    }];

const sunLocations = [
    {
        class: "barcelona-card",
        name:"Barcelona",
        budget:"budget",
        price:"€€€",
        image:"assets/images/sun4.webp",
        location:"destination.html?location=barcelona"
    },
    {
        class: "paris-card",
        name:"Paris",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/paris1.jpg",
        location:"destination.html?location=paris"
    },
    {
        class: "lisbon-card",
        name:"Lisbon",
        budget:"budget",
        price:"€€",
        image:"assets/images/sun2.webp",
        location:"destination.html?location=lisbon"
    },
    {
        class: "rome-card",
        name:"Rome",
        budget:"luxury",
        price:"€€€€€",
        image:"assets/images/rome1.jpg",
        location:"destination.html?location=rome"
    },
    {
        class: "istanbul-card",
        name:"Istanbul",
        budget:"budget",
        price:"€€€",
        image:"assets/images/istanbul.jpg",
        location:"destination.html?location=istanbul"
    },
    {
        class: "athens-card",
        name:"Athens",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/athens2.jpg",
        location:"destination.html?location=athens"
    }];

for(var i = 0; i < snowLocations.length; i += 1) {
    let div = document.createElement("div");
    div.className = "snow-card" + i ;
    div.id = snowLocations[i].class;
    div.innerHTML = `<img class="card-img-top" src="${snowLocations[i].image}" alt="Card image cap"><div class="card-body"><h4 class="card-title">${snowLocations[i].name}</h4><p class="card-text">${snowLocations[i].price}</p></div>`;
    let main = document.getElementById("main-row");
    main.appendChild(div); 
    }

for(var i = 0; i < sunLocations.length; i += 1) {
    let div = document.createElement("div");
    div.className = "sun-card" + i ;
    div.id = sunLocations[i].class;
    div.innerHTML =  `<img class="card-img-top" src="${sunLocations[i].image}" alt="Card image cap"><div class="card-body"><h4 class="card-title">${sunLocations[i].name}</h5><p class="card-text">${sunLocations[i].price}</p></div>`;
    let main = document.getElementById("main-row");
    main.appendChild(div);
    }