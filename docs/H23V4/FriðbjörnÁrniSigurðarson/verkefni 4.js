document.addEventListener('DOMContentLoaded', function() {

  // Function to toggle fullscreen mode
  function toggleFullscreen() {
    const fullscreenButton = document.getElementById("fullscreenButton");

    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
      fullscreenButton.style.display = 'none';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      fullscreenButton.style.display = 'block';
    }
  }

  document.getElementById("fullscreenButton").addEventListener("click", toggleFullscreen);

// Function to check screen orientation
  function checkOrientation() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    if (aspectRatio < 1) {
      document.getElementById("rotateMessage").style.display = "block";
      if (screen.orientation) {
        screen.orientation.lock('landscape').catch(function() {
          // Handle the error here
        });
      }
    } else {
      document.getElementById("rotateMessage").style.display = "none";
    }
  }


  // Setup canvas
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', function() {
    resizeCanvas();
  });
  window.addEventListener('orientationchange', function() {
    checkOrientation();
  });


  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Controlled Ball class
  class ControlledBall {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = 30;
      this.color = 'yellow';
      this.speed = 4;
    }

    move(dx, dy) {
      this.x += dx * this.speed;
      this.y += dy * this.speed;
      this.x = Math.max(this.radius, Math.min(this.x, canvas.width - this.radius));
      this.y = Math.max(this.radius, Math.min(this.y, canvas.height - this.radius));
    }
  }

  // Ball class
  class Ball {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = 30;
      this.color = 'red';
      this.direction = Math.random() * 2 * Math.PI;
      this.speed = 5;
    }

    move() {
      this.x += Math.cos(this.direction) * this.speed;
      this.y += Math.sin(this.direction) * this.speed;
      
      if (this.x < this.radius || this.x > canvas.width - this.radius) {
        this.direction = Math.PI - this.direction;
      }

      if (this.y < this.radius || this.y > canvas.height - this.radius) {
        this.direction = -this.direction;
      }
    }
  }

// Check collision function
function checkCollision(controlledBall, randomBall) {
  const dx = controlledBall.x - randomBall.x;
  const dy = controlledBall.y - randomBall.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < controlledBall.radius + randomBall.radius) {
    console.log('Collision detected!');

    // Vibrate the device for 100 milliseconds
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }

    const angle = Math.atan2(dy, dx);
    randomBall.direction = angle + Math.PI;
  }
}


  // Initialize balls
  const balls = [
    new ControlledBall(30, 30),
    new Ball(80, 80)
  ];
  
  // Listen for device orientation changes
  window.addEventListener('deviceorientation', function(event) {
    const tiltLR = event.gamma;
    const tiltFB = event.beta;
  
    // Calculate the change in x and y
    // You can adjust the multiplier to control sensitivity
    const dx = tiltLR / 45;
    const dy = tiltFB / 45;
  
    // Move the controlled ball
    balls[0].move(dx, dy);
  });

  // Update game state
  function update() {
    balls[1].move();
    checkCollision(balls[0], balls[1]);
    checkOrientation();
  }

  // Render game state
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    balls.forEach(ball => {
      ctx.fillStyle = ball.color;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  // Game loop
  function loop() {
    update();
    render();
    requestAnimationFrame(loop);
  }

  loop();
});