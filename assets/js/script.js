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



