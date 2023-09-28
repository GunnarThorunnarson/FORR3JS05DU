"use strict";
  

// setur upp canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const angle = Math.PI / 180;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const fullscreen = document.getElementById("FullScreenButton");
const game = document.getElementById("game");


// event listinerar
window.addEventListener("load", (event) => {
    lockToLandscape();
    gameOn();
});

window.addEventListener("resize", function()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    powerpelletUpdate();
});



// ------------------------------------------------------------------------
class PowerPellets {
    constructor (x,y,size, color, isCollinding){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.isCollinding = isCollinding;
    }


    drawPellet(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true); // Outer circle
        ctx.fill(); 
    }

    update(){
    }
}

class PacMan {
    constructor (angle, velX, velY,x , y, size, a1, a2, hp){
        this.angle = angle;
        this.velX = velX;
        this.velY = velY;
        this.x = x;
        this.y = y;
        this.size = size;
        this.v1 = a1;
        this.v2 = a2;

        this.isCollindingPowerPellet = false;
        this.isCollindingGhost = false;
        this.hp = hp;
    }

    drawPacMan(){
        ctx.beginPath();
        ctx.fillstyle = 'rgb(255,255,0)';
        ctx.arc(this.x, this.y, this.size, this.angle* this.v1, this.angle* this.v2, false);
        ctx.lineTo(this.x,this.y);
        ctx.closePath();
        ctx.fill();
    }


    update() {
        if ((this.x + this.size) >= canvas.width) {
           this.velX = 0;
           this.x = (this.x - this.size) - 1;
        }
  
        if ((this.x - this.size) <= 0) {
           this.velX = 0;
           this.x = (this.x + this.size) - 1;
        }
  
        if ((this.y + this.size) >= canvas.height) {
           this.velY = 0;
           this.y = (this.y - this.size) - 1;
        }
  
        if ((this.y - this.size) <= 0) {
           this.velY = 0;
           this.y = (this.y + this.size) - 1;
        }
  
        this.x += this.velX;
        this.y += this.velY;
     }

}

class Ghosts {
    constructor (velX, velY, x, y, size, color, isCollinding){
        this.velX = velX;
        this.velY = velY;
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.isCollinding = isCollinding;
    }

    drawGhosts() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true); // Outer circle
        ctx.fill(); 
    }

    update() {
        if (this.y + this.size > canvas.height || this.y + this.size < 0) {
            this.velY = -this.velY;
        }
        if (this.x + this.size > canvas.width || this.x + this.size < 0) {
            this.velX = -this.velX;
        }
        if (this.y - this.size > canvas.height || this.y - this.size < 0) {
            this.velY = -this.velY;
        }
        if (this.x - this.size > canvas.width || this.x - this.size < 0) {
            this.velX = -this.velX;
        }

        this.x += this.velX;
        this.y += this.velY;
    }
}

class Dots {
    constructor (x , y,size, color, isCollinding){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;

        this.isCollinding = isCollinding;
    }

    drawDot(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true); // Outer circle
        ctx.fill(); 
    }
    
}


// ------------------------------------------------------------

let topLeft = new PowerPellets(75,75,20, 'rgb(255,255,0)', false);
let bottomRight = new PowerPellets(canvas.width - 75,canvas.height - 75,20, 'rgb(255,255,0)',false);
let bottomLeft = new PowerPellets(75,canvas.height - 75,20, 'rgb(255,255,0)',false);
let topRight = new PowerPellets(canvas.width - 75,75,20, 'rgb(255,255,0)',false);

let pacman = new PacMan(angle, 0, 0, 350, 300, 30, 30, 330, 3);

let blinky = new Ghosts(-2, 2, random(0 + 38, canvas.width - 38), random(0 + 38, canvas.height - 38), 20, 'rgb(255,0,0)', false);
let pinky = new Ghosts(2, 2, random(0 + 38, canvas.width - 38), random(0 + 38, canvas.height - 38), 20, 'rgb(255,192,203)', false);
let inky = new Ghosts(2, -2, random(0 + 38, canvas.width - 38), random(0 + 38, canvas.height - 38), 20, 'rgb(0,255,255)', false);
let clyde = new Ghosts(-2, 2, random(0 + 38, canvas.width - 38), random(0 + 38, canvas.height - 38), 20, 'rgb(255,69,0)', false);

let ghostSettings = [blinky, pinky, inky, clyde];
let powerpellets = [topRight, bottomRight, topLeft, bottomLeft];

let points = 0;

let dots = [];

while (dots.length < 5) {
  let dot = new Dots(
    random(50, screen.width - 50),
    random(50, screen.height - 50),
    7,
    "rgb(255,255,0)",
    false,
  );

  dots.push(dot);
}

function pointsText(){
    ctx.font = "30px Arial";
    ctx.color = "rgb(255,255,0)";
    ctx.fillText(`Points: ${points}`, (150), (30));
}
function hpText(){
    ctx.font = "30px Arial";
    ctx.color = "rgb(255,255,0)";
    ctx.fillText(`HP: ${pacman.hp}`, (320), (30));
}

function gameOverTextWin(){
    ctx.font = "30px Arial";
    ctx.color = "rgb(255,255,0)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`Game Won: ${points}`,(canvas.width / 2), (canvas.height / 2));
}
function gameOverText(){
    ctx.font = "30px Arial";
    ctx.color = "rgb(255,255,0)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`Game Over: ${points}`,(canvas.width / 2), (canvas.height / 2));
}


function hasCollidedtimer(){
    hasCollided = false;
}

function powerpelletUpdate(){
    topLeft.x = 75;
    topLeft.y = 75;
    bottomRight.x = canvas.width - 75,
    bottomRight.y = canvas.height - 75;
    bottomLeft.x = 75;
    bottomLeft.y = canvas.height - 75;
    topRight.x = canvas.width - 75
    topRight.y = 75;
}

function circleIntersect(x1, y1, r1, x2, y2, r2){
    let squareDistance = (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);

    return squareDistance <= ((r1 + r2) * (r1 + r2))
}


function collisionsPowerpellets(){
    let obj1 = pacman;
    let obj2;

    
    for (let i = 0; i < powerpellets.length; i++){
        obj2 = powerpellets[i];
        if (circleIntersect(obj1.x,obj1.y, obj1.size, obj2.x, obj2.y, obj2.size)){
            obj1.isCollindingPowerPellet = true;
            obj2.isCollinding = true;
        }
    }

}

function collisionsDots(){
    let obj1 = pacman;
    let obj3;

    for (let i = 0; i < dots.length; i++){
        obj3 = dots[i];
        if (circleIntersect(obj1.x,obj1.y, obj1.size, obj3.x, obj3.y, obj3.size)){
            points += 1;
            obj3.isCollinding = true;
        }
    }

}

let hasCollided = false;

function collisionsGhosts(){
    let obj1 = pacman;
    let obj2;

    if (hasCollided){
        return;
    }
    for (let i = 0; i < ghostSettings.length; i++){
        obj2 = ghostSettings[i];
        if (circleIntersect(obj1.x, obj1.y, obj1.size, obj2.x, obj2.y, obj2.size)){
            obj1.isCollindingGhost = true;
            obj2.isCollinding = true;
            hasCollided = true;
            break;        
    }
    }

}

function myTimer(){    
    for (let powerpellet of powerpellets){
        if (powerpellet.color === 'rgb(255,255,0)'){
            powerpellet.color = 'rgb(0,0,0)';
        }

        else if(powerpellet.color === 'rgb(0,0,0)'){
            powerpellet.color = 'rgb(255,255,0)';
    }}
}




// keyrir leikinn ----------------------------------------------
function gameOn() {
    ctx.clearRect(0,0, canvas.width, canvas.height); 
    pointsText();
    hpText();
    pacman.drawPacMan();
    pacman.update();
    collisionsPowerpellets();
    collisionsDots();
    collisionsGhosts();
    if (dots.length === 0){
        return gameOverTextWin();
    }
    if (pacman.isCollindingGhost){
        pacman.hp--;
        pacman.isCollindingGhost =  false;
    }
    if (pacman.hp <= 0){
        return gameOverText();
    }


    for (let i = ghostSettings.length -1; i >= 0;i--){
        if (ghostSettings[i].isCollinding){
            
        }
        
        ghostSettings[i].update();
        ghostSettings[i].drawGhosts();
    }
    for (let i = powerpellets.length - 1; i >= 0 ;i--){
        if (powerpellets[i].isCollinding){
            powerpellets.splice(i,1);
        } else{
        powerpellets[i].drawPellet();}
    }
    for (let i = dots.length - 1; i >= 0; i--) {
        if (dots[i].isCollinding) {
            dots.splice(i, 1);
        } else {
            dots[i].drawDot();
        }
    }
    
    window.requestAnimationFrame(gameOn);
}
 

window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        pacman.velX = -5;
        pacman.v1 = -150;
        pacman.v2 = -210;
    }
    else if (event.code === "ArrowRight"){
        pacman.velX = 5;
        pacman.v1 = 30;
        pacman.v2 = 330;
    }
    else if (event.code === "ArrowUp"){
        pacman.velY = -5;
    }
    else if (event.code === "ArrowDown"){
        pacman.velY = 5;
    }
});


window.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft") {
        pacman.velX = 0;
    }
    else if (event.code === "ArrowRight"){
        pacman.velX = 0;
    }
    else if (event.code === "ArrowUp"){
        pacman.velY = 0;
    }
    else if (event.code === "ArrowDown"){
        pacman.velY = 0;
    }
    
});



var initialX, initialY, initialTime;

window.addEventListener('touchstart', function(e) {
   initialX = e.touches[0].clientX;
   initialY = e.touches[0].clientY;
   initialTime = new Date();
});

window.addEventListener('touchend', function(e) {
   var deltaX = e.changedTouches[0].clientX - initialX;
   var deltaY = e.changedTouches[0].clientY - initialY;
   var deltaTime = new Date() - initialTime;

   if (deltaX <= -30 && deltaY <= 100 && deltaTime <= 300) {
        pacman.velX = -5;
        pacman.velY = 0;
        pacman.v1 = -150;
        pacman.v2 = -210;
   }
   else if (deltaX >= 30 && deltaY <= 100 && deltaTime <= 300) {
    pacman.velX = 5;
    pacman.velY = 0;
    pacman.v1 = 30;
    pacman.v2 = 330;
    }
    else if (deltaX <= 100 && deltaY <= 30 && deltaTime <= 300) {
    pacman.velY = -5;
    pacman.velX = 0;
    }
    else if (deltaX <= 100 && deltaY >= -30 && deltaTime <= 300) {
    pacman.velY = 5;
    pacman.velX = 0;
    }

});


setInterval(myTimer, 400);
setInterval(hasCollidedtimer, 1000)

function ghostBlinkStart(){
    setInterval(ghostsBlink, 400)

    function ghostsBlink(){
        
    }
}



function toggleFullScreen(){
    if(!document.fullscreenElement){
        game.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
    console.log(document.fullscreenElement);
}

window.addEventListener("keydown", event => {
    if (event.code === "Enter"){
        toggleFullScreen();
    }
});

fullscreen.addEventListener("click", toggleFullScreen)

function lockToLandscape() {
    if (screen.orientation) {
        screen.orientation.lock("landscape").catch(function(error) {
            console.error("Orientation lock failed:", error);
        });
    }
}

