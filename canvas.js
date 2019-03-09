var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//Arc / Circle
var x = Math.random() * innerWidth;
var y  = Math.random() * innerHeight;
var dx = (Math.random() -0.5) * 8;
var dy = (Math.random() -0.5) * 8;
var radius = 100;
  function animate(){
    for(var i=0; i<500; i++){
      var x = Math.random() * window.innerWidth;
      var y = Math.random() * window.innerHeight;
      var color = ['red', 'blue', 'yellow', 'green', 'black'];
      var strokeStyle = color[Math.floor(Math.random() * color.length)];
      c.beginPath();
      c.arc(x, y, 30, 0, Math.PI *2, false);
      c.strokeStyle = strokeStyle;
      c.stroke();}

    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI *2, false);
    c.strokeStyle = "blue";
    c.stroke();
    if (x + radius > innerWidth || x - radius < 0){
      dx = -dx;
    }
    if(y + radius > innerHeight || y - radius < 0){
      dy = -dy;
    }
    x += dx;
    y += dy;
  }
  animate();
c.fillStyle = "blue";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "brown";
c.fillRect(400, 200, 100, 100);
c.fillStyle = "green";
c.fillRect(300, 300, 100, 100);
//Lines
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400,200);
c.lineTo(300,50);
c.strokeStyle = "blue"
c.stroke();
