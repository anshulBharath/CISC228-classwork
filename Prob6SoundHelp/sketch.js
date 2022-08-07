// Click to start/stop animation
let dx = [];
let dy = [];
let y = [];
let x = [];
let diam = [];
let r = [];
let cr = [];
let cg = [];
let cb = [];
let sr = [];
let sg = [];
let sb = [];
let sw = [];
let csnd = [];
let started = false;
let hit = [];
let analyzer;
let song;
const num = 15;
const grav = 0.005;
const fric = 1;

function preload() {
  hit[0] = loadSound('Beep.wav');
  hit[1] = loadSound('Beep.wav');
  hit[2] = loadSound('Beep.wav');
  hit[3] = loadSound('Beep.wav');
  hit[4] = loadSound('Beep.wav');
  song = loadSound('SpaceSong.wav');
}
function setup() {
  frameRate(60);
  createCanvas(windowWidth,windowHeight);
  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();
  // Patch the input to an volume analyzer
  analyzer.setInput(song);
  for (i = 0; i < 5; ++i) {
    hit[i].playMode('restart');
  }
  for (let i = 0; i < num; ++i ) {
    dx[i] = random(-3,3);
    dy[i] = random(-3,3);
    x[i] = width/2;
    y[i] = height/2;
    sw[i] = random(0,10);
    diam[i] = random(20,80);
    r[i] = diam[i] * 0.5 + sw[i];
    cr[i] = random(255);
    cg[i] = random(255);
    cb[i] = random(255);
    sr[i] = random(255);
    sg[i] = random(255);
    sb[i] = random(255);
    csnd[i] = round(map(i,0,num,0,4));
  }
  noLoop();
  // console.log(width+"|"+height);
}
function mouseClicked() {
  if (started === false) {
    loop();
    started = true;
    song.play();
  }
  else {
    noLoop();
    song.pause();
    started = false;
  }
}
function draw(){
  background(0,15);
  for (let i = 0; i < num; ++i ) {
    let vol = analyzer.getLevel();
    let mult = map(vol,0,1,0.25,5);
    console.log(vol);
    fill(cr[i],cg[i],cb[i]);
    strokeWeight(sw[i]);
    stroke(sr[i],sg[i],sb[i]);
    circle(x[i],y[i],diam[i]*mult);

    dy[i] += grav;
    if( x[i] <= r[i] || x[i] >= width-r[i]) {
      dx[i] = -dx[i];
      // hit[csnd[i]].play();
    }
    if( y[i] <= r[i] || y[i] >= height-r[i] ) {
      dy[i] *= fric;
      dy[i] = -dy[i];
      // hit[csnd[i]].play();
    }
    x[i] += dx[i];
    y[i] += dy[i];
  }
}