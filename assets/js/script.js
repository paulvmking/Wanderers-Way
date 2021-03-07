// To redirect user to appropriate page once choice is clicked

const sunChosen = document.getElementById("sun-1");
sunChosen.addEventListener("click", function() {
    location.href = 'sun.html';
});

const snowChosen = document.getElementById("snow-1");
snowChosen.addEventListener("click", function() {
    location.href = 'snow.html';
});

// To give user feedback via opacity change with mouseover/mouseout events

const sunCard = document.getElementById("sun-1");
const snowCard = document.getElementById("snow-1");

sunCard.addEventListener("mouseover", mouseEvent(sunCard, "mouseover"));
sunCard.addEventListener("mouseover", mouseEvent(sunCard, "mouseover"));
snowCard.addEventListener("mouseout", mouseEvent(snowCard, "mouseout"));
snowCard.addEventListener("mouseout", mouseEvent(snowCard, "mouseout"));

const mouseEvent = (card, action) => card.style.opacity = action === "mouseover" ? 0.8 : 1.0 ;

//to add active class to clicked button 

$('button').on('click', function(){
    $('button').removeClass('active');
    $(this).addClass('active');
});

//To clone cards on sun page 

function cloneFunction() {
let sunText = [
    {
        class: "barcelonaCard",
        name:"Barcelona",
        budget:"budget",
        price:"€€€",
        image:"assets/images/sun4.webp",
        location:"destination.html?location=barcelona"
    },
    {
        class: "parisCard",
        name:"Paris",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/paris1.jpg",
        location:"destination.html?location=paris"
    },
    {
        class: "lisbonCard",
        name:"Lisbon",
        budget:"budget",
        price:"€€",
        image:"assets/images/sun2.webp",
        location:"destination.html?location=lisbon"
    },
    {
        class: "romeCard",
        name:"Rome",
        budget:"luxury",
        price:"€€€€€",
        image:"assets/images/rome1.jpg",
        location:"destination.html?location=rome"
    },
    {
        class: "istanbulCard",
        name:"Istanbul",
        budget:"budget",
        price:"€€€",
        image:"assets/images/istanbul.jpg",
        location:"destination.html?location=istanbul"
    },
    {
        class: "athensCard",
        name:"Athens",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/athens2.jpg",
        location:"destination.html?location=athens"
    }];
for(var i = 0; i < sunText.length; i += 1) {
    let div = document.createElement("div");
    div.className = sunText[i].class;
    div.id = "card" + i;
    div.innerHTML =  `<img class="card-img-top" src="${sunText[i].image}" alt="Card image cap"><div class="card-body"><h5 class="card-title">${sunText[i].name}</h5><p class="card-text">${sunText[i].price}</p></div>`;
    let main = document.getElementById("main-row");
    main.appendChild(div);
}
}

function cloneFunction1() {
let snowText = [
    {
        class: "munichCard",
        name:"Munich",
        budget:"budget",
        price:"€€€",
        image:"assets/images/snow.jpg",
        location:"destination.html?location=munich"
    },
    {
        class: "zurichCard",
        name:"Zurich",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/switzerland-4974469_1280.webp",
        location:"destination.html?location=zurich"
    },
    {
        class: "brasovCard",
        name:"Brasov",
        budget:"budget",
        price:"€€",
        image:"assets/images/snow-5880000_1280.jpg",
        location:"destination.html?location=brasov"
    },
    {
        class: "viennaCard",
        name:"Vienna",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/vienna-2989786_1280.jpg",
        location:"destination.html?location=vienna"
    },
    {
        class: "zakopaneCard",
        name:"Zakopane",
        budget:"budget",
        price:"€€€",
        image:"assets/images/tatry-4359240_1280.jpg",
        location:"destination.html?location=zakopane"
    },
    {
        class: "reykjavikCard",
        name:"Reykjavik",
        budget:"luxury",
        price:"€€€€€",
        image:"assets/images/reykjavik-635330_1280.jpg",
        location:"destination.html?location=reykjavik"
    }];
for(var i = 0; i < snowText.length; i += 1) {
    let div = document.createElement("div");
    div.className = snowText[i].class;
    div.id = "card" + i;
    div.innerHTML = `<img class="card-img-top" src="${snowText[i].image}" alt="Card image cap"><div class="card-body"><h5 class="card-title">${snowText[i].name}</h5><p class="card-text">${snowText[i].price}</p></div>`;
    let main = document.getElementById("main-row");
    main.appendChild(div); 
}}

//to append footer in correct location


//To filter divs according to button clicked

//Sun toggle 

function showAllSun() {       
            $('.sun-card0').toggle(true);
            $('.sun-card1').toggle(true);
            $('.sun-card2').toggle(true);
            $('.sun-card3').toggle(true);
            $('.sun-card4').toggle(true);
            $('.sun-card5').toggle(true);
        };

function showBudgetSun() { 
            $('.sun-card0').toggle(true);
            $('.sun-card1').toggle(false);
            $('.sun-card2').toggle(false);
            $('.sun-card3').toggle(true);
            $('.sun-card4').toggle(true);
            $('.sun-card5').toggle(false);
        };

function showLuxurySun() {       
            $('.sun-card0').toggle(false);
            $('.sun-card1').toggle(true);
            $('.sun-card2').toggle(true);
            $('.sun-card3').toggle(false);
            $('.sun-card4').toggle(false);
            $('.sun-card5').toggle(true);
        };

//Snow toggle

function showAllSnow () {
            $('.snow-card0').toggle(true);
            $('.snow-card1').toggle(true);
            $('.snow-card2').toggle(true);
            $('.snow-card3').toggle(true);
            $('.snow-card4').toggle(true);
            $('.snow-card5').toggle(true);
}

function showBudgetSnow () {
            $('.snow-card0').toggle(true);
            $('.snow-card1').toggle(true);
            $('.snow-card2').toggle(false);
            $('.snow-card3').toggle(false);
            $('.snow-card4').toggle(true);
            $('.snow-card5').toggle(false);
}

function showLuxurySnow () {
            $('.snow-card0').toggle(false);
            $('.snow-card1').toggle(false);
            $('.snow-card2').toggle(true);
            $('.snow-card3').toggle(true);
            $('.snow-card4').toggle(false);
            $('.snow-card5').toggle(true);
}




