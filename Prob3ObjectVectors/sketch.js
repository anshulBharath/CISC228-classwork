// Simple OOP example
let sp; // Declare the object
let sp2;
const num = 2;

let v; //vector
let vValue1;
let vValue2;

let s1

function setup() {
    colorMode(RGB);
    createCanvas(1000, 1000);
    background(0);
    let v = createVector(250,250);
    let v2 = createVector(25,350);
    sp = new Spot(v,50,color(0,128,200),1, 0.1); // Construct the object
    sp2 = new Spot(v2,75,color(200,0,128),1, 0.05);
}
function draw() {
    frameRate(60);
    background(0,0,100,5);
    sp.displaySquare();
    sp.move(2);
    sp2.displayCircle();
    sp2.move(1.5);
}
// function to define a class
class Spot {
    constructor(vector,diameter,col,offset,acc) {
        // Construct the object
        this.v = vector;
        this.d = diameter;
        this.c = col;
        this.o = offset
        this.a = acc;
    }
    // method to display the object
    displaySquare() {
        // let p = this.d * (2-sin(frameCount*0.1));
        let pulc = 255 * abs(sin(frameCount*0.01));
        fill(pulc,100,100);
        // ellipse(this.v.x,this.v.y,p,p);
        rect(this.v.x,this.v.y,this.d,this.d);
    }

    displayCircle() {
        // let p = this.d * (2-sin(frameCount*0.1));
        //let pulc = 255 * abs(sin(frameCount*0.01));
        fill(100,100,100);
        // ellipse(this.v.x,this.v.y,p,p);
        ellipse(this.v.x,this.v.y,this.d,this.d);
    }

    move(offset) {
        if (isNaN(offset)) {
            offset = 1;
        }
        let dx = mouseX/offset - this.v.x;
        this.v.x += dx * this.a
        let dy = mouseY/offset - this.v.y;
        this.v.y += dy * this.a;
    }
}