// Simple OOP example
let sp = []; // Declare the object
let num = 50;

let p1controls = [87, 68, 83, 65, 69]; //(WDSAE)


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(25);

    for (let i = 0; i < num; i++) {
        let s = random(5, 50); // size
        let x = random(s, width - s); // x position
        let y = random(s, height - s); // y position
        let a = random(-5, 5); // angle increment
        let e = random(0.05, 0.01); //
        let r = random(0,255);
        let g = random(0,255);
        sp[i] = new Spot(x, y, s, a, e, r, g);
    }

    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    background(0, 1);

    for (let i = 0; i < num; i++) {
        push();
        sp[i].move();
        sp[i].display();
        pop();
    }
    // store state of canvas

    // restor the canvas
    //sp2.move();
    // sp2.display();
}
// function to define a class
class Spot {
    // Construct the object
    constructor(xpos, ypos, diameter, iangle, ease, color1, color2) {
        this.x = xpos;
        this.y = ypos;
        this.d = diameter;
        this.ia = iangle;
        this.a = this.ia;
        this.e = ease; // How fast the object moves toward the mouse
        this.r = color1;
        this.g = color2;
    }

    // method to display the object
    display() {
        //rotate(this.a);
        fill(this.r, this.g, 100);
        rect(0, 0, this.d, this.d);
    }
    move() {


        let space_bar = 32;
        let d_key = 68;
        let s_key = 83;
        let a_key = 65;
        let w_key = 87;

        if (keyIsDown(space_bar)) {
            let dx = mouseX - this.x;
            this.x += dx * -this.e;
            let dy = mouseY - this.y;
            this.y += dy * -this.e;
            this.x = constrain(this.x, this.d, width - this.d)
            this.y = constrain(this.y, this.d, width - this.d)
            this.a = this.a;
        }
        if (keyIsDown(s_key)) {
            this.a += this.ia
            let dx = mouseX - this.x;
            this.x -= dx * this.e;
            let dy = mouseY - this.y;
            this.y += dy * this.e;
            this.x = constrain(this.x, this.d, width - this.d)
            this.y = constrain(this.y, this.d, width - this.d)
        }
        if (keyIsDown(a_key)) {
            this.a += this.ia
            let dx = mouseX - this.x;
            this.x += dx * this.e;
            let dy = mouseY - this.y;
            this.y += dy * this.e;
            this.x = constrain(this.x, this.d, width - this.d)
            this.y = constrain(this.y, this.d, width - this.d) 
            this.a = 0;
        }
        if (keyIsDown(d_key)) {
            this.a += this.ia
            let dx = mouseX - this.x;
            this.x += dx * this.e;
            let dy = mouseY - this.y;
            this.y -= dy * this.e;
            this.x = constrain(this.x, this.d, width - this.d)
            this.y = constrain(this.y, this.d, width - this.d)
        }
        if (mouseIsPressed) {
            this.a += this.ia
            let dx = mouseX - this.x;
            this.x += dx * -this.e;
            let dy = mouseY - this.y;
            this.y += dy * -this.e;
            this.x = constrain(this.x, this.d, width - this.d)
            this.y = constrain(this.y, this.d, width - this.d)
        } else {
            this.a += this.ia
            let dx = mouseX - this.x;
            this.x += dx * this.e;
            let dy = mouseY - this.y;
            this.y += dy * this.e;
            this.x = constrain(this.x, this.d, width - this.d)
            this.y = constrain(this.y, this.d, width - this.d)
        }

        translate(this.x, this.y); // Keep the square on the mouse
        rotate(this.a);
    }
}