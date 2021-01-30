var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var running = false;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 1,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function clear() {
 // Instead of clearRect() use a fillRect with semi-transparent for trailing effect.
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'; 
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;  
  ball.y += ball.vy; 

  // check canvas bounderies, up and down
  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    // turn 
    ball.vy = -ball.vy;  
  }
  // check canvas bounderies left and right
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    // turn
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

// Follow mouse, make ball position the same as of mouse
canvas.addEventListener('mousemove', function(e) {
  if (!running) {
    clear();
    // The Event object gives us information we can use.
    ball.x = e.clientX;  // ball gets x position of mouse 
    ball.y = e.clientY;  // ball gets y position of mouse
    ball.draw();
  }
});

// The click event releases the ball and lets it bounce again.
canvas.addEventListener('click', function(e) {
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true; 
  }
});

// stop gameloop
canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
  running = false;
});

ball.draw();