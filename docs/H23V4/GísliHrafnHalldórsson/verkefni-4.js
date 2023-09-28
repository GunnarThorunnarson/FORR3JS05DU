const canvas = document.querySelector('canvas'); // Select the canvas element
const ctx = canvas.getContext('2d'); // Get the 2D context of the canvas
const para = document.querySelector('p'); // Select the paragraph element to display score
const width = canvas.width = window.innerWidth; // Set canvas width to window inner width
const height = canvas.height = window.innerHeight; // Set canvas height to window inner height

let score = 0; // Initialize score variable
const pinkk = 'rgba(255, 182, 177, 255)' // Pink color variable
const ghostSpriteSize = 13; // sets ghost spritesize to 13px

const beginSfx = new Audio(); beginSfx.src = 'pacman_beginning.wav'; beginSfx.volume = 0.1; beginSfx.loop = false;
const deathSfx = new Audio(); deathSfx.src = 'pacman_death.wav'; deathSfx.volume = 0.1; deathSfx.loop = false;
const winSfx = new Audio(); winSfx.src = 'pacman_intermission.wav'; winSfx.volume = 0.1; winSfx.loop = false;
var wacaSfx = new Audio(); wacaSfx.src = 'pacman_chomp.wav'; wacaSfx.volume = 0.1; wacaSfx.loop = true;

let gameRunning = false;




// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Functions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};

// Function to clear canvas by drawing black background
function clear() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);
}

// Toggle fullscreen button
function toggleFullscreen(forceFull) {
  var elem = document.documentElement; // Get the root element of the document
  // var toggleButton = document.getElementById("fullscreenButton"); // Get the button element

  // Check if fullscreen mode is active in different browsers
  if (!forceFull && (
    document.fullscreenElement || // Standard fullscreen mode
    document.webkitFullscreenElement || // Chrome, Safari, and Opera
    document.mozFullScreenElement || // Firefox
    document.msFullscreenElement // IE/Edge
  )) {
    // If fullscreen mode is active
    if (document.exitFullscreen) {
      document.exitFullscreen(); // Exit fullscreen mode
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // Chrome, Safari, and Opera
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen(); // Firefox
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // IE/Edge
    }
    // toggleButton.style.backgroundColor = "rgb(255, 54, 54)"; // Set the button color to red
  } else {
    if (elem.requestFullscreen) {
      elem.requestFullscreen(); // Request fullscreen mode
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(); // Chrome, Safari, and Opera
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen(); // Firefox
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen(); // IE/Edge
    }
    // toggleButton.style.backgroundColor = "rgb(0, 255, 0)"; // Set the button color to green
    // document.fullscreenElement.appendChild(toggleButton); // Move the button element to the fullscreen element
  }
}


// Displays game over screen and plays death sfx
function gameOver() {
  ctx.font = "30px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("Game Over!", 50, 20);
  if (gameRunning) {
    beginSfx.pause();
    wacaSfx.pause();
    deathSfx.play();
    gameRunning = false;
  }
}

// Displays victory screen and plays victory sfx
function gameWin() {
  ctx.font = "30px Arial";
  ctx.fillStyle = "yellow";
  ctx.fillText("You Win!", 50, 20);
  if (gameRunning) {
    wacaSfx.pause();
    winSfx.play();
    gameRunning = false;
  }
}

// Powerpellets blikka function
function togglePowerpelletColor() {
  for (const powerpellet of powerpellets) {
    // If powerpellet exists
    if (powerpellet.exists) {
      // If Color was pinkk, Color is now black.
      // Otherwise, Color is now pinkk.
      powerpellet.color = powerpellet.color === pinkk ? "black" : pinkk;
    }
  }
}

// Call togglePowerpelletColor every 500ms
setInterval(togglePowerpelletColor, 500);


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Classes >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Class Shape
class Shape {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}

// Class Dot (which *extends* the Shape class)
class Dot extends Shape {
  constructor(x, y, velX, velY) {
    // The properties/methods from the Shape class
    super(x, y, velX, velY);
    this.color = pinkk;
    this.radius = 5;
    this.exists = true;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Method to update the dot's position
  update() {
    // Check if the dot has hit the right→ edge of the canvas
    if ((this.x + this.radius) >= width) {
      this.velX = -(this.velX);
    }
    // Check if the dot has hit the left← edge of the canvas
    if ((this.x - this.radius) <= 0) {
      this.velX = -(this.velX); // Reverse velX to make the dot bounce right →.
    }
    // Check if the dot has hit the bottom↓ edge of the canvas
    if ((this.y + this.radius) >= height) {
      this.velY = -(this.velY); // Reverse velY to make the dot bounce up ↑.
    }
    // Check if the dot has hit the top↑ edge of the canvas
    if ((this.y - this.radius) <= 0) {
      this.velY = -(this.velY); // Reverse velY to make the dot bounce down ↓.
    }
    // Update the dot's position by adding the velocity values to its current coordinates.
    this.x += this.velX;
    this.y += this.velY;
  }
}

// Class Powerpellet (which *extends* the Shape class)
class Powerpellet extends Shape {
  constructor(x, y, velX, velY) {
    super(x, y, velX, velY);
    this.color = pinkk;
    this.radius = 15;
    this.exists = true;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Method to update the powerpellet's position
  update() {
    // Check if the powerpellet has hit the right→ edge of the canvas
    if ((this.x + this.radius) >= width) {
      this.velX = -(this.velX); // Reverse velX to make the powerpellet bounce left ←.
    }
    // Check if the powerpellet has hit the left← edge of the canvas
    if ((this.x - this.radius) <= 0) {
      this.velX = -(this.velX); // Reverse velX to make the powerpellet bounce right →.
    }
    // Check if the powerpellet has hit the bottom↓ edge of the canvas
    if ((this.y + this.radius) >= height) {
      this.velY = -(this.velY); // Reverse velY to make the powerpellet bounce up ↑.
    }
    // Check if the powerpellet has hit the top↑ edge of the canvas
    if ((this.y - this.radius) <= 0) {
      this.velY = -(this.velY); // Reverse velY to make the powerpellet bounce down ↓.
    }
    // Update the powerpellet's position by adding the velocity values to its current coordinates.
    this.x += this.velX;
    this.y += this.velY;
  }
}

// Ghost class extending Shape
class Ghost extends Shape {
  constructor(color, x, y, velX, velY) {
    super(x, y, velX, velY);
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = 21;
    this.exists = true;
    this.color = color;
    switch (color) {
      case 'blinky':
        this.clipX = 0;
        this.clipY = 64;
        break;
      case 'pinky':
        this.clipX = 0;
        this.clipY = 80;
        break;
      case 'inky':
        this.clipX = 0;
        this.clipY = 96;
        break;
      case 'clyde':
        this.clipX = 0;
        this.clipY = 112;
        break;
    }
  }

  update() {
    if (this.x + this.velX > canvas.width || this.x + this.velX < 0) {
      this.velX = Math.random() * 10 - 5;
    }
    if (this.y + this.velY > canvas.height || this.y + this.velY < 0) {
      this.velY = Math.random() * 10 - 5;
    }


    // Check if the powerpellet has hit the right→ edge of the canvas
    if ((this.x + this.radius) >= width) {
      this.velX = -(this.velX); // Reverse velX to make the powerpellet bounce left ←.
    }
    // Check if the powerpellet has hit the left← edge of the canvas
    if ((this.x - this.radius) <= 0) {
      this.velX = -(this.velX); // Reverse velX to make the powerpellet bounce right →.
    }
    // Check if the powerpellet has hit the bottom↓ edge of the canvas
    if ((this.y + this.radius) >= height) {
      this.velY = -(this.velY); // Reverse velY to make the powerpellet bounce up ↑.
    }
    // Check if the powerpellet has hit the top↑ edge of the canvas
    if ((this.y - this.radius) <= 0) {
      this.velY = -(this.velY); // Reverse velY to make the powerpellet bounce down ↓.
    }
    // Update the powerpellet's position by adding the velocity values to its current coordinates.
    this.x += this.velX;
    this.y += this.velY;
  }

  draw() {
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(
      spriteSheet,
      this.clipX, this.clipY, ghostSpriteSize, ghostSpriteSize,
      this.x, this.y, ghostSpriteSize * 3, ghostSpriteSize * 3
    );
  }
}

// Pacman class extending Shape
class Pacman {
  constructor({ position }, { velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.color = "yellow";
    this.radius = 25;
    this.angle = 0; // Angle starts at 0
    this.exists = true;
    this.life = 3;

    // Keyboard event functions
    addEventListener('keydown', (event) => {
      let x = this.velocity.x;
      let y = this.velocity.y;
      switch (event.key) {
        case 'w': // North ↑
          y = -2;
          break;
        case 'a': // West ←
          x = -2;
          break;
        case 's': // South ↓
          y = 2;
          break;
        case 'd': // East →
          x = 2;
          break;
        case 'wa': // Northwest ↖
          x = -2;
          y = -2;
          break;
        case 'wd': // Northeast ↗
          x = 2;
          y = -2;
          break;
        case 'sa': // Southwest ↙
          x = -2;
          y = 2;
          break;
        case 'sd': // Southeast ↘
          x = 2;
          y = 2;
          break;
      }
      this.changeVelocity(x, y);
    });
    addEventListener('keyup', ({ key }) => {
      let x = this.velocity.x;
      let y = this.velocity.y;
      switch (key) {
        case 'w':
        case 's':
          y = 0;
          break;
        case 'a':
        case 'd':
          x = 0;
          break;
      }
      this.changeVelocity(x, y);
    });

    // Motion control function
    addEventListener("deviceorientation", (event) => {
      if (!useTouchControls) {
        let x = this.velocity.x;
        let y = this.velocity.y;
        // Vinstri & Hægri ←→
        if (event.beta > 100)
          x = 2;
        else if (event.beta < -100)
          x = -2;
        else
          x = 0;

        // Upp & Niður ↑↓
        if (event.gamma > -80 && event.gamma < 0)
          y = -2;
        else if (event.gamma > 0 && event.gamma < 80)
          y = 2;
        else
          y = 0;

        this.changeVelocity(x, y);
      }
    }, true);

    // Touch event functions
    canvas.addEventListener('touchstart', (event) => {
      if (useTouchControls) {
        let touchX = event.touches[0].clientX; // Get the x-coordinate of the touch
        let touchY = event.touches[0].clientY; // Get the y-coordinate of the touch

        let x = this.velocity.x;
        let y = this.velocity.y;
        let deadZone = 50;

        let touchXDiff = touchX - this.position.x;
        if (touchXDiff > deadZone)
          x = 2;
        else if (touchXDiff < -deadZone)
          x = -2;

        let touchYDiff = touchY - this.position.y;
        if (touchYDiff > deadZone)
          y = 2;
        else if (touchYDiff < -deadZone)
          y = -2;

        console.log(touchXDiff, touchYDiff);
        this.changeVelocity(x, y);
      }
    });
    canvas.addEventListener('touchmove', (event) => {
      if (useTouchControls) {
        let touchX = event.touches[0].clientX; // Get the x-coordinate of the touch
        let touchY = event.touches[0].clientY; // Get the y-coordinate of the touch

        let x = this.velocity.x;
        let y = this.velocity.y;
        let deadZone = 50;

        let touchXDiff = touchX - this.position.x;
        if (touchXDiff > deadZone)
          x = 2;
        else if (touchXDiff < -deadZone)
          x = -2;

        let touchYDiff = touchY - this.position.y;
        if (touchYDiff > deadZone)
          y = 2;
        else if (touchYDiff < -deadZone)
          y = -2;

        console.log(touchXDiff, touchYDiff);
        this.changeVelocity(x, y);
      }
    });
    canvas.addEventListener('touchend', (event) => {
      if (gameRunning)
        this.changeVelocity(0, 0);
    });
  }

  reset() {
    this.resetLocation(); // moves pacman to default location
    this.color = "yellow";
    this.radius = 25;
    this.angle = 0; // Angle starts at 0
    this.exists = true;
    this.life = 3;
  }

  resetLocation() {
    this.position = { x: 100, y: 100 };
    this.velocity = { x: 0, y: 0 };
  }

  // Update Pacman's angle based on the velocity
  changeVelocity(x, y) {
    if (gameRunning) {
      this.velocity.x = x;
      this.velocity.y = y;
      if (this.exists && (x !== 0 || y !== 0)) {
        this.angle = Math.atan2(y, x);
        if (wacaSfx.paused)
          wacaSfx.play();
      }
      else {
        // if (!wacaSfx.paused)
        wacaSfx.pause();
      }
    }
  }
  // Method to draw Pacman
  draw() {
    // Body
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.position.x, this.position.y, this.radius,
      this.angle + Math.PI / 4, // Start angle based on direction
      this.angle - Math.PI / 4, // End angle based on direction
      false
    );
    ctx.lineTo(this.position.x, this.position.y);
    ctx.fill();

    // Eye
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(this.position.x + 5, this.position.y - 15, 5, 0, Math.PI * 2, true);
    ctx.fill();
  }

  // Method to prevent Pacman leaving canvas bounds
  checkBounds() {
    // Check if the right→ edge of Pacman is beyond the canvas width
    if ((this.position.x + this.radius) >= width) {
      this.position.x -= this.radius; // Move Pacman to the left← to keep it inside the canvas.
    }
    // Check if the left← edge of Pacman is beyond the canvas width
    if ((this.position.x - this.radius) <= 0) {
      this.position.x += this.radius; // Move Pacman to the right→ to keep it inside the canvas.
    }
    // Check if the bottom↓ edge of Pacman is beyond the canvas height
    if ((this.position.y + this.radius) >= height) {
      this.position.y -= this.radius; // Move Pacman upwards↑ to keep it inside the canvas.
    }
    // Check if the top↑ edge of Pacman is beyond the canvas height
    if ((this.position.y - this.radius) <= 0) {
      this.position.y += this.radius; // Move Pacman downwards↓ to keep it inside the canvas.
    }
  }

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Pacman Collision >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Method to detect collision between Pacman and Ghosts
  ghostCollisionDetect() {
    for (const ghost of ghosts) {
      // Only checks if the ghost actually exists
      if (ghost.exists) {
        const dx = this.position.x - ghost.x;
        const dy = this.position.y - ghost.y;
        const distance = Math.sqrt(dx * dx + dy * dy); // √(dx^2 + dy^2)
        if (distance < this.radius + ghost.radius) {
          this.life--; // Decrease the lives value.
          pacman.resetLocation(); // move pacman to default location
          navigator.vibrate([200, 50, 200]); // vibrate phone
          para.textContent = 'Score: ' + score + ' Lives: ' + this.life; // Update the stats display.
          console.log(para.textContent);
          if (this.exists && this.life < 1) {
            this.exists = false;
            navigator.vibrate([300, 50, 100, 50, 100, 200, 1500]); // vibrate phone
            return true;
          }
        }
      }
    }
    return false;
  }

  // Method to detect collision between Pacman and dots
  dotCollisionDetect() {
    for (const dot of dots) {
      // Only checks if the dot actually exists
      if (dot.exists) {
        const dx = this.position.x - dot.x;
        const dy = this.position.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy); // √(dx^2 + dy^2)

        if (distance < this.radius + dot.radius) {
          dot.exists = false; // Remove the dot from the canvas.
          score++; // Increase the score value.
          para.textContent = 'Score: ' + score + ' Lives: ' + this.life; // Update the stats display.
          window.navigator.vibrate(100);
        }
      }
    }
  }

  powerpelletCollisionDetect() {
    for (const powerpellet of powerpellets) {
      // Only checks if the powerpellet actually exists
      if (powerpellet.exists) {
        const dx = this.position.x - powerpellet.x;
        const dy = this.position.y - powerpellet.y;
        const distance = Math.sqrt(dx * dx + dy * dy); // √(dx^2 + dy^2)

        if (distance < this.radius + powerpellet.radius) {
          powerpellet.exists = false; // Remove the powerpellet from the canvas.
          window.navigator.vibrate(500);
        }
      }
    }
  }

  // Update Pacman. redraw, check bounds, check collision, update position.
  update() {
    // Adds velocity to Pacman's position
    if (this.exists) {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      pacman.checkBounds();
      if (!pacman.ghostCollisionDetect()) {
        pacman.dotCollisionDetect();
        pacman.powerpelletCollisionDetect();
      }
    }

    pacman.draw();
  }
}


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Logic >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Dots array and population
const dots = [];
while (dots.length < 50) {
  const radius = random(10, 20); // random radius between 10-20
  const dot = new Dot(
    // Position
    random(0 + radius, width - radius),
    random(0 + radius, height - radius),
    // Velocity
    random(0, 0),
    random(0, 0),
  );
  dots.push(dot);
}

// Powerpellets array and population
const powerpellets = [];
while (powerpellets.length < 4) {
  const radius = random(10, 20); // random radius between 10-20
  const powerpellet = new Powerpellet(
    // Position
    random(0 + radius, width - radius),
    random(0 + radius, height - radius),
    // Velocity
    random(0, 0),
    random(0, 0),
  );
  powerpellets.push(powerpellet);
}

// Ghosts array
const ghosts = [
  new Ghost('blinky', random(0 + this.radius, width - this.radius), random(0 + this.radius, height - this.radius), random(1, 3), random(1, 3)),
  // new Ghost('pinky', random(0 + this.radius, width - this.radius), random(0 + this.radius, height - this.radius), random(1, 3), random(1, 3)),
  // new Ghost('inky', random(0 + this.radius, width - this.radius), random(0 + this.radius, height - this.radius), random(1, 3), random(1, 3)),
  // new Ghost('clyde', random(0 + this.radius, width - this.radius), random(0 + this.radius, height - this.radius), random(1, 3), random(1, 3))
];

// Create Pacman
const pacman = new Pacman({ position: { x: 100, y: 100 } }, { velocity: { x: 0, y: 0 } });

var useTouchControls = true;
function toggleMobileControl() {
  // var mobileToggleButton = document.getElementById("mobileControlToggle"); // Get the button element
  useTouchControls = !useTouchControls;
  // if (useTouchControls && mobileToggleButton) {
  //   mobileToggleButton.value = 'Use Orientation';
  // } else{
  //   mobileToggleButton.value = 'Use Touch';
  // }
}

function setOrientation() {
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation
      .lock("landscape")
      .then(function () { // Orientation locked successfully
        console.log("Orientation locked to landscape.");
        // document.getElementById("fullscreenButton").style.color = "rgb(0,255,0)";
      })
      .catch(function (error) { // Handle any errors
        console.error("Error locking orientation:", error);
        // document.getElementById("fullscreenButton").style.color = "rgb(255,255,0)";
      });
  } else {
    // If orientation locking is not supported, you can display a message or perform another action.
    console.warn("Orientation locking is not supported in this browser.");
    // document.getElementById("fullscreenButton").style.color = "rgb(0,0,255)";
  }

  screen.orientation.addEventListener("change", (event) => {
    const type = event.target.type;
    const angle = event.target.angle;
    console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
  });
}

function runGame() {
  document.addEventListener('keydown', (event) => {
    if (!gameRunning && event.key == ' ') {
      document.getElementById("startScreen").style.display = "none";
      toggleFullscreen(true);
      setOrientation();
      startGame();
    }
  });
  document.addEventListener('touchstart', (event) => {
    if (!gameRunning) {
      document.getElementById("startScreen").style.display = "none";
      toggleFullscreen(true);
      setOrientation();
      startGame();
    }
  });
}

function startGame() {
  gameRunning = true;
  beginSfx.play();
  pacman.reset();
  animate();
}

// Main animation loop
function animate() {
  requestAnimationFrame(animate);

  clear();

  dots.forEach(dot => {
    if (dot.exists) {
      dot.draw();
      dot.update();
    }
  });

  powerpellets.forEach(powerpellet => {
    if (powerpellet.exists) {
      powerpellet.draw();
      powerpellet.update();
    }
  });

  ghosts.forEach(ghost => {
    ghost.update();
    ghost.draw();
  });

  if (pacman && pacman.exists) {
    pacman.update();
    // Tapa
  } else {
    gameOver();
  }
  // Vinna
  if (score > 49) {
    gameWin();
  }
}


const spriteSheet = new Image();
// Only starts animation loop if sprite is rendered
spriteSheet.addEventListener('load', () => {
  runGame(); // Start the animation loop
});
spriteSheet.src = "pacmansprites.png"; // Specifies sprite path