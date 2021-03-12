const locations = [
    {
        class: "munich-card",
        weather:"snow",
        name:"Munich",
        budget:"budget",
        price:"€€€",
        image:"assets/images/snow.jpg",
        location:"destination.html?location=munich"
    },
    {
        class: "zurich-card",
        weather:"snow",
        name:"Zurich",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/switzerland-4974469_1280.webp",
        location:"destination.html?location=zurich"
    },
    {
        class: "brasov-card",
        weather:"snow",
        name:"Brasov",
        budget:"budget",
        price:"€€",
        image:"assets/images/snow-5880000_1280.jpg",
        location:"destination.html?location=brasov"
    },
    {
        class: "vienna-card",
        weather:"snow",
        name:"Vienna",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/vienna-2989786_1280.jpg",
        location:"destination.html?location=vienna"
    },
    {
        class: "zakopane-card",
        weather:"snow",
        name:"Zakopane",
        budget:"budget",
        price:"€€€",
        image:"assets/images/tatry-4359240_1280.jpg",
        location:"destination.html?location=zakopane"
    },
    {
        class: "reykjavik-card",
        weather:"snow",
        name:"Reykjavik",
        budget:"luxury",
        price:"€€€€€",
        image:"assets/images/reykjavik-635330_1280.jpg",
        location:"destination.html?location=reykjavik"
    },
    {
        class: "barcelona-card",
        weather:"sun",
        name:"Barcelona",
        budget:"budget",
        price:"€€€",
        image:"assets/images/sun4.webp",
        location:"destination.html?location=barcelona"
    },
    {
        class: "paris-card",
        weather:"sun",
        name:"Paris",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/paris1.jpg",
        location:"destination.html?location=paris"
    },
    {
        class: "lisbon-card",
        weather:"sun",
        name:"Lisbon",
        budget:"budget",
        price:"€€",
        image:"assets/images/sun2.webp",
        location:"destination.html?location=lisbon"
    },
    {
        class: "rome-card",
        weather:"sun",
        name:"Rome",
        budget:"luxury",
        price:"€€€€€",
        image:"assets/images/rome1.jpg",
        location:"destination.html?location=rome"
    },
    {
        class: "istanbul-card",
        weather:"sun",
        name:"Istanbul",
        budget:"budget",
        price:"€€€",
        image:"assets/images/istanbul.jpg",
        location:"destination.html?location=istanbul"
    },
    {
        class: "athens-card",
        weather:"sun",
        name:"Athens",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/athens2.jpg",
        location:"destination.html?location=athens"
    }];

for(var i = 0; i < locations.length; i += 1) {
    let div = document.createElement("div");
    div.className = "snow-card" + i ;
    div.id = locations[i].class;
    div.innerHTML = `<img class="card-img-top" src="${locations[i].image}" alt="Card image cap"><div class="card-body"><h4 class="card-title">${locations[i].name}</h4><p class="card-text">${locations[i].price}</p></div>`;
    let main = document.getElementById("destinations");
    main.appendChild(div); 
    }
