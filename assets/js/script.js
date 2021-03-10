// To greet user depending on time of day and give them main choice

function loadWelcome() {
    let today = new Date();
    let hourNow = today.getHours();
    let message;

    if (hourNow > 18) {
        message = 'Good Evening!';
    }else if (hourNow > 12) {
        message = 'Good Afternoon!';
    }else if (hourNow > 0) {
        message = 'Good Morning!';
    }else {
        message = 'Welcome!';
    }

    let hello = document.createElement('h1');
    hello.innerHTML = ("<h1>" + message +  "<br><hr></br>" + "Which way shall you wander?" + "</h1>");
    let greeting = document.getElementById("greeting-question");
    greeting.appendChild(hello);
}

// To redirect user to appropriate page once choice is clicked
function sunChosen(){
const sunChosen = document.getElementById("sunCard");
sunChosen.addEventListener("click", function() {
    location.href = 'sun.html';
});
}

function snowChosen(){
const snowChosen = document.getElementById("snowCard");
snowChosen.addEventListener("click", function() {
    location.href = 'snow.html';
});
}

// To give user feedback via opacity change with mouseover/mouseout events
function makeOpacity(){
const sunCard = document.getElementById("sunCard");
const snowCard = document.getElementById("snowCard");
const mouseEvent = (card, action) => card.style.opacity = action === "mouseover" ? 0.7 : 1.0 ;

sunCard.addEventListener("mouseover",() =>  mouseEvent(sunCard, "mouseover"));
sunCard.addEventListener("mouseout", () => mouseEvent(sunCard, "mouseout"));
snowCard.addEventListener("mouseover", () => mouseEvent(snowCard, "mouseover"));
snowCard.addEventListener("mouseout", () => mouseEvent(snowCard, "mouseout"));
}

//to add active class to clicked button 



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
    div.id = sunLocations[i].class;
    div.innerHTML =  `<img class="card-img-top" src="${sunLocations[i].image}" alt="Card image cap"><div class="card-body"><h4 class="card-title">${sunLocations[i].name}</h5><p class="card-text">${sunLocations[i].price}</p></div>`;
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
    div.id = snowLocations[i].class;
    div.innerHTML = `<img class="card-img-top" src="${snowLocations[i].image}" alt="Card image cap"><div class="card-body"><h4 class="card-title">${snowLocations[i].name}</h4><p class="card-text">${snowLocations[i].price}</p></div>`;
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

console.log(localStorage);

const selectedPage = [
{
    name: "Barcelona",
    image: "https://cdn.pixabay.com/photo/2018/03/14/23/00/barcelona-3226639_1280.jpg",
    costday: "€116",
    transport:"€15",
    meals:"€23",
    language: "Spanish (Native) - English (Widely spoken)",
},
{
    name: "Paris",
    image: "https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg",
    costday: "€162",
    transport:"€16",
    meals:"€29",
    language: "French (Native) - English (Widely spoken)",
},
{
    name: "Lisbon",
    image: "https://cdn.pixabay.com/photo/2016/11/05/22/13/lisbon-1801727_1280.jpg",
    costday: "€96",
    transport:"€17",
    meals:"€31",
    language: "Portugese (Native) - English (Widely spoken)",
},
{
    name: "Rome",
    image: "https://cdn.pixabay.com/photo/2017/12/28/08/18/arch-of-constantine-3044634_1280.jpg",
    costday: "€131",
    transport:"€17",
    meals:"€37",
    language: "Italian (Native) - English (Widely spoken)",
},
{
    name: "Istanbul",
    image: "https://cdn.pixabay.com/photo/2016/03/16/16/31/ayasofia-1261148__340.jpg",
    costday: "€25",
    transport:"€1.70",
    meals:"€3.85",
    language: "Turkish (Native) - English (Widely spoken)",
},
{
    name: "Athens",
    image: "https://cdn.pixabay.com/photo/2020/03/18/11/28/athens-4943645_1280.jpg",
    costday: "€72",
    transport:"€13",
    meals:"€20",
    language: "Greek (Native) - English (Widely spoken)",
},
{
    name: "Munich",
    image: "https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg",
    costday: "€109",
    transport:"€14",
    meals:"€20",
    language: "German (Native) - English (Widely spoken)",
},
{
    name: "Zurich",
    image: "https://cdn.pixabay.com/photo/2016/11/05/22/13/lisbon-1801727_1280.jpg",
    costday: "€168.65",
    transport:"€16.78",
    meals:"€36.08",
    language: "Swiss German (Native) - English (Widely spoken)",
},
{
    name: "Brasov",
    image: "https://cdn.pixabay.com/photo/2017/12/28/08/18/arch-of-constantine-3044634_1280.jpg",
    costday: "€45.31",
    transport:"€13.42",
    meals:"€19.30",
    language: "Romanian (Native) - English (Widely spoken)",
},
{
    name: "Vienna",
    image: "https://cdn.pixabay.com/photo/2016/03/16/16/31/ayasofia-1261148__340.jpg",
    costday: "€117",
    transport:"€12",
    meals:"€23",
    language: "German (Native) - English (Widely spoken)",
},
{
    name: "Zakopane",
    image: "https://cdn.pixabay.com/photo/2020/03/18/11/28/athens-4943645_1280.jpg",
    costday: "€45.31",
    transport:"€3.93",
    meals:"€9.23",
    language: "Polish (Native) - English (Widely spoken)",
},
{
    name: "Reykjavik",
    image: "https://cdn.pixabay.com/photo/2020/03/18/11/28/athens-4943645_1280.jpg",
    costday: "€179.55",
    transport:"€33.56",
    meals:"€21.81",
    language: "Icelandic (Native) - English (Widely spoken)",
}
]