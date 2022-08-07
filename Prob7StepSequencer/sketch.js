let box, beatDur;
let beatPos = 0;
let layers = 16;
let steps = 16;
let activeSteps = [];
let osc = [];
let bpm = 120;
let playing = false;
const scale = 
[55.0, 65.41, 73.42, 82.41,
87.31, 98.0, 110.0, 130.81, 
164.81, 174.61, 261.63, 
293.66, 329.63, 349.23, 
440.0, 523.25, 587.33];
// https://pages.mtu.edu/~suits/notefreqs.html

function setup() {
  frameRate(30);
  createCanvas(800, 800);
  box = width/steps;
  beatDur = round(6000/bpm/6);
  scale.reverse();
  makeGrid();
}

function makeGrid() {
  for(let y=0; y < layers; y++) {
    for (let x=0; x < steps; x++ ) {
      fill(255);
      stroke(0);
      activeSteps.push([y,x]);
      activeSteps[y][x] = 0;
      rect(x * box, y * box, box, box);
    }
    osc[y] = new p5.Oscillator('triangle');
    osc[y].connect(soundOut);
  }
}

function mousePressed() {
  let px = floor(mouseX/box);
  let py = floor(mouseY/box);
  if (activeSteps[py][px] === 1) {
    activeSteps[py][px] = 0;
    fill(255);
  }
  else {
    activeSteps[py][px] = 1;
    fill(0);
  }
  rect(px * box, py * box, box, box);
}

function keyPressed() {
  if (key === ' ') {
    playing = !playing;    
  }
}

function playNote(l) {
  osc[l].start();
  osc[l].freq(scale[l],0);
  osc[l].amp(0.5,0);
  osc[l].amp(0,0.1);
}

function draw() {
  if (frameCount % beatDur === 0 && playing) {
    for (let l=0; l < layers; l++) {
      fill(128,64);
      if (activeSteps[l][beatPos] === 1) {
        fill(0);
        playNote(l);
      }
      rect(beatPos * box, l * box, box, box);
      fill(255);
      let prevPos = beatPos-1;
      if (prevPos < 0) {
        prevPos = steps-1;
      }
      if (activeSteps[l][prevPos] === 1) {
        fill(0);
      }
      rect(prevPos * box, l * box, box, box);
    }
    ++beatPos;
    if (beatPos === steps) {
      beatPos = 0;
    }
  }
}