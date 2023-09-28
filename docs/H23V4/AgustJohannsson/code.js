








const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');




// stærð canvas
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);



let dooooooooooo= 0

// lock skjá
let myScreenOrientation = window.screen.orientation; // "landscape" "portrait"


function lock (orientation) {
    
    let de = document.documentElement;
    if (de.requestFullscreen) { de.requestFullscreen(); }
    else if (de.mozRequestFullScreen) { de.mozRequestFullScreen(); }
    else if (de.webkitRequestFullscreen) { de.webkitRequestFullscreen(); }
    else if (de.msRequestFullscreen) { de.msRequestFullscreen(); }
  
    
    screen.orientation.lock(orientation);
  }

// ori

let or_beta = 0
let or_gamma = 0







  






  ctx.fillText("svipe up to start  skill", 50, 50);
  // ring a ding ding

  function ring_a_ding_ding(ring,a,ding) {
  
    navigator.vibrate(ring,a,ding);



  }

// hloð
let hloð = new Audio("sound.mp3");


//random fall
function randomið(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }



// Power_Pellets

// blika
filla_Pellets = "yellow"
setInterval(display_litur, 1000);
function display_litur() {
    if (filla_Pellets == "yellow"){
        filla_Pellets = "black"
    }
    else{
        filla_Pellets = "yellow"
    }
  }


class Power_Pellets{
    constructor(Pellets_movey, Pellets_movex){
        this.Pellets_movey=Pellets_movey
        this.Pellets_movex=Pellets_movex
        
    }
    draw_Pellets(){
    ctx.beginPath();
    
    ctx.arc(this.Pellets_movey, this.Pellets_movex, 5, 0, 2 * Math.PI);
    ctx.fillStyle = filla_Pellets;

    ctx.fill();}
    //ctx.stroke();
}


// Power_dots

// dots score

let score = 0;









class Power_dots{
    constructor(dots_movey, dots_movex){
        this.dots_movey=dots_movey
        this.dots_movex=dots_movex
        
    }
    draw_dots(){
    ctx.beginPath();
    
    ctx.arc(this.dots_movey, this.dots_movex, 2, 0, 2 * Math.PI);
    ctx.fillStyle = "black";

    ctx.fill();}
    
}
let dots = [];
let tal_dots = 0;
while (tal_dots < 50) {

    let dots_movey = randomið(0+2, width-2)
    let dots_movex = randomið(0+2, height-2)
  let dot_ball = new Power_dots(dots_movey,dots_movex);
  tal_dots = tal_dots + 1;
  dots.push(dot_ball);

}







// pacman
let movey = 100
let movex = 100

let stærð = 10
// wegurin
let stopaðuY = width - stærð
let stopaðuX = height - stærð
// hraði
let hraðipackman = 1;

// paclíf
let líf = 3;

// hraði
let hraði_Ghost = 1
let áty_Ghost = -1
let átx_Ghost = -1

rightPressed = false;
leftPressed = false;
DownPressed = false;
UpPressed = false;

// pacmunur
let moveMunin = Math.PI / 180

let mun1 = 30
let mun2 = 330


class PacMan{
    constructor(movey, movex){
        this.movey=Ghost_movey
        this.movex=Ghost_movex
        
    }
    pac_draw(){
    ctx.beginPath();
    ctx.fillStyle = "yellow"
    ctx.arc(movey, movex, stærð, moveMunin * mun1, moveMunin * mun2,false);
    ctx.strokeStyle = "yellow";
    ctx.lineTo(movey, movex);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillStyle = "black"
    ctx.arc(movey , movex - 5, 2, moveMunin * mun1, moveMunin * mun2,false);
    
    ctx.fill();
    ctx.closePath();

    }
    pack_stjórn(){
          // ef ít ar á taka

          if(rightPressed) {
            movey = movey + hraðipackman
            mun1 = 30
            mun2 = 330
        }
        if(leftPressed) {
            movey = movey - hraðipackman
             mun1 = 200
            mun2 = 130
        }
        if(DownPressed) {
            movex = movex + hraðipackman
        }
        if(UpPressed) {
            movex = movex - hraðipackman
        }
        else{
            console.log(líf)
        }
    
        // wegurin  pacman 
        if(movey > stopaðuY) {
            movey = stopaðuY   
        }
         if(movey <= 0 + stærð) {
            movey = 0 + stærð
        }
         if(movex > stopaðuX) {
            movex = stopaðuX   
        }
         if(movex <= 0 + stærð) {
            movex = 0 + stærð
        }
    
    }
}







// Ghost
Ghost_stærð = 5

let Ghost_movey = randomið(0+Ghost_stærð, width-Ghost_stærð)
let Ghost_movex = randomið(0+Ghost_stærð, height-Ghost_stærð)

randomið(0+Ghost_stærð, width-Ghost_stærð)
randomið(0+Ghost_stærð, height-Ghost_stærð)




// litur
litur = "black";



// er hunter
let er_hunter = false;
let hunt_tal = 0;
//filla_Ghosts = "yellow"

// endurlita
let endurlita = 0;

function Ghosts_litur(x) {
    //console.log(er_hunter)
    x.litur = "black"


    if (hunt_tal == 3){
        er_hunter = false
        hunt_tal = 0
        

       
    }
    
    hunt_tal = hunt_tal + 1
    
    
        
    
    
    
    
  }



class Ghost{
    constructor(Ghost_movey, Ghost_movex, litur,hraði_Ghost ,áty_Ghost, átx_Ghost){
        this.Ghost_movey=Ghost_movey
        this.Ghost_movex=Ghost_movex
        this.litur=litur

        this.hraði_Ghost=hraði_Ghost
        this.áty_Ghost=áty_Ghost
        this.átx_Ghost=átx_Ghost
    }


    Ghost_draw(){
    ctx.beginPath();
    
    ctx.arc(this.Ghost_movey, this.Ghost_movex, 5, 0, 2 * Math.PI);
    ctx.fillStyle = this.litur;

    ctx.fill();
    

    }
    // wegurin  fyrir Ghost
    vegur(){
    if(this.Ghost_movey > width - Ghost_stærð) {
        this.áty_Ghost = this.áty_Ghost *-1
        }
     if(this.Ghost_movey < 0 + Ghost_stærð ) {
        this.áty_Ghost= this.áty_Ghost *-1
        }
     if(this.Ghost_movex > height - Ghost_stærð) {
        this.átx_Ghost = this.átx_Ghost *-1
        }
     if(this.Ghost_movex < 0 + Ghost_stærð ) {
        this.átx_Ghost = this.átx_Ghost *-1
        }
        // Át
        this.Ghost_movey = this.Ghost_movey + (this.áty_Ghost*this.hraði_Ghost);
        this.Ghost_movex = this.Ghost_movex + (this.átx_Ghost*this.hraði_Ghost);
    }
    // Ghost vs Ghost
    collisionDetect() {
        for (const ball of Ghosts) {

            if (this !== ball) {

            const dx =this.Ghost_movex - ball.Ghost_movex    ;
            const dy =this.Ghost_movey - ball.Ghost_movey   ;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 5 + 5) {
                this.áty_Ghost = this.áty_Ghost *-1
                this.átx_Ghost = this.átx_Ghost *-1
          }
        }
    }
      } 
}

// Blinky (red), Pinky (pink), Inky (cyan) og Clyde (orange).

// Ghosts
let Ghosts = [];


const ghostlitir = [];
ghostlitir[0]= "red";
ghostlitir[1]= "pink";
ghostlitir[2]= "cyan";
ghostlitir[3]= "orange";

let tal = 0;
while (tal < 4) {

let rand1=randomið(-1, 1)
let rand2=randomið(-1, 1)

 while (rand1 === 0){
    rand1=1
 }
 while (rand2 === 0){
    rand2=1
 }
 áty_Ghost = áty_Ghost * rand1 
 átx_Ghost = átx_Ghost * rand2


    let Ghost_movey = randomið(0+Ghost_stærð, width-Ghost_stærð)
    let Ghost_movex = randomið(0+Ghost_stærð, height-Ghost_stærð)
  let ball = new Ghost(Ghost_movey,Ghost_movex,ghostlitir[tal],hraði_Ghost ,áty_Ghost, átx_Ghost);
  tal = tal + 1;
  Ghosts.push(ball);

}




// packman
let pacmon = new PacMan(movey,movex);





// Ghost
let testGhost = new Ghost(Ghost_movey,Ghost_movex,"black",hraði_Ghost ,áty_Ghost, átx_Ghost);
let testGhost2 = new Ghost(50,7,"black",hraði_Ghost ,áty_Ghost, átx_Ghost);




// Power_Pellets
let Pellets_stærð = 5

let Pelletss = []

let testBall = new Power_Pellets(5+Pellets_stærð,height-Pellets_stærð-5);
let testBall2 = new Power_Pellets(5+Pellets_stærð,5+Pellets_stærð);
let testBall3 = new Power_Pellets(width-10,height-Pellets_stærð-5);
let testBall4 = new Power_Pellets(width-10,5+Pellets_stærð);

Pelletss.push(testBall);
Pelletss.push(testBall2);
Pelletss.push(testBall3);
Pelletss.push(testBall4);

// Ghost_movey, Ghost_movex, litur,hraði_Ghost ,áty_Ghost, átx_Ghost



// touch
let to1 = 50
let to2 = 50
let tru = false

let slepa1 =50
let slepa2 =50

let startTime





    

    

//move();

function move() {
    
    
    //screen.orientation.lock("landscape-primary"); // “landscape-primary”

    // console.log(port);


    
 
    

    // hreinsar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

 


// hreifa sima
    if (or_beta > 0){
        movey=movey+1
    }
    if (or_beta < 0){
        movey=movey-1
    }
    if (or_gamma < 0){
        movex=movex+1
    }
    if (or_gamma > 0){
        movex=movex-1
    }










    
    // score líf
    ctx.fillText("score "+score, movey-20, movex- 25);
    ctx.fillText("líf "+líf, movey-20, movex- 15);
    
    // dots
    let i = 0;
    for (const x of dots){
        x.draw_dots();

        ++i;

            // árecktstur dots og pacMan 
            let fjar_dotsx = x.dots_movex - movex;
            let fjar_dotsy = x.dots_movey - movey;
            let fjarlægð_dots = Math.sqrt(fjar_dotsx * fjar_dotsx + fjar_dotsy * fjar_dotsy);
            let suman_dots = stærð + 2;
            if (fjarlægð_dots < suman_dots){
                // colistion
                score = score + 1;
                //console.log(x)
                //dots.splice(i, x);
                x.dots_movey=-100
              x.dots_movex=-100
              

            }
            else if(fjarlægð_dots === suman_dots){
                // tutch
                score = score + 1;
                //console.log(x)
                x.dots_movey=-100
              x.dots_movex=-100
             
              
            }
            else if(fjarlægð_dots > suman_dots){
                 //console.log(score)

            
            }
        
        
    }




    // Power_Pellets
    
for (const x of Pelletss){
    x.draw_Pellets();

            // árecktstur Pellets og pacMan 
            let fjar_Pelletsx = x.Pellets_movex - movex;
            let fjar_Pelletsy = x.Pellets_movey - movey;
            let fjarlægð_Pellets = Math.sqrt(fjar_Pelletsx * fjar_Pelletsx + fjar_Pelletsy * fjar_Pelletsy);
            let suman_Pellets = stærð + Ghost_stærð;
            if (fjarlægð_Pellets < suman_Pellets){
                // colistion
                líf = líf + 1;
              x.Pellets_movey=randomið(0+Ghost_stærð, width-Ghost_stærð)
              x.Pellets_movex=randomið(0+Ghost_stærð, height-Ghost_stærð)

               er_hunter = true
               hloð.play();
               
            }
            else if(fjarlægð_Pellets === suman_Pellets){
                // tutch
                líf = líf + 1;
              x.Pellets_movey=randomið(0+Ghost_stærð, width-Ghost_stærð)
              x.Pellets_movex=randomið(0+Ghost_stærð, height-Ghost_stærð)

              er_hunter = true
              hloð.play();

            }
            else if(fjarlægð_Pellets > suman_Pellets){
                 //console.log(líf)
            }

}


pacmon.pack_stjórn();
    // teiknar pacman
      pacmon.pac_draw();

    // Ghost

    for (let x of Ghosts) {
        // firir if else
        er_litur = x.litur

        x.Ghost_draw();
        x.vegur();


              // ghost á ghost
      
      x.collisionDetect()

      
        
        // árecktstur Ghost og pacMan
      let fjarlægðx = x.Ghost_movex - movex;
      let fjarlægðy = x.Ghost_movey - movey;
      let fjarlægð = Math.sqrt(fjarlægðx * fjarlægðx + fjarlægðy * fjarlægðy);
      let suman = stærð + Ghost_stærð;
      

      if(er_hunter == true){
 setTimeout(function(){Ghosts_litur(x)}, 5000)


    }
    
    if(er_hunter == false){
        if (endurlita == 4){endurlita = 0}
        
        x.litur = ghostlitir[endurlita];
        endurlita = endurlita + 1;
        
            }
///////////////////////////////////////////////////////////////////////////////////////////
            



      if (fjarlægð < suman){
        
        if (er_litur == "black"){
            x.Ghost_movex = -100
            x.Ghost_movey = -100
            x.hraði_Ghost = 0
        }
        else{
          // colistion
          líf = líf - 1;
            movey = 100
          movex = 100
          
          
          ring_a_ding_ding(1000,1000,500);
          
        }
      }
      else if(fjarlægð === suman){
        
        if (er_litur == "black"){
            x.Ghost_movex = -100
            x.Ghost_movey = -100
            x.hraði_Ghost = 0
            
        }
        else{
          // tutch
          líf = líf - 1;
            movey = 100
          movex = 100
          ring_a_ding_ding(1000,1000,500);
          
        }
        
      }
      else if(fjarlægð > suman){
           //console.log(líf)
      }
      
      //console.log(x);


    }
        

    

// end program
    if (líf === 0){
        //console.log(líf)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
    }
    if (líf < 0){
        //console.log(líf)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
    }
    if (score === 50){
        //console.log(líf)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
    }

    if (tru == true){
        move_pack_to(to1,to2)
                
          
    }

      
window.requestAnimationFrame(move);


}


//  Event Listeners


// hlustar ef það er ít á taka
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(taki) {
    if(taki.key == "Right" || taki.key == "ArrowRight") {
        rightPressed = true;
        
    }
    else if(taki.key == "Left" || taki.key == "ArrowLeft") {
        leftPressed = true;
    }

    else if(taki.key == "Down" || taki.key == "ArrowDown") {
        DownPressed = true;
    }
    else if(taki.key == "Up" || taki.key == "ArrowUp") {
        UpPressed = true;
    }
}

function keyUpHandler(taki) {
    if(taki.key == "Right" || taki.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(taki.key == "Left" || taki.key == "ArrowLeft") {
        leftPressed = false;
    }

    else if(taki.key == "Down" || taki.key == "ArrowDown") {
        DownPressed = false;
    }
    else if(taki.key == "Up" || taki.key == "ArrowUp") {
        UpPressed = false;
    }
}

// resize
window.addEventListener("resize",resizeið);

function resizeið(){
    // stærð canvas
 width = (canvas.width = window.innerWidth);
 height = (canvas.height = window.innerHeight);
 // wegurin
stopaðuY = width - stærð
stopaðuX = height - stærð

 movey = 100
 movex = 100

 Pelletss = []

 testBall = new Power_Pellets(50+Pellets_stærð,height-Pellets_stærð-50);
 testBall2 = new Power_Pellets(50+Pellets_stærð,50+Pellets_stærð);
 testBall3 = new Power_Pellets(width-50,height-Pellets_stærð-50);
 testBall4 = new Power_Pellets(width-50,50+Pellets_stærð);
 
 Pelletss.push(testBall);
 Pelletss.push(testBall2);
 Pelletss.push(testBall3);
 Pelletss.push(testBall4);



  score = 0;
  líf = 3;


 dots = [];
  tal_dots = 0;
 while (tal_dots < 50) {
 
      dots_movey = randomið(0+2, width-2)
      dots_movex = randomið(0+2, height-2)
    dot_ball = new Power_dots(dots_movey,dots_movex);
   tal_dots = tal_dots + 1;
   dots.push(dot_ball);
 
 }



for ( x of Ghosts) {

       
       x.Ghost_movey = randomið(0+Ghost_stærð, width-Ghost_stærð)
     x.Ghost_movex = randomið(0+Ghost_stærð, height-Ghost_stærð)
 
}



}

// touch
canvas.addEventListener("touchstart", touch_my);
function touch_my(na){
    na.preventDefault();
    startTime = new Date().getTime()
    console.log("touch my",startTime)
    console.log(na.changedTouches[0].clientX)
    console.log(na.changedTouches[0].clientY)

    to1 = Math.round(na.changedTouches[0].clientX)
    to2 = Math.round(na.changedTouches[0].clientY)

    tru = true
     //movey = na.changedTouches[0].clientX
     //movex = na.changedTouches[0].clientY
}

function move_pack_to(to1,to2){
  
    
}


// fullscreen
document.addEventListener("keydown", keyspaceHandler, false);

function keyspaceHandler(taki) {
    if(taki.key == "f" || taki.key == "F") {
        toggleFullScreen();

        
    }}



  function toggleFullScreen() {
    
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      if (dooooooooooo == 0){
        
      move();
    dooooooooooo = 1



    if (window.DeviceOrientationEvent) {
        window.addEventListener(
          "deviceorientation",
          (event) => {
            const rotateDegrees = event.alpha; // alpha: rotation around z-axis
            const leftToRight = event.gamma; // gamma: left to right
            const frontToBack = event.beta; // beta: front back motion
      
            handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
          },
          true,
        );
      }
      
      const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {

         or_beta = frontToBack 
         or_gamma =  leftToRight


      };



    
}
    } else if (document.exitFullscreen) {
      // document.exitFullscreen();
      location.reload();
    }
    myScreenOrientation.lock("landscape-primary");
    lock("landscape-primary");
  }

  canvas.addEventListener("touchend", touch_end);
function touch_end(da){
    da.preventDefault();
    
    console.log(da.changedTouches[0].clientX)
    console.log(da.changedTouches[0].clientY)

    slepa1 = Math.round(da.changedTouches[0].clientX)
    slepa2 = Math.round(da.changedTouches[0].clientY)

    liðinTime = new Date().getTime() - startTime
    let fjarl =   to2 - slepa2
    console.log("touch end",liðinTime, fjarl)
    if (liðinTime < 150 && fjarl > 200 ){
        toggleFullScreen();

    }

    
     //movey = na.changedTouches[0].clientX
     //movex = na.changedTouches[0].clientY
}


