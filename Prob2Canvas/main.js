var myCanvas = document.getElementById("canvas");
var ctx = myCanvas.getContext('2d');
ctx.fillStyle = randomColor();

function main() {
    drawText()
    
    setInterval(drawRectangle, 1700);
    setInterval(drawCircle, 1100);
    setInterval(drawTriangle, 700);
}

function drawRectangle() {
    ctx.fillStyle = randomColor();
    ctx.fillRect(120, 450, 150, 150);
}

function drawCircle() {
    ctx.beginPath();  
    ctx.fillStyle = randomColor();
    ctx.arc(530,420,70,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}

function drawTriangle() {
    ctx.beginPath();
    ctx.fillStyle = randomColor();
    ctx.moveTo(150, 50);
    ctx.lineTo(50, 250);
    ctx.lineTo(250, 250);
    ctx.fill();
}

function drawText() {
    ctx.font = '70px serif';
    ctx.strokeText('basics', 420, 120);
}

function randomColor() {
    var r = Math.floor((Math.random() * 256) + 1);
    var g = Math.floor((Math.random() * 256) + 1);
    var b = Math.floor((Math.random() * 256) + 1);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}