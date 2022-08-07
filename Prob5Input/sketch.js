let typing;
let check;
let button;
let slider;
let colors;
let y = 60;
let cx, cy;
let moving = false;
let rate = 5;

function setup() {
    createCanvas(800, 800);
    textSize(32);
    typing = select("#rate");
    check = select("#optin");
    button = select("#move");
    slider = select("#diameter");
    colors = select("#colors");
    cx = width / 2;
    cy = height / 2;
}

function move() {
    rate = Number(typing.value());
    if (rate === 0) {
        rate = 2;
    }
    if (keyIsDown(LEFT_ARROW)) {
        cx -= rate;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        cx += rate;
    }
    if (keyIsDown(UP_ARROW)) {
        cy -= rate;
    }
    if (keyIsDown(DOWN_ARROW)) {
        cy += rate;
    }
}

function draw() {
    if (check.checked() === true) {
        background(64, 25);
    } else {
        background(255,-1);
    }
    if (colors.value() === 'random'){
        fill(randomColor());
    }
    else {
        fill(colors.value());
    }

    circle(cx, cy, slider.value());

    if (moving) {
        cx += random(-5, 5);
        cy += random(-5, 5);
    }
    move();
}

function keyPressed() {
    if (key === "p") {
        moving = !moving;
    }
    if (key === "r") {
        cx = width / 2;
        cy = height / 2;
    }
}

function returnToCenter() {
    cx = width / 2;
    cy = height / 2;
}

function randomColor() {
    var r = Math.floor((Math.random() * 256) + 1);
    var g = Math.floor((Math.random() * 256) + 1);
    var b = Math.floor((Math.random() * 256) + 1);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}