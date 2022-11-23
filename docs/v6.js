const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');



const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
var stepWidthFactor = 200;
document.addEventListener('touchstart', e => {

  mouseX = e.clientX;
  mouseY = e.clientY;
  packman.vx = (packman.x - mouseX) / stepWidthFactor * -1;
  packman.vy = (packman.y - mouseY) / stepWidthFactor * -1;

})
document.addEventListener('touchmove', e => {
  ;[...e.changedTouches].forEach(touch => {
    packman.y = `${touch.pageY}`
    packman.x = `${touch.pageX}`
  })

})
document.addEventListener('touchend', e => {
  console.log("end")
})

window.addEventListener('resize', function(){
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;  
});

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
const colorYellow = 'rgba(255,206,86,1)';

class Ball {

  constructor(x, y, velX, velY, color, size) {
     this.x = x;
     this.y = y;
     this.velX = velX;
     this.velY = velY;
     this.color = color;
     this.size = size;

  }

  draw() {
     ctx.beginPath();
     ctx.fillStyle = this.color;
     ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
     ctx.fill();
     ctx.closePath();
  }


}


const balls = [];

while (balls.length < 25) {
   const size = random(10,20);
   const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size,
      
   );
    
  balls.push(ball);
}

let packman = {
    x : Math.floor(Math.random() * innerWidth),
    y : Math.floor(Math.random() * innerHeight),
    vx : 10,
    vy : 10,
    radius : 50,
    angle : Math.PI / 180,
    color : colorYellow,
    
    draw: function(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, this.angle * 30, this.angle * 330, false);
      ctx.lineTo(this.x, this.y);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();

    }
};



function packMove(){
  requestAnimationFrame(packMove);
  ctx.clearRect(0,0,innerWidth,innerHeight);
  packman.draw()
  if (balls.length <= 0){
    alert("Game Over")
  }
  for (const ball of balls) {
    ball.draw();
    if (Math.hypot(this.x - packman.x, this.y - packman.y) < this.radius + packman.radius){
        console.log("touch")
        window.navigator.vibrate(200);
        balls.splice(ball, 1)
    } 
  }
}
packMove();