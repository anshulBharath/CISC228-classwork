
let dx = [];
let dy = [];
let y = [];
let x = [];
let diam = [];
let rad = [];
let cr = [];
let cg = [];
let cb = [];
let sr = [];
let sg = [];
let sb = [];
let sw = [];
let grav = [];
let fric = [];
const num = 50;

function setup(){
  frameRate(60);
  createCanvas(windowWidth,windowHeight);
  background(0);
  for (let i = 0; i < num; ++i ) {
    dx[i] = random(-7,7);
    dy[i] = random(-7,7);
    y[i] = random(windowHeight);
    x[i] = random(windowWidth);
    diam[i] = random(10,80);
    sw[i] = random(0,10); 
    rad[i] = diam[i] * 0.5 + sw[i];
    cr[i] = random(255);
    cg[i] = random(255);
    cb[i] = random(255);
    sr[i] = random(255);
    sg[i] = random(255);
    sb[i] = random(255);
    grav[i] = random(-1,1);
    fric[i] = random(0.5,1.2);
       
  }
  console.log(width+"|"+height);
}
function draw(){
  background(0,64);
  for (let i = 0; i < num; ++i ) {
    fill(cr[i],cg[i],cb[i]);
    strokeWeight(sw[i]);
    stroke(sr[i], sg[i], sb[i]);
    ellipse(x[i],y[i],diam[i],diam[i]);

    dy[i] += grav[i];

    if( x[i] <= rad[i] || x[i] >= width-rad[i]) {
      dx[i] = -dx[i];
    }
    if( y[i] <= rad[i] || y[i] >= height-rad[i] ) {
      dy[i] *= fric[i];
      dy[i] = -dy[i];
    }
    x[i] += dx[i];
    y[i] += dy[i];
  }
}

setInterval(reset, 10000);

function reset(){
  for (let i = 0; i < num; ++i ) {
    dx[i] = random(-7,7);
    dy[i] = random(-7,7);
    y[i] = random(windowHeight);
    x[i] = random(windowWidth);
    diam[i] = random(10,80);
    sw[i] = random(0,10); 
    rad[i] = diam[i] * 0.5 + sw[i];
    cr[i] = random(255);
    cg[i] = random(255);
    cb[i] = random(255);
    sr[i] = random(255);
    sg[i] = random(255);
    sb[i] = random(255);
    grav[i] = random(-1,1);
    fric[i] = random(0.5,1.2);
       
  }
}
