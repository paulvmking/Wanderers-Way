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
let destinationUrl = "destinations.html?weather=sun";
const sunChosen = document.getElementById("sunCard");
sunChosen.addEventListener("click", function() {
    if (parent.hostname === "paulvmking.github.io"){
        parent.location.href = destinationUrl;
    }else {
        location.href = destinationUrl;
    }
});
}

function snowChosen(){
const destinationUrl = "destinations.html?weather=snow";
const snowChosen = document.getElementById("snowCard");
snowChosen.addEventListener("click", function() {
    if (parent.hostname === "paulvmking.github.io"){
        parent.location.href = destinationUrl;
    }else {
        location.href = destinationUrl;
    }
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
