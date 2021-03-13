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
    hello.innerHTML = ( message +  "<br><hr></br>" + "Which way shall you wander?");
    let greeting = document.getElementById("greeting-question");
    greeting.appendChild(hello);
}

// To redirect user to appropriate page once choice is clicked
function sunChosen(){
const sunChosen = document.getElementById("sunCard");
sunChosen.addEventListener("click", function() {
    location.href = "/destinations.html?weather=sun";
});
}

function snowChosen(){
const snowChosen = document.getElementById("snowCard");
snowChosen.addEventListener("click", function() {
    location.href = "/destinations.html?weather=snow";
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

//To add and removed current class styling when buttons are clicked

$('#myBtnContainer').on('click', '.myBtn', function() {
  $(this).addClass('current').siblings().removeClass('current');
});

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

//To handle click events on cards and redirect to destination page 

function destinationChosen(category){
    $(`.${category}-card0`).click(function() {
  location.href = "destination.html"
  
}),
    $(`.${category}-card1`).click(function(category) {
    location.href = "destination.html";
    if(category === "sun"){
    destinationName.innerHTML = getDestination[1].name;
    destinationCostDay.innerHTML = getDestination[1].costday;
    destinationTransport.innerHTML = getDestination[1].transport;
    destinationMeals.innerHTML = getDestination[1].meals;
    destinationLanguage.innerHTML = getDestination[1].language;
    }else if (category === "snow") {
        destinationName.innerHTML = getDestination[7].name;
        destinationCostDay.innerHTML = getDestination[7].costday;
        destinationTransport.innerHTML = getDestination[7].transport;
        destinationMeals.innerHTML = getDestination[7].meals;
        destinationLanguage.innerHTML = getDestination[7].language;
    }
}), 
    $(`.${category}-card2`).click(function() {
  location.href = "destination.html"
}),
    $(`.${category}-card3`).click(function() {
  location.href = "destination.html"
}),
    $(`.${category}-card4`).click(function() {
  location.href = "destination.html"
}),
    $(`.${category}-card5`).click(function() {
  location.href = "destination.html"
})
}

//to add all replaceable information to local storage to be used for destination page 

var destinationObj = [
{
    name: "Munich",
    image: "https://cdn.pixabay.com/photo/2017/07/18/17/32/munich-2516492_1280.jpg",
    costday: "€109",
    transport:"€14",
    meals:"€20",
    language: "German (Native) - English (Widely spoken)",
},
{
    name: "Zurich",
    image: "https://cdn.pixabay.com/photo/2019/11/19/07/50/zurich-4636746__340.jpg",
    costday: "€168.65",
    transport:"€16.78",
    meals:"€36.08",
    language: "Swiss German (Native) - English (Widely spoken)",
},
{
    name: "Brasov",
    image: "https://cdn.pixabay.com/photo/2019/10/19/13/10/mountains-4561361_1280.jpg",
    costday: "€45.31",
    transport:"€13.42",
    meals:"€19.30",
    language: "Romanian (Native) - English (Widely spoken)",
},
{
    name: "Vienna",
    image: "https://cdn.pixabay.com/photo/2015/09/09/21/33/vienna-933500_1280.jpg",
    costday: "€117",
    transport:"€12",
    meals:"€23",
    language: "German (Native) - English (Widely spoken)",
},
{
    name: "Zakopane",
    image: "https://cdn.pixabay.com/photo/2019/01/26/19/44/zakopane-3956852_1280.jpg",
    costday: "€45.31",
    transport:"€3.93",
    meals:"€9.23",
    language: "Polish (Native) - English (Widely spoken)",
},
{
    name: "Reykjavik",
    image: "https://cdn.pixabay.com/photo/2019/01/02/10/23/iceland-3908508_1280.jpg",
    costday: "€179.55",
    transport:"€33.56",
    meals:"€21.81",
    language: "Icelandic (Native) - English (Widely spoken)",
}
]

let destinationObjString = JSON.stringify(destinationObj);
localStorage.setItem("destinationObj", destinationObjString);
let getDestination = JSON.parse(localStorage.getItem("destinationObj"));
console.log(getDestination);


let destinationName = document.getElementById("dName");
let destinationCostDay = document.getElementById("dayCost");
let destinationTransport = document.getElementById("transCost");
let destinationMeals = document.getElementById("mealCost");
let destinationLanguage = document.getElementById("language");

/*
destinationName.innerHTML = getDestination[1].name;
destinationName.innerHTML = getDestination[2].name;
destinationName.innerHTML = getDestination[3].name;
destinationName.innerHTML = getDestination[4].name;
destinationName.innerHTML = getDestination[5].name;*/
