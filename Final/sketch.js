let canvasElement;
let sp = []; 
let num = 1;
let started = false;
let position = 0;
let analyzer;
let songs = [];
let currentSong = 0;
let slider;
let slider2;
let button;
let button2;
let dist = 1000;
let mic;
let micInputOn = false;
let firstMicToggle = true;
let isMoving = true;

let openNavigation = false;

let introDiv = document.getElementById('introDiv');

let numElements = document.getElementById('numElements');
numElements.innerText = '0';  

let curSelectedElement = -1
let selectedElement = document.getElementById('selectedElement');
selectedElement.innerText = curSelectedElement;


function preload() {

    // Credit: The Infinite Dream by Droid Bishop 
    let song0 = loadSound('music/TheInfiniteDream.mp3'); //Droid Bishop
    let song1 = loadSound('music/ShowCaseMe.mp3');//Showcase Me - Ahjay Stelino
    let song2 = loadSound('music/80sRetroSynthWave.wav');//80s Synth Wave - VXZ
    let song3 = loadSound('music/DarkSynthwave.mp3');//Dark Synthwave - dimadjdocent
    let song4 = loadSound('music/CyberVintage.mp3');//Cyber Vintage - dimadjdocent
    
    songs.push(song0);
    songs.push(song1);
    songs.push(song2);
    songs.push(song3);
    songs.push(song4);
  }

function setup() {
    canvasElement = createCanvas(windowWidth, windowHeight);
    canvasElement.parent('canvasContainer');

    background(25);

    //analyzer = new p5.Amplitude();
    slider = select("#spin");
    slider2 = select("#size");
    button = select('#color1');
    button2 = select('#color2');

    mic = new p5.AudioIn();

    setInterval(switchEaseOn, 6000);
    let b = random(0,255);

    for (let i = 0; i < num; i++) {
        let s = random(20, 40); // size
        let x = random(s, width - s); // x position
        let y = random(s, height - s); // y position
        let a = random(-10, 10); // angle increment
        let e = random(0.05, 0.01); //
        let r = random(0,255);
        let g = random(0,255);
        let mx = random(0, width);
        let my = random(0, height);
        let o = createVector(random(500,width),random(500,height));
        sp[i] = new Spot(x, y, s, a, e, r, g, b, mx, my, 10, o, i);
    }

    angleMode(DEGREES);
    rectMode(CENTER);
    noLoop();
}

function mousePressed() {
    isMoving = !isMoving;
}

function keyPressed() {
    // Start and Stop program
    if(keyCode === 32){
        introDiv.classList.toggle('fade');


        if (started === false) {
            loop();
            started = true;
            songs[currentSong].play();
          }
          else {
            noLoop();
            songs[currentSong].pause();
            started = false;
          }
    }

    // A - Add new square elements
    if(keyCode === 65) {
        let s = random(30, 40); // size
        let x = random(s, width - s); // x position
        let y = random(s, height - s); // y position
        let a = random(-10, 10); // angle increment
        let e = random(0.05, 0.01); //
        let r = random(0,255);
        let g = random(0,255);
        let b = random(0,255);
        let mx = random(0, width);
        let my = random(0, height);
        let o = createVector(random(-dist,dist),random(-dist,dist));
        let newSpot = new Spot(x, y, s, a, e, r, g, b, mx, my, 10, o, num);
        
        sp.push(newSpot);
        num++;
    }

    // S - Remove the last added element
    if(keyCode === 83) {
        sp.pop();
        num--;
    }

    // D - Remove all elements
    if (keyCode === 68) {
        sp = [];
        num = 0;
    }

    // B - Refresh the canvas without removing elements
    if (keyCode === 66) {
        clear();
        background(25);
    }

    // Bkspc - Refresh the canvas without removing elements
    if (keyCode === 8) {
        clear();
        background(25);
        sp = [];
        num = 0;
    }

    // f - toggle fullscreen mode
    if (keyCode === 70) {
        let fs = fullscreen();
        fullscreen(!fs);
        setTimeout(setup, 50);
    }

    // P - Save an image of the current canvas
    if (keyCode === 80) {
        saveCanvas(canvasElement, 'myCanvas', 'jpg');
    }

    // Ctrl - Enable screen capture
    if (keyCode === 17) {
        if(introDiv.style.display === "block") {
            introDiv.style.display = 'none';
        }
        else {
            introDiv.style.display = 'block';
        }
    }
    
    // Enter - Start mic input to move objects
    if (keyCode === 13) {
        if(firstMicToggle){
            micInputOn = true;
            firstMicToggle = false;
            mic.start();
            return;
        }

        if (micInputOn) {
            mic.stop();
            micInputOn = false;
        }
        else if (!micInputOn){
            mic.start();
            micInputOn = true;
        }
    }

    // Shift - stop and save canvas capture
    if (keyCode === 16) {
 
    }

    // Option - this opens the controls panel
    if(keyCode === 18) {
        openNavigation = !openNavigation;

        if(openNavigation){
            openNav()
        }
        else if(!openNavigation){
            closeNav()
        }

    }

    // Key 1
    if (keyCode === 49) {
        songs[currentSong].pause();
        currentSong = 0;
        songs[currentSong].play();
    }

    // Key 2
    if (keyCode === 50) {
        songs[currentSong].pause();
        currentSong = 1;
        songs[currentSong].play();
    }

    // Key 2
    if (keyCode === 51) {
        songs[currentSong].pause();
        currentSong = 2;
        songs[currentSong].play();
    }

    // Key 2
    if (keyCode === 52) {
        songs[currentSong].pause();
        currentSong = 3;
        songs[currentSong].play();
    }

    // Key 2
    if (keyCode === 53) {
        songs[currentSong].pause();
        currentSong = 4;
        songs[currentSong].play();
    }

    // ========= ARROW Controls ===========

    //Shift + Up
    if(keyCode === 38){
        sp[curSelectedElement].increaseSize();  
    }

    // Down
    if(keyCode === 40){
        sp[curSelectedElement].decreaseSize();  
    }

    // Right arrow
    if(keyCode === 39) {
        if(curSelectedElement < sp.length - 1){
            curSelectedElement++;
            selectedElement.innerText = curSelectedElement;
        }
    }

    // Left arrow
    if(keyCode === 37) {
        if(curSelectedElement >= 0){
            curSelectedElement--;
            selectedElement.innerText = curSelectedElement;
        }
    }

    
    
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function draw() {
    //background(255, 255);
    background(0, 1);

    //console.log(micInputOn);
    numElements.innerText = sp.length;
    
    for (let i = 0; i < num; i++) {
        push();
        //let vol = analyzer.getLevel();
        let mult;
        if(micInputOn){
            let vol = mic.getLevel();
            mult = map(vol,0,1,0.125,15);
        }
        else {
            mult = 1;
        }
        
        // sp[i].setIsMoving(isMoving);
        sp[i].move();
        sp[i].display(mult);
        pop();
    }
    
}

function switchEaseOn() {
    for (let i = 0; i < num; i++) {
        sp[i].calculateNewPosition();
    }
}

function getNewColors() {
    for (let i = 0; i < num; i++) {
        sp[i].calculateNewColor();
    }
}

function getNewBlueColors() {
    let color = random(0, 255);
    for (let i = 0; i < num; i++) {
        sp[i].calculateNewBlueValue(color);
    }
}

// function to define a class
class Spot {
    // Construct the object
    constructor(xpos, ypos, diameter, iangle, ease, color1, color2, color3, mousex, mousey, setNoise, offset, id) {
        this.x = xpos;
        this.y = ypos;
        this.d = diameter;
        this.ia = iangle;
        this.a = this.ia;
        this.e = ease; // How fast the object moves toward the mouse
        this.r = color1;
        this.g = color2;
        this.b = color3;
        this.mx = mousex;
        this.my = mousey;
        this.n = setNoise;
        this.offset = offset;
        this.id = id;
        this.isMoving = true;
    }

    // method to display the object
    display(mappedAmp) {
        //rotate(this.a);
        fill(this.r, this.g, this.b);

        if(this.id === curSelectedElement){
            fill(255, 255, 255);
        }

        rect(0, 0, slider2.value() * this.d * mappedAmp, slider2.value() * this.d * mappedAmp);
        
    }

    move() {

        this.a += this.ia * slider.value();

        let dx = 0;
        let dy = 0
        if(isMoving){
            dx = this.mx - this.x;
            dy = this.my - this.y;
        }

        this.x += dx * this.e;
        this.y += dy * this.e;
        this.x = constrain(this.x, this.d, width - this.d)
        this.y = constrain(this.y, this.d, width - this.d)

        
        translate(this.x, this.y); // Keep the square on the mouse
        rotate(this.a);
    }

    calculateNewPosition() {
        this.mx = random(0, width);//noise(this.mx * this.n, width);
        this.my = random(0, height);

        console.log(this.offset.x);
        console.log(this.offset.y);
    }

    calculateNewPositionWithMic() {
        this.mx = this.mx;
        this.my = this.my;

        //console.log(this.offset.x);
        //console.log(this.offset.y);
    }

    calculateNewColor() {
        this.r =  random(0,255);
        this.g = random(0,255);
    }

    calculateNewBlueValue(newColor) {
        this.b = newColor;
    }

    increaseSize() {
        this.d += 10;
    }

    decreaseSize() {
        this.d -= 10;
    }

    setIsMoving(moving){
        this.isMoving = moving;
    }
}