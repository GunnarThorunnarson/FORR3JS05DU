"use strict";
const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth - 3;
let height = canvas.height = window.innerHeight - 4;

const angle = Math.PI / 180;

const KEY_W = 87;
const KEY_S = 83;
const KEY_D = 68;
const KEY_A = 65;

const KEY_arrowUp = 38;
const KEY_arrowDown = 40;
const KEY_arrowLeft = 37;
const KEY_arrowRight = 39;

window.addEventListener("devicemotion", handleDeviceMotion);

function handleDeviceMotion(event) {
  const accelerationX = event.accelerationIncludingGravity.x;
  const accelerationY = event.accelerationIncludingGravity.y;

  const sensitivity = 0.1;

  if (Math.abs(accelerationX) > Math.abs(accelerationY)) {
    if (accelerationX > sensitivity) {
      pack_madur.velX = 4;
      pack_madur.velY = 0;
    } else if (accelerationX < -sensitivity) {
      pack_madur.velX = -4;
      pack_madur.velY = 0;
    }
  } else {
    if (accelerationY > sensitivity) {
      pack_madur.velX = 0;
      pack_madur.velY = 4;
    } else if (accelerationY < -sensitivity) {
      pack_madur.velX = 0;
      pack_madur.velY = -4;
    }
  }
}

document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case KEY_W:
      pack_madur.velY = -4;
      break;
    case KEY_S:
      pack_madur.velY = 4;
      break;
    case KEY_A:
      pack_madur.velX = -4;
      break;
    case KEY_D:
      pack_madur.velX = 4;
      break;
    case KEY_arrowUp:
      pack_madur.velY = -4;
      break;
    case KEY_arrowDown:
      pack_madur.velY = 4;
      break;
    case KEY_arrowLeft:
      pack_madur.velX = -4;
      break;
    case KEY_arrowRight:
      pack_madur.velX = 4;
      break;
  }

  if (event.keyCode === KEY_W && event.keyCode === KEY_D) {
    pack_madur.velX = 4;
    pack_madur.velY = -4;
  } else if (event.keyCode === KEY_W && event.keyCode === KEY_A) {
    pack_madur.velX = -4;
    pack_madur.velY = -4;
  } else if (event.keyCode === KEY_S && event.keyCode === KEY_D) {
    pack_madur.velX = 4;
    pack_madur.velY = 4;
  } else if (event.keyCode === KEY_S && event.keyCode === KEY_A) {
    pack_madur.velX = -4;
    pack_madur.velY = 4;
  }
});

document.addEventListener("keyup", function (event) {
  switch (event.keyCode) {
    case KEY_W:
      pack_madur.velY = 0;
      break;
    case KEY_S:
      pack_madur.velY = 0;
      break;
    case KEY_A:
      pack_madur.velX = 0;
      break;
    case KEY_D:
      pack_madur.velX = 0;
      break;
    case KEY_arrowUp:
      pack_madur.velY = 0;
      break;
    case KEY_arrowDown:
      pack_madur.velY = 0;
      break;
    case KEY_arrowLeft:
      pack_madur.velX = 0;
      break;
    case KEY_arrowRight:
      pack_madur.velX = 0;
      break;
  }
});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function velos() {
    let vel = 0;
    vel = random(-7, 7);
    if (vel === 0) {
      vel = 1;
    }
    return vel;
  }

  function toggleGhostVisibility() {
    for (const ghost of ghosts) {
      ghost.isVisible = !ghost.isVisible;
    }
  }
  
  function handlePowerPelletEaten() {
    toggleGhostVisibility();
    setTimeout(() => {
      toggleGhostVisibility();
    }, 5000);
  }

  function over() {
    console.log("reloading in 5 sek");
    setTimeout(() => {
      location.reload();
    }, 5000);
  }

  function toggleFullScreen(){
    if (!document.fullscreenElement) {
      canvas.requestFullscreen().catch(err => {
        alert("Error, can't enable Full-screen mode")
      });
    }
  }
  window.addEventListener('click', toggleFullScreen);

  function activateGhostVulnerability() {
    console.log("Going for the kill")
    for (const ghost of ghosts) {
      ghost.isVulnerable = true;
    }

    handlePowerPelletEaten();
  
    setTimeout(() => {
      for (const ghost of ghosts) {
        ghost.isVulnerable = false;
      }
    }, 5000);
  }

  function playSound(audio1) {
    let audio2 = audio1.cloneNode();
    audio2.play();
  }

  class Ghosts {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
      this.isVulnerable = false;
      this.isLive = true;
      this.sound = new Audio();
      this.sound.src = 'yoda-death.mp3';
    }
    draw() {
      let radius = this.size;
  let feet = 4;
  let head_radius = radius * 0.8;
  let foot_radius = head_radius / feet;
  ctx.save();
  ctx.strokeStyle = "white";
  if (this.isVulnerable) {
    ctx.fillStyle = "blue";
  } else {
    ctx.fillStyle = this.color;
  }
  ctx.lineWidth = radius * 0.05;

  for (let foot = 0; foot < feet; foot++) {
    ctx.beginPath();
    ctx.arc(
      this.x - (2.5 * foot_radius * foot) + foot_radius + 8,
      this.y + radius,
      foot_radius, 0, Math.PI
    );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.arc(this.x, this.y, radius, Math.PI, 0, false);
  ctx.lineTo(this.x + radius, this.y + radius);
  ctx.lineTo(this.x - radius, this.y + radius);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(this.x - head_radius / 2.5, this.y - head_radius / 2, head_radius / 3, 0, 2 * Math.PI);
  ctx.arc(this.x + head_radius / 3.5, this.y - head_radius / 2, head_radius / 3, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(this.x - head_radius / 2, this.y - head_radius / 2.2, head_radius / 8, 0, 2 * Math.PI);
  ctx.arc(this.x + head_radius / 4, this.y - head_radius / 2.2, head_radius / 8, 0, 2 * Math.PI);
  ctx.fill();

  ctx.restore();
}
      update() {
        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
        }
      
        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
        }
      
        if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
        }
      
        if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
        }
      
        this.x += this.velX;
        this.y += this.velY;
      }
      collisionDetect() {
        for (const ghost of ghosts) {
          if (this !== ghost && ghost.isLive === true) {
            const dx = this.x - ghost.x;
            const dy = this.y - ghost.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ghost.size) {
              ghost.velX = -ghost.velX;
              ghost.velY = -ghost.velY;
              this.velX = -this.velX;
              this.velY = -this.velY;
            }
          }
          else if (this !== pack_madur && ghost.isLive === true) {
            const dx = this.x - pack_madur.x;
            const dy = this.y - pack_madur.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
    
            if (distance < this.size + ghost.size) {
              if (!pack_madur.isInvincible) {
                if (ghost.isVulnerable) {
                  ghost.isLive = false;
                  ghost.sound.play();
                } else {
                pack_madur.pack_man_lif -= 1;
                pack_madur.sound.play();
                window.navigator.vibrate(200);
                pack_madur.activateInvincibility();
              }
            }
          }
        }
      }
  }
  }
  class Pack_Man {
    constructor(x, y, velX, velY, size, pack_man_lif) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.size = size;
      this.pack_man_lif = pack_man_lif;
      this.isInvincible = false;
      this.invincibilityTimer = null;
      this.pack_score = 0;
      this.sound = new Audio();
      this.sound.src = 'roblox-death.mp3';

    }
    draw() {
      ctx.beginPath();
      ctx.strokeStyle = "Yellow";
      
      const angle = Math.atan2(this.velY, this.velX);
  
      const mouthX1 = this.x + this.size * Math.cos(angle - Math.PI / 4);
      const mouthY1 = this.y + this.size * Math.sin(angle - Math.PI / 4);
      const mouthX2 = this.x + this.size * Math.cos(angle + Math.PI / 4);
      const mouthY2 = this.y + this.size * Math.sin(angle + Math.PI / 4);
  
      ctx.arc(this.x, this.y, this.size, angle + Math.PI / 4, angle - Math.PI / 4, false);
      ctx.lineTo(this.x, this.y);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.closePath();
  
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(mouthX1, mouthY1);
      ctx.lineTo(mouthX2, mouthY2);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    }
      update() {
        if ((this.x + this.size) >= width) {
          this.x = width - 30;
        }
      
        if ((this.x - this.size) <= 0) {
          this.x = 30;
        }
      
        if ((this.y + this.size) >= height) {
          this.y = height - 30;
        }
      
        if ((this.y - this.size) <= 0) {
          this.y = 30;
        }
      
        this.x += this.velX;
        this.y += this.velY;
      }
    activateInvincibility() {
      if (!this.isInvincible) {
        this.isInvincible = true;
        clearTimeout(this.invincibilityTimer);
        this.invincibilityTimer = setTimeout(() => {
          this.isInvincible = false;
        }, 2000);
      }
    }
  }
  class Power_Pellets {
    constructor(x, y, size, erLif) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.erLif = erLif;
      this.isVisible = true;
      this.sound = new Audio();
      this.sound.src = 'power-star.mp3';
    }
    draw() {
      if (this.isVisible) {
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }
      }
      collisionDetect() {
        for (const pallet of pallets) {
          if (this !== pack_madur) {
            const dx = this.x - pack_madur.x;
            const dy = this.y - pack_madur.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + pallet.size) {
              this.erLif = false;
              this.sound.play();
              setTimeout(() => {
                this.sound.pause();
              }, 5000);
              activateGhostVulnerability();
            }
          }
        }
      }
  }

  class PacManDot {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.isVisible = true;
      this.sound = new Audio;
      this.sound.src = 'ding.mp3';
    }
  
    draw() {
      if (this.isVisible) {
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }
    }
  
    collisionDetect() {
      if (this.isVisible) {
        const dx = this.x - pack_madur.x;
        const dy = this.y - pack_madur.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + pack_madur.size) {
          pack_madur.pack_score += 1;
          playSound(this.sound)
          this.isVisible = false;
        }
      }
    }
  }

  let pallets = [];
  let ghosts = [];
  let pacManDots = [];

  for (let i = 0; i < 50; i++) {
    const dot = new PacManDot(random(10, width), random(10, height), 5);
    pacManDots.push(dot);
  }
  
  
    const pack_madur = new Pack_Man(40, 40, 0, 0, 20, 3);
  
  const size = random(10, 20)
  
    

  function init() {
    pallets = [];
    ghosts = [];
    pacManDots = [];
    const power_Pellet_1 = new Power_Pellets(30, 30, 10, true);
  
    const power_Pellet_2 = new Power_Pellets(30, height-30, 10, true);
  
    const power_Pellet_3 = new Power_Pellets(width-30, height-(height-30), 10, true);
  
    const power_Pellet_4 = new Power_Pellets(width-30, height-30, 10, true);

    const blinky = new Ghosts(random(0 + size, width - size), random(0 + size, height - size), velos(), velos(), "red", 15);
  
  
    const pinky = new Ghosts(random(0 + size, width - size), random(0 + size, height - size), velos(), velos(), "pink", 15);
  
  
    const inky = new Ghosts(random(0 + size, width - size), random(0 + size, height - size), velos(), velos(), "cyan", 15);
  
  
    const clyde = new Ghosts(random(0 + size, width - size), random(0 + size, height - size), velos(), velos(), "orange", 15);
  

    if (pack_madur.pack_score === 0) {
      for (let i = 0; i < 50; i++) {
        const dot = new PacManDot(random(10, width), random(10, height), 5);
        pacManDots.push(dot);
      }
    }
    else {
      let tala = 50 - pack_madur.pack_score;
      for (let i = 0; i < tala; i++) {
        const dot = new PacManDot(random(10, width), random(10, height), 5);
        pacManDots.push(dot);
      }
    }

    if (power_Pellet_1.erLif) {
      pallets.push(power_Pellet_1)
    }
    if (power_Pellet_2.erLif) {
      pallets.push(power_Pellet_2)
    }
    if (power_Pellet_3.erLif) {
      pallets.push(power_Pellet_3)
    }
    if (power_Pellet_4.erLif) {
      pallets.push(power_Pellet_4)
    }

    if (blinky.isLive) {
      ghosts.push(blinky)
    }
    if (pinky.isLive) {
      ghosts.push(pinky)
    }
    if (inky.isLive) {
      ghosts.push(inky)
    }
    if (clyde.isLive) {
      ghosts.push(clyde)
    }
  }
  
  function togglePowerPelletVisibility() {
    for (const pellet of pallets) {
      pellet.isVisible = !pellet.isVisible;
    }
  }

  init();

  setInterval(togglePowerPelletVisibility, 500);

  function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
  
    for (const ghost of ghosts) {
      if (ghost.isLive == true) {
        ghost.update();
        ghost.collisionDetect();
        ghost.draw();
      }
    }

    for (const pallet of pallets) {
      if (pallet.erLif === true) {
        pallet.draw();
        pallet.collisionDetect();
    }}
  
    for (const dot of pacManDots) {
      if (dot.isVisible) {
        dot.collisionDetect();
        dot.draw();
      }
    }
  
    pack_madur.draw();
    pack_madur.update();

    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.fillText('stig ' + pack_madur.pack_score, 10, 30);
    ctx.fillText('líf ' + pack_madur.pack_man_lif, 90, 30);
  
    if (pack_madur.pack_score === 50) {
      ctx.fillStyle = 'yellow';
      ctx.font = '40px Arial';
      ctx.fillText('YOU WIN!!', width / 2, height / 2)
      over();
    } else if (pack_madur.pack_man_lif === 0) {
      ctx.fillStyle = 'red';
      ctx.font = '40px Arial';
      ctx.fillText('Game Over', width / 2, height / 2);
      over();
    }
    else {
      window.requestAnimationFrame(loop);
    }
  }

  window.addEventListener('resize', function() {
    width = canvas.width = window.innerWidth - 3;
    height = canvas.height = window.innerHeight - 4;
  
    init();
  })

  window.addEventListener("load", loop);

  window.addEventListener('fullscreenchange',()=>{
    screen.orientation.lock('landscape-primary')
  });