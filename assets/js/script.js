// To greet user depending on time of day and ask them to choose a way to wander 
    
    let today = new Date();
    let hourNow = today.getHours();
    let message;

    if (hourNow > 18) {
        message = 'Good evening!';
    }else if (hourNow > 12) {
        message = 'Good afternoon!';
    }else if (hourNow > 0) {
        message = 'Good morning!';
    }else {
        message = 'Welcome!';
    }

    let hello = document.createElement('h1');
    hello.innerHTML = ("<h1>" + message +  "<br></br>" + "Which way shall you wander?" + "</h1>");
    let greeting = document.getElementById("greeting-question");
    greeting.appendChild(hello);

// To redirect user to appropriate page once choice is clicked

const sunChosen = document.getElementById("sunCard");
sunChosen.addEventListener("click", function() {
    location.href = 'sun.html';
});

const snowChosen = document.getElementById("snowCard");
snowChosen.addEventListener("click", function() {
    location.href = 'snow.html';
});

// To give user feedback via opacity change with mouseover/mouseout events

const sunCard = document.getElementById("sunCard");
const snowCard = document.getElementById("snowCard");
const mouseEvent = (card, action) => card.style.opacity = action === "mouseover" ? 0.7 : 1.0 ;

sunCard.addEventListener("mouseover",() =>  mouseEvent(sunCard, "mouseover"));
sunCard.addEventListener("mouseout", () => mouseEvent(sunCard, "mouseout"));
snowCard.addEventListener("mouseover", () => mouseEvent(snowCard, "mouseover"));
snowCard.addEventListener("mouseout", () => mouseEvent(snowCard, "mouseout"));


//to add active class to clicked button 

$('button').on('click', function(){
    $('button').removeClass('current');
    $(this).addClass('current');
});

//To build cards on sun page  

function showSunLocations() {
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
    for(var i = 0; i < sunLocations.length; i += 1) {
    let div = document.createElement("div");
    div.className = "sun-card" + i ;
    div.id = "card" + i;
    div.innerHTML =  `<img class="card-img-top" src="${sunLocations[i].image}" alt="Card image cap"><div class="card-body"><h5 class="card-title">${sunLocations[i].name}</h5><p class="card-text">${sunLocations[i].price}</p></div>`;
    let main = document.getElementById("main-row");
    main.appendChild(div);
  }
}

//To build cards on snow page

function showSnowLocations() {
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
    for(var i = 0; i < snowLocations.length; i += 1) {
    let div = document.createElement("div");
    div.className = "snow-card" + i ;
    div.id = "card" + i;
    div.innerHTML = `<img class="card-img-top" src="${snowLocations[i].image}" alt="Card image cap"><div class="card-body"><h5 class="card-title">${snowLocations[i].name}</h5><p class="card-text">${snowLocations[i].price}</p></div>`;
    let main = document.getElementById("main-row");
    main.appendChild(div); 
  }
}

//jQuery To filter divs according to button clicked

//all toggle 

function showAll(category) {       
            $(`.${category}-card0`).toggle(true);
            $(`.${category}-card1`).toggle(true);
            $(`.${category}-card2`).toggle(true);
            $(`.${category}-card3`).toggle(true);
            $(`.${category}-card4`).toggle(true);
            $(`.${category}-card5`).toggle(true);
        };

//budget toggle

function showBudget(category) { 
            $(`.${category}-card0`).toggle(true);
            $(`.${category}-card1`).toggle(false);
            $(`.${category}-card2`).toggle(true);
            $(`.${category}-card3`).toggle(false);
            $(`.${category}-card4`).toggle(true);
            $(`.${category}-card5`).toggle(false);
        };

//luxury toggle

function showLuxury(category) {       
            $(`.${category}-card0`).toggle(false);
            $(`.${category}-card1`).toggle(true);
            $(`.${category}-card2`).toggle(false);
            $(`.${category}-card3`).toggle(true);
            $(`.${category}-card4`).toggle(false);
            $(`.${category}-card5`).toggle(true);
        };

