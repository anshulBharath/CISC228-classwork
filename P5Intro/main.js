
let dx = [];
let dy = [];
let y = [];
let x = [];
let r = [];
let cr = [];
let cg = [];
let cb = [];
let sr = [];
let sg = [];
let sb = [];
let sw = [];
const num = 10;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
  for (let i = 0; i < num; ++i ) {
    dx[i] = random(-7,7);
    dy[i] = random(-7,7);
    y[i] = width/2;
    x[i] = height/2;
    r[i] = random(10,80);
    cr[i] = random(255);
    cg[i] = random(255);
    cb[i] = random(255);
    sr[i] = random(255);
    sg[i] = random(255);
    sb[i] = random(255);
    sw[i] = random(0,10);    
  }
  console.log(width+"|"+height);
}
function draw(){
  background(0,64);
  for (let i = 0; i < num; ++i ) {
    fill(cr[i],cg[i],cb[i]);
    strokeWeight(sw[i]);
    stroke(sr[i], sg[i], sb[i]);
    ellipse(x[i],y[i],r[i],r[i]);
    if( x[i] <= r[i] || x[i] >= width-r[i]) {
      dx[i] = -dx[i];
    }
    if( y[i] <= r[i] || y[i] >= height-r[i] ) {
      dy[i] = -dy[i];
    }
    x[i] += dx[i];
    y[i] += dy[i];
  }
}
