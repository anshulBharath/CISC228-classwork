
var ctx;

// Variables to circle one
var dx = (Math.random()-0.5) * 10; 
var dy = (Math.random()-0.5) * 15;
var y = 350; 
var x = 350;
var rad = Math.floor((Math.random() * 50) + 20);
var randomColor1 = randomColor();
const fric2 = 1.15;

// Variables for circle two
var dx2 = (Math.random()-0.5) * 10; 
var dy2 = (Math.random()-0.5) * 15;
var y2 = 350; 
var x2 = 350;
var rad2 = Math.floor((Math.random() * 50) + 20);

// Variables for circle three
var dx3 = (Math.random()-0.5) * 10; 
var dy3 = (Math.random()-0.5) * 15;
var y3 = 350; 
var x3 = 350;
var rad3 = Math.floor((Math.random() * 50) + 20);
var randomColor3 = randomColor();

// Variables for circle three
var dx4 = (Math.random()-0.5) * 10; 
var dy4 = (Math.random()-0.5) * 15;
var y4 = 350; 
var x4 = 350;
var rad4 = Math.floor((Math.random() * 50) + 20);
var randomColor4 = randomColor();
const grav = 0.5;
const fric = 0.95;


function main() {
    var myCanvas = document.getElementById("canvas");
    ctx = myCanvas.getContext('2d');
    setInterval(draw,30);
    setInterval(drawTwo,30);
    setInterval(drawThree,30);
    setInterval(drawFour,30);
}

function draw(){  
    ctx.fillStyle = '#ffffffff';
    ctx.fillRect(0,0,700,700)
    ctx.beginPath();  
    ctx.fillStyle = randomColor1;
    ctx.arc(x,y,rad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    if( x < rad || x > 700-rad) {
        dx = -dx;
        dx *= fric2;  
    }
    if( y < rad || y > 700-rad) {
        dy = -dy;
        dy *= fric2;
    }            
    x += dx;
    y += dy;
} 

function drawTwo(){
    ctx.beginPath();  
    ctx.fillStyle = randomColor();
    ctx.arc(x2,y2,rad2,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
    if( x2 < rad2 || x2 > 700-rad2) {
        dx2 = -dx2;       
    }
    if( y2 < rad2 || y2 > 700-rad2) {
        dy2 = -dy2;
    }            
    x2 += dx2;
    y2 += dy2;        
} 

function drawThree(){
    ctx.beginPath();  
    ctx.fillStyle = randomColor3;
    ctx.arc(x3,y3,rad3,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
    if( x3 < rad3 || x3 > 700-rad3) {
        randomColor3 = randomColor();
        dx3 = -dx3;       
    }
    if( y3 < rad3 || y3 > 700-rad3) {
        randomColor3 = randomColor();
        dy3 = -dy3;
    }            
    x3 += dx3;
    y3 += dy3;        
} 

function drawFour(){
    ctx.beginPath();  
    ctx.fillStyle = randomColor4;
    ctx.arc(x4,y4,rad4,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();

    dy4 += grav;

    if( x4 < rad4 || x4 > 700-rad4) {
        dx4 = -dx4;       
    }
    if( y4 < rad4 || y4 > 700-rad4) {
        dy4 = -dy4;
        dy4 *= fric;
        
    }            
    x4 += dx4;
    y4 += dy4;        
} 

function randomColor() {
    var r = Math.floor((Math.random() * 256) + 1);
    var g = Math.floor((Math.random() * 256) + 1);
    var b = Math.floor((Math.random() * 256) + 1);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function clearCanvas() {
    ctx = myCanvas.getContext('2d');
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

