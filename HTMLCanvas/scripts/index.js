
var canvas;
var ctx;


function draw() {
     canvas = document.getElementById('tutorial');
     ctx = canvas.getContext('2d');

     
    
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(10, 10, 240, 240);

    ctx.fillStyle = 'rgba(0, 0, 255, .5)';
    ctx.fillRect(120, 120, 240, 240);

    ctx.strokeRect(50, 50, 50, 50);

    //Draws a triangle
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();

    //Draws a Smiley face
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();

    // Arcs examples
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
          ctx.beginPath();
          var x = 25 + j * 50; // x coordinate
          var y = 25 + i * 50; // y coordinate
          var radius = 20; // Arc radius
          var startAngle = 0; // Starting point on circle
          var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
          var counterclockwise = i % 2 !== 0; // clockwise or counterclockwise
  
          ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  
          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
    }
    setInterval(move, 30);
}

var x = 0;
function move() {

    var img = new Image()
    img.src = 'star.png';
    //ctx.fillRect(0,0,500,500);
    ctx.drawImage(img, x, 250, 50, 50);
    ++x;
}


