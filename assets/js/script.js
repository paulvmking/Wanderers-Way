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
        name:"Paris",
        price:"€€€€"
    },
    {
        name:"Rome",
        price:"€€€€€"
    },
    {
        name:"Lisbon",
        price:"€€"
    },
    {
        name:"Turkey",
        price:"€€€"
    },
    {
        name:"Athens",
        price:"€€€€"
    }];
for(var i = 0; i < sunText.length; i += 1) {
    let div = document.createElement("div");
    div.className = "sun";
    div.id = "card" + i;
    div.innerHTML = JSON.stringify(sunText[i].name + "<br></br>" + sunText[i].price).replace(/\"/g, "");
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
    div.className = "sun";
    div.id = "card" + i;
    div.innerHTML = JSON.stringify(snowText[i].name + "<br></br>" + snowText[i].price).replace(/\"/g, "");
    document.body.appendChild(div); 
    
}}



