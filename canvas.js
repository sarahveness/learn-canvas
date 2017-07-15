let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//c = context
var c = canvas.getContext('2d');

// Rectangle
// c.fillStyle = getRandomColor();
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = getRandomColor();
// c.fillRect(500, 500, 100, 100);

//Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = getRandomColor();
// c.stroke();

//Arc / Circle
// for (var i = 0; i < 50; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = getRandomColor();
//   c.stroke();
// }



function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = getRandomColor();
    c.stroke();
  }
  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

let circleArray = [];

for (var i = 0; i < 100; i++) {
  let radius = 30;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  //dx is standard shorthand for x velocity
  let dx = (Math.random() - 0.5) * 8;
  let dy = (Math.random() - 0.5) * 8;
  circleArray.push(new Circle(x, y, dx, dy, radius))
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
