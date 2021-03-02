// To redirect user to appropriate page once choice is clicked

let sunFunction = document.getElementById("sun-1");

sunFunction.addEventListener("click", function() {
    location.href = 'sun.html';
});

let snowFunction = document.getElementById("snow-1");

snowFunction.addEventListener("click", function() {
    location.href = 'snow.html';
});

// To give user feedback via opacity change with mouseover/mouseout events

let sunEffect1 = document.getElementById("sun-1");

sunEffect1.addEventListener("mouseover", function() {
    sunEffect1.style.opacity = 0.8;
});

sunEffect1.addEventListener("mouseout", function() {
    sunEffect1.style.opacity = 1.0;
});

let snowEffect1 = document.getElementById("snow-1");

snowEffect1.addEventListener("mouseover", function() {
    snowEffect1.style.opacity = 0.8;
});

snowEffect1.addEventListener("mouseout", function() {
    snowEffect1.style.opacity = 1.0;
});

//To clone cards on sun page 

function cloneFunction() {
let sunText = [
    {
        name:"Barcelona",
        price:"€€€",
        image:"assets/images/sun4.webp"
    },
    {
        name:"Paris",
        price:"€€€€",
        image:"assets/images/paris1.jpg"
    },
    {
        name:"Rome",
        price:"€€€€€",
        image:"assets/images/rome1.jpg"
    },
    {
        name:"Lisbon",
        price:"€€",
        image:"assets/images/sun2.webp"
    },
    {
        name:"Istanbul",
        price:"€€€",
        image:"assets/images/istanbul.jpg"
    },
    {
        name:"Athens",
        price:"€€€€",
        image:"assets/images/athens2.jpg"
    }];
for(var i = 0; i < sunText.length; i += 1) {
    let div = document.createElement("div");
    div.className = "sun-card" + i;
    div.id = "card" + i;
    div.innerHTML =  `<img class="card-img-top" src="${sunText[i].image}" alt="Card image cap"><div class="card-body"><h5 class="card-title">${sunText[i].name}</h5><p class="card-text">${sunText[i].price}</p></div>`;
    document.body.appendChild(div);
}
}


function cloneFunction1() {
let snowText = [
    {
        name:"Brasov",
        price:"€€"
    },
    {
        name:"Zurich",
        price:"€€€€"
    },
    {
        name:"Vienna",
        price:"€€€€"
    },
    {
        name:"Zakopane",
        price:"€€€"
    },
    {
        name:"Reykjavik",
        price:"€€€€€"
    }];
for(var i = 0; i < snowText.length; i += 1) {
    let div = document.createElement("div");
    div.className = "snow-card" + i;
    div.id = "card" + i;
    div.innerHTML = JSON.stringify(snowText[i].name + "<br></br>" + snowText[i].price).replace(/\"/g, "");
    document.body.appendChild(div);
}}
