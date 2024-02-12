const colorPink = 'rgba(255,192,203)'
const colorBlack = 'rgba(0,0,0)'
const colorGreen = 'rgba(0, 255, 0)'
const colorRed = 'rgba(255,0,0)';

var gameOver = false;
var gamestarted = false;

const l_holes = [];
const l_startFinsh = [];
const l_player = [];

sound = new Audio();
sound.src = 'winSound.wav'
const keys = [];
let touchX = 0;
let touchY = 0;

const touchTreshold = 30;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


function setCanvasSize(){
  canvas.width =  document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
  console.log("setting canvas size w", canvas.width, "h", canvas.height);
}

function startGame() {
  gamestarted = true;
}

function fallJoke() {
  for (const player of l_player) {
    player.x = 25.0
    player.y = canvas.height / 2.0
    navigator.vibrate(200);
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const fullScreenButton = document.getElementById('fullScreenButton');
document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Enter") {
        toggleFullScreen();
      }
    },
    false,
  );


window.addEventListener('touchstart', e => {
  touchX = e.changedTouches[0].pageX
  touchY = e.changedTouches[0].pageY
  console.log("touchstart", touchY);
});
window.addEventListener('touchmove', e => {
  const dx = e.changedTouches[0].pageX - touchX;
  const dy = e.changedTouches[0].pageY - touchY;
  var swipeDistance = Math.sqrt(dx*dx + dy*dy);
  if (swipeDistance > touchTreshold) startGame();
});
window.addEventListener('touchend', e => {
  console.log('end');
});




function logScreen() {
  console.log("cancas w", canvas.width, "h", canvas.height)
      console.log("doc w", document.documentElement.clientWidth, "h", document.documentElement.clientHeight)
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    // logScreen();
    document.documentElement.requestFullscreen();
    screen.orientation.lock("landscape-primary")
    console.log("setting fullscreen")
    // logScreen();
    document.getElementById('fullScreenButton').style.visibility = 'hidden';
    
  }
  
  
};
fullScreenButton.addEventListener('click', toggleFullScreen)

function onOrientationChange() {
  if (screen.orientation.type.startsWith("portrait")) {
    return;
  }
  console.log("Orientation Changed");
  // logScreen();
  setCanvasSize();
  makePlayer();
  makeMap();
  loop();
}
window.addEventListener('orientationchange', onOrientationChange);

class Player {


  constructor(x, y, vx, vy, size, color) {
    this.angleX = 0.0;
    this.angleY = 0.0;
    this.speed = 5.0;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy =vy;
    this.size = size;
    this.color = color;

    window.addEventListener("deviceorientation", this.update_speed.bind(this), true);
    console.log("Create player")
  };
  draw() {
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.color;
      ctx.lineWidth = 3;
      ctx.arc(this.x, this.y, this.size,  0, 2 * Math.PI);
      ctx.fill();
  };
  movement() {
    if (gamestarted) {
    var dx = this.angleX/90.0 * this.speed;
    var dy = this.angleY/90.0 * this.speed;
    if (this.x + this.size + dx < canvas.width && this.x - this.size + dx > 0 ){
    this.x += dx;
    }
    if (this.y + this.size + dy < canvas.height && this.y - this.size + dy > 0 ){
      this.y += dy;
      }
    }
    
    // console.log("mov x", this.x, "y", this.y, "dx", dx, "dy", dy);
  }
  
  update_speed(event) {
    this.angleX = event.beta; // phone front back
    this.angleY = -event.gamma; //phone left right
    if(this.angleX < -90) this.angleX = 90.0;
    if(this.angleX > 90) this.angleX = 90.0;
    // console.log("beta x", this.angleX, " gamma y", this.angleY);
  }

  collisionDetect() {
    for (const hole of l_holes) {
      const dsx = this.x - hole.x;
      const dsy = this.y - hole.y;
      const distance = Math.sqrt(dsx * dsx + dsy * dsy);
      if (distance < this.size + hole.size){
        fallJoke();
      }
    }
    finish = l_startFinsh[1];
    const dsx = this.x - finish.x;
    const dsy = this.y - finish.y;
    const distance = Math.sqrt(dsx * dsx + dsy * dsy);
      if (distance < this.size + finish.size){
        gameOver = true;
  }
}
    
}



class Hole {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  };
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  
};
  
};
class Goal {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  };

    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
    
  };
  
};

function makePlayer() {
  marmaraKula = new Player(25.0, canvas.height / 2.0, 0, 0, 20, colorPink);
  l_player.push(marmaraKula)
}

function makeMap() {
  console.log("Make Map");
  logScreen();
  while (l_holes.length < 3) {
    const size = random(10,20);
    const hole = new Hole(
      random(70 + size,canvas.width - size),
      random(70 + size,canvas.height - size),
      50,
      colorBlack

    );

  l_holes.push(hole);
};


start = new Goal(0, canvas.height / 2, 70, colorGreen);
finish = new Goal(canvas.width, canvas.height / 2, 70, colorRed);

l_startFinsh.push(start)
l_startFinsh.push(finish)
}

function updateFrame() {
  if (!gameOver){
    ctx.clearRect(0,0, canvas.width, canvas.height);

    for (const hole of l_holes) {
      hole.draw();
    
    }
    for (const startFinish of l_startFinsh) {
      startFinish.draw();
    }

    for (const player of l_player) {
      player.collisionDetect();
      player.movement();
      player.draw();
    }
    if (gamestarted === false){
      ctx.font = "40px Courier New";
      ctx.textAlign = 'center';
      ctx.fillStyle = "#0000FF";
      ctx.fillText("Swipe to start game", canvas.width/2, canvas.height/2);
    }
  }
  
}

function loop() {
  if (!gameOver){
    updateFrame();
    requestAnimationFrame(loop);
  }
  else {
    sound.play();
    ctx.font = "40px Courier New";
    ctx.textAlign = 'center';
    ctx.fillStyle = "#0000FF";
    ctx.fillText("Leik Lokið!", canvas.width/2, canvas.height/2);
  }

};
