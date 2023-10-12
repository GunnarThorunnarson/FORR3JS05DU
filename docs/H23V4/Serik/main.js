"use strict"

// setup 

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const angle = Math.PI/180;
const colors = [`rgb(7, 0, 222)`,`rgb(250, 152, 5)`,`rgb(5, 250, 246)`,`rgb(255, 0, 195)`,`rgb(255, 0, 0)`];

const dead = [];
let touches = [];

let shock = true;
let time = 0;

const themesong = new Audio('themesong.mp3')

// function to generate random number

function random(min, max) { //gerir það sem nafnið segir býrtil tölu frá min uppað max
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

// function to read key input

function move(eve, obj){
  //console.log(eve,Object.hasOwn(eve,"target"),Object.hasOwn(eve,"key"))
    if (eve.key == "ArrowUp" || eve.key == "w"){
      obj.move[0] = true;
      obj.face[0] = true;
      obj.face[2] = false;
    }
    else if (eve.key == "ArrowLeft" || eve.key == "a"){
      obj.move[1] = true;
      obj.face[1] = true;
      obj.face[3] = false;
    }
    else if (eve.key == "ArrowDown" || eve.key == "s"){
      obj.move[2] = true;
      obj.face[2] = true;
      obj.face[0] = false;
    }
    else if (eve.key == "ArrowRight" || eve.key == "d"){
      obj.move[3] = true;
      obj.face[3] = true;
      obj.face[1] = false;
    }
    if (eve.key == " "){
      obj.life = 0;
    }
}
function touchMove(eve, obj){
  let touchStart = eve.touches[0];
  let touchEnd = eve.touches[-1];
  let cVectorNorm = normVector(touchStart.clientX,touchEnd.clientX,touchStart.clientY,touchEnd.clientY);
  obj.velX = cVectorNorm.x*5;
  obj.velY = cVectorNorm.y*5;
  //console.log(cVectorNorm,"X:",obj.velX,"Y:",obj.velY)
  obj.touch = true;
  if (obj.velX > 0){
    obj.face[3] = true;
    obj.face[1] = false;
  }
  else if (Math.floor(obj.velX) < 0){
    obj.face[1] = true;
    obj.face[3] = false;
  }
  if (Math.floor(obj.velY) > 0){
    obj.face[2] = true;
    obj.face[0] = false;
  }
  else if (Math.floor(obj.velY) < 0){
    obj.face[0] = true;
    obj.face[2] = false;
  }
}
function stop(eve, obj){
  if (eve.key == "ArrowUp" || eve.key == "w"){
    obj.move[0] = false;
  }
  if (eve.key == "ArrowLeft" || eve.key == "a"){
    obj.move[1] = false;
  }
  if (eve.key == "ArrowDown" || eve.key == "s"){
    obj.move[2] = false;
  }
  if (eve.key == "ArrowRight" || eve.key == "d"){
    obj.move[3] = false;
  }
}

function pointDist(x1,x2,y1,y2){ //reiknir lengd milli tvo punkta
  return Math.sqrt((x1-x2)**2 + (y1-y2)**2);
}

function normVector(x1,x2,y1,y2) {
  let dist = pointDist(x1,x2,y1,y2);
  let cVector = {x: x1 - x2, y: y1 - y2};
  let cVectorNorm = {x: cVector.x / dist, y: cVector.y / dist};
  return cVectorNorm;
}

// collision detection

function circleCollide(obj1,obj2){ //reiknir hvort tveir hringir snertast
  return pointDist(obj1.x,obj2.x,obj1.y,obj2.y) <= Math.sqrt((obj1.size+obj2.size)*(obj1.size+obj2.size));
}
function circlePhysics(obj1,obj2){ //sendir hring í burtu frá það sem hann var að fara
  let cVectorNorm = normVector(obj1.x,obj2.x,obj1.y,obj2.y);
  let rVelocity = {x: obj1.velX - obj2.velX, y: obj1.velY - obj2.velY}; 
  let force = rVelocity.x * cVectorNorm.x + rVelocity.y * cVectorNorm.y;
  if (force < 0){
      return;
  }
  else{
      //console.log("force",force,"cVectorNorm",cVectorNorm,"cVector",cVector,"distance",distance); //debug
      obj1.velX -= (force * cVectorNorm.x);
      obj1.velY -= (force * cVectorNorm.y);
      obj2.velX += (force * cVectorNorm.x);
      obj2.velY += (force * cVectorNorm.y);
  }

}
function collision(obj1,objArray){ //finnur út hvort ákveðnir hlutir eru að snerta hvort annað og breytir þeim hlut eftir því hvað þeir eru
  for (const obj2 of objArray){
    //console.log(obj2);
      if (Object.hasOwn(obj1, "life") && obj1 !== obj2 && circleCollide(obj1, obj2)){
        //console.log("1");
          if (obj2.edible){
            //console.log("2");
              if (obj2.powerup){
                //console.log("3");
                obj1.life += 1;
                obj1.score += obj2.score;
                obj1.powered.startTime();
                let index = objects.indexOf(obj2);
                //console.log(index,"index");
                dead.push(objects.slice(index,index+1));
                let slice = objects.slice(index+1);
                objects.splice(index,objects.length-index);
                for (const i of slice){
                  objects.push(i);
                }
                //console.log(objects.pop());
              }
              else {
                //console.log("!");
                obj1.score += obj2.score;
                let index = objects.indexOf(obj2);
                dead.push(objects.slice(index,index+1));
                let slice = objects.slice(index+1);
                objects.splice(index,objects.length-index);
                for (const i of slice){
                  objects.push(i);
                }
              }

          }
          else if(obj2.hurt){
              obj1.life -= 1;
              navigator.vibrate(500);
              obj1.x = Math.floor(width/2);
              obj1.y = Math.floor(height/2);
              obj1.move = [false,false,false,false];
              //console.log(obj1,"got hurt by",obj2); //debug
              obj2.x = obj2.x+(obj2.velX*2);
              obj2.y = obj2.y+(obj2.velY*2);
          }
      }
      else if (circleCollide(obj1, obj2) && obj1.hurt === obj2.hurt && obj1 !== obj2){
          circlePhysics(obj1,obj2);
          //console.log(obj1,"colliding with",obj2); //debug
      }
  }
}

// class definitions

// Class used for keeping track of time credit Axel frá vorönn 2023
class Stopwatch {
  constructor() {
      this._startTime = 0;
      this._active = false;
  }

  // Starts the timer
  startTimer() {
      this._active = true;
      this._startTime = time;
  }

  // Stops and resets the timer
  stopTimer() {
      this._active = false;
      this._startTime = 0;
  }

  // Returns whether the timer is active
  isActive() {
      return this._active;
  }

  // Returns the time the stopwatch was started in seconds
  startTime() {
      return this._startTime;
  }

  // Returns the amount of time passed since the stopwatch was started in seconds
  elapsed() {
      return time - this._startTime;
  }
}
//-----------------------------------------------------------------------------------------------------------

class Power_Pelletes {
    constructor(x, y, color, size) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.hurt = false;
        this.edible = true;
        this.powerup = true;
        this.score = 50;
        this.time = new Stopwatch();
      }
    draw() {   
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
    blink() {
        let growth = 4;
        let maxsize = 8;
        if (this.size < maxsize) {
          this.size += growth;
          //console.log(this, "I grow")
        }
        else {
          this.size -= growth;
          //console.log(this, "I shrink")
        }
    }
    update() {
      if (!(this.time.isActive())){
        this.blink();
        this.time.startTimer();
      }
      else if (this.time.elapsed() >= 1500){
        this.time.stopTimer();
      }
    }
}

class Pac_Man {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
        this.life = 3;
        this.score = 0;
        this.hurt = false;
        this.edible = false;
        this.powerup = false;
        this.invincible = new Stopwatch();
        this.powered = new Stopwatch();
        this.move = [false,false,false,false];//N,V,S,E
        this.face = [false,false,false,true];
        this.touch = false;
        this.dot = true;
      }
    draw() {
        ctx.beginPath();
        if(this.face[3] && !(this.face[0] || this.face[2])) {
          ctx.fillStyle = this.color;
          ctx.arc(this.x, this.y, this.size, angle*30, angle*330, false);
          ctx.lineTo(this.x, this.y)
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = `rgb(0, 0, 0)`;
          ctx.arc(this.x+this.size*0.2, this.y-this.size*0.66, 2, 0, angle*360);
        }
        else if(this.face[1] && !(this.face[0] || this.face[2])) {
          ctx.fillStyle = this.color;
          ctx.arc(this.x, this.y, this.size, angle*150, angle*210, true);
          ctx.lineTo(this.x, this.y)
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = `rgb(0, 0, 0)`;
          ctx.arc(this.x-this.size*0.2, this.y-this.size*0.66, 2, 0, angle*360);
        }
        else if(this.face[0]) {
          if (this.velX < 0){
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.size, angle*195, angle*255, true);
            ctx.lineTo(this.x, this.y)
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = `rgb(0, 0, 0)`;
            ctx.arc(this.x+this.size*0.2, this.y-this.size*0.66, 2, 0, angle*360);
          }
          else if (this.velX > 0){
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.size, angle*285, angle*345, true);
            ctx.lineTo(this.x, this.y)
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = `rgb(0, 0, 0)`;
            ctx.arc(this.x-this.size*0.2, this.y-this.size*0.66, 2, 0, angle*360);
          }
          else {
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.size, angle*240, angle*300, true);
            ctx.lineTo(this.x, this.y)
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = `rgb(0, 0, 0)`;
            ctx.arc(this.x-this.size*0.6, this.y-this.size*0.33, 2, 0, angle*360);
          }
        }
        else if(this.face[2]) {
          if (this.velX < 0){
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.size, angle*105, angle*165, true);
            ctx.lineTo(this.x, this.y)
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = `rgb(0, 0, 0)`;
            ctx.arc(this.x-this.size*0.6, this.y-this.size*0.2, 2, 0, angle*360);
          }
          else if (this.velX > 0){
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.size, angle*15, angle*75, true);
            ctx.lineTo(this.x, this.y)
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = `rgb(0, 0, 0)`;
            ctx.arc(this.x+this.size*0.6, this.y-this.size*0.2, 2, 0, angle*360);
          }
          else {
          ctx.fillStyle = this.color;
          ctx.arc(this.x, this.y, this.size, angle*60, angle*120, true);
          ctx.lineTo(this.x, this.y)
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = `rgb(0, 0, 0)`;
          ctx.arc(this.x+this.size*0.6, this.y+this.size*0.33, 2, 0, angle*360);}
        }
        ctx.fill();
    }
    update() {
      if (this.powered.isActive()){
        if (this.powered.elapse() >= 6000){
          shock = true;
          this.powered.stopTimer();
          objects[5].color = colors[4];
          objects[5].hurt = true;
          objects[5].edible = false;
          objects[6].color = colors[3];
          objects[6].hurt = true;
          objects[6].edible = false;
          objects[7].color = colors[2];
          objects[7].hurt = true;
          objects[7].edible = false;
          objects[8].color = colors[1];
          objects[8].hurt = true;
          objects[8].edible = false;

        }
        else if (shock){
          shock = false;
          objects[5].color = colors[0];
          objects[5].hurt = false;
          objects[5].edible = true;
          objects[6].color = colors[0];
          objects[6].hurt = false;
          objects[6].edible = true;
          objects[7].color = colors[0];
          objects[7].hurt = false;
          objects[7].edible = true;
          objects[8].color = colors[0];
          objects[8].hurt = false;
          objects[8].edible = true;
        }
      }
      if (this.dot){
        this.life = 0;
      }
      if (!(this.touch)){
        if (this.move[0] && !(this.move[2])){
          this.velY = -(this.size/2);
        }
        if (this.move[1] && !(this.move[3])){
          this.velX = -(this.size/2);
        }
        if (this.move[2] && !(this.move[0])){
          this.velY = (this.size/2);
        }
        if (this.move[3] && !(this.move[1])){
          this.velX = (this.size/2);
        }
        if (!(this.move[0]) && !(this.move[2])){
          this.velY = 0;
        }
        if (!(this.move[3]) && !(this.move[1])){
          this.velX = 0;
        }
        if (this.velY == 0){
          this.face[2] = false;
          this.face[0] = false;
        }
      }
      if (!(this.velY < 0 && this.y-this.size <= 0) && !(this.velY > 0 && this.y+this.size >= height))
      {
        this.y += this.velY;
      }
      if (!(this.velX < 0 && this.x-this.size <= 0) && !(this.velX > 0 && this.x+this.size >= width))
      {
        this.x += this.velX;
      }
    }      
}

class Ghost {
    constructor(velX, velY, color, size) {
        this.x = random(20,width-20);
        this.y = random(20,height-20);
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
        this.hurt = true;
        this.edible = false;
        this.powerup = false;
        this.score = 100;
      }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
    update() {
      if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
        this.x = width-(this.size+4);
      }
    
      if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
        this.x = this.size+4;
      }
    
      if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
        this.y = height-(this.size+4);
      }
    
      if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
        this.y = this.size+4;
      }
    
      this.x += this.velX;
      this.y += this.velY;
      }      
}

class Dot {
  constructor(x, y, size, color,){
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.hurt = false;
    this.edible = true;
    this.powerup = false;
    this.score = 10;
  }
  draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
  }
  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
      this.x = width-(this.size+4);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
      this.x = this.size+4;
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
      this.y = height-(this.size+4);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
      this.y = this.size+4;
    }
    }   
}

// object defnitions

const objects = [];

const pacMan = new Pac_Man(Math.floor(width/2),Math.floor(height/2),0,0,`rgb(242, 227, 56)`,10);

const pelletBL = new Power_Pelletes(30,height-30,`rgb(242, 219, 87)`,8);
const pelletBR = new Power_Pelletes(width-30,height-30,`rgb(242, 219, 87)`,8);
const pelletTL = new Power_Pelletes(30,30,`rgb(242, 219, 87)`,8);
const pelletTR = new Power_Pelletes(width-30,30,`rgb(242, 219, 87)`,8);

const blinky = new Ghost(5,1,`rgb(255, 0, 0)`,8);
const pinky = new Ghost(-1.5,-4.5,`rgb(255, 0, 195)`,6);
const inky = new Ghost(3,-3,`rgb(5, 250, 246)`,6);
const vX = random(1,11);
const vY = 12-vX;
const clyde = new Ghost(vX,vY,`rgb(250, 152, 5)`,12);

let fWidth = width/(10);
let fHeight = height/(5);
for (let y = 0; y < 5; y++){
  for (let x = 0; x < 10; x++){
    const dot = new Dot((x)*fWidth+fWidth/2,(y)*fHeight+fHeight/2,2,`rgb(242, 219, 87)`)
    objects.push(dot);
  }
}

objects.unshift(pacMan,pelletBL,pelletBR,pelletTL,pelletTR,blinky,pinky,inky,clyde);

//runtime

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, width, height);
    objects[0].dot = true;
    for (let i of objects){
      if (i.score == 10){
        objects[0].dot = false;
      }
    }
    ctx.font = "10px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${objects[0].score} Life: ${objects[0].life}`,5,height-10);
    for (const obj of objects) {
      obj.draw();
      obj.update();
      //console.log(!(Object.hasOwn(obj, "edible")));
      if (!(obj.edible)){
        //console.log(obj);
        collision(obj,objects);
      }
    }
    if (objects[0].life > 0) {
      requestAnimationFrame(loop);
    }
    else {
      alert("Game Over!");
    }
    time = performance.now();
  }

//init
window.addEventListener("resize", function() {
  //console.log(event);
  width = (canvas.width = window.innerWidth);
  height = (canvas.height = window.innerHeight);
  objects[1].x = 30;
  objects[1].y = height-30;
  objects[2].x = width-30;
  objects[2].y = height-30;
  objects[3].x = 30;
  objects[3].y = 30;
  objects[4].x = width-30;
  objects[4].y = 30;
});
window.addEventListener("keydown", (eve) => {
  eve.preventDefault;
  if (eve.key == "Enter"){
    document.documentElement.requestFullscreen();
  }
  move(eve,objects[0]);
});
window.addEventListener("keyup", (eve) => {
  eve.preventDefault;
  stop(eve,objects[0]);
});
window.addEventListener("touchstart", (eve) => {
  eve.preventDefault;
  // For each touch, record it into the this._touches variable for future access. þetta litla kóða búti er gerður af axel
  //for (let i = 0; i < eve.changedTouches.length; i++) {
  //    touches[eve.changedTouches[i].identifier] = eve.changedTouches[i];
  //}
  //------------------------------------------------------------------------------------------------------------------------
});
window.addEventListener("touchmove", (eve) => {
  eve.preventDefault;
});
window.addEventListener("touchend", (eve) => {
  eve.preventDefault;
  firstTouch = touches[0]
  lastTouch = touches[-1]
  if (firstTouch.clientX == lastTouch.clientX && firstTouch.clientY == lastTouch.clientY){
    document.documentElement.requestFullscreen();
    screen.orientation.lock("landscape-primary");
  }
  else if (firstTouch.clientX != lastTouch.clientX || firstTouch.clientY != lastTouch.clientY){
    touchMove(eve,objects[0]);
  }
});
themesong.addEventListener("canplaythrough", () =>{
  themesong.loop = true;
  themesong.play();
})
window.addEventListener("load", () => {
  loop();
});