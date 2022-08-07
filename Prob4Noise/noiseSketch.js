let position = 0;
let particles = [];
const num = 100;
const dist = 1000;
const speed = 0.002;

function setup() {
  createCanvas(700, 700);
  noiseSeed(100);
  for (i = 0; i < num; i++) { 
    let r = random(0,255);
    let g = random(0,255);
    let b = random(0,255);
    let c = createVector(width/2,height/2);
    let o = createVector(random(-dist,dist),random(-dist,dist));
    let d = random(3,10);
    particles[i] = new Particle(c,d,o,color(r,g,b),i);
  }
}

function draw() {
  background(10,10);
  noStroke();
  for (i = 0; i < num; i++) { 
    particles[i].display();
    particles[i].move();
  }
  position += speed;
}

class Particle {
  constructor(coords,diameter,offset,col,ident) {
    this.coords = coords;
    this.diam = diameter;
    this.offset = offset;
    this.col = col;
    this.id = ident;
  }
  display() {
    fill(this.col);
    circle(this.coords.x,this.coords.y,this.diam);
  }
  move() {
    if (mouseIsPressed){
      this.coords.x = map(noise(position+mouseX+this.offset.x),0,1,0,width);
      this.coords.y = map(noise(position+mouseY+this.offset.y),0,1,0,height);
    }
    else if (this.id >= 70) {
      this.coords.x = map(noise(position+this.offset.x),0,5,0,width);
      this.coords.y = map(noise(position+this.offset.y),0,1,0,height);

    }
    else if (this.id <= 30) {
      this.coords.x = map(noise(position+this.offset.x),0,1,0,width);
      this.coords.y = map(noise(position+this.offset.y),0,5,0,height);
    }
    else {
      this.coords.x = map(noise(position+this.offset.x),0,1,0,width);
      this.coords.y = map(noise(position+this.offset.y),0,1,0,height);
    }
    
  }
}