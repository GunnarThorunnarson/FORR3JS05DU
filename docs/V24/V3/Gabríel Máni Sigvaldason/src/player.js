//Player.js is supposed to handle things reletive to player
import {canvas, ctx, canvasWidth, canvasHeight, displayText, doVibrate, doSound } from "./connect.js";
export let gameOver

export const player = {
    x: 30,
    y: canvas.height - 70,
    radius: 14,
    draw: function () {
        const gradient = ctx.createLinearGradient(20, 0, 220, 0);
        gradient.addColorStop(0.3, "darkred");
        gradient.addColorStop(0.2, "purple");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x + 15, this.y + 15,this.radius, 0, 4 * Math.PI);
        ctx.fillStyle = gradient;
        ctx.fill();
    },
};

addEventListener("keydown", (event) => handleMovement(event.key));

//Skrautlegt
//function handleMotionEvent(event) {
    //const x = event.accelerationIncludingGravity.x;
    //const y = event.accelerationIncludingGravity.y;

    //console.log(x);
    //console.log(y);

    //player.x += x;
   // player.y += y;
  //}
  
  //window.addEventListener("devicemotion", handleMotionEvent);
  

function handleMovement(event) {
    isOutOfBound(player, canvas);
    checkIfPlayerWon(player);
    switch (event) {
        case "w":
            player.y -= 5;
            break;
        case "s":
            player.y += 5;
            break;
        case "a":
            player.x -= 5;
            break;
        case "d":
            player.x += 5;
            break;
    }

    //Opt draw
}

function calulateCollison(element,player) {
    let[a,b] = [(element.x - player.x),(element.y - player.y)]
    let rad = element.radius + player.radius;
    return (rad * rad >= (a * a) + (b * b))
}

export function checkForCollision(arr, player) {
    arr.forEach(element => {
        if (calulateCollison(element, player)) {
            player.x = 30
            player.y = canvas.height - 60
        }
    });
}

function isOutOfBound(player) {
    //Right
    if (player.x + 40 > canvasWidth) {
        player.x = canvasWidth - 40;
    }
    //Left
    if (player.x < 10) {
        player.x = 10
    }
    //Down
    if (player.y + 50 > canvasHeight) {
        player.y = canvasHeight - 50;
    }
    //Up
    if (player.y < 15) {
        player.y = 15;
    }       
}

function playerWon() {
    const GameEnded = "Leik lokid!";
    displayText(GameEnded);
    doVibrate();
    doSound();
}

function checkIfPlayerWon(player) {
    const ele = {
        x: innerWidth - 45,
        y: 45,
        radius: 30,
    }

    if (calulateCollison(ele, player)) {
        playerWon();
        gameOver = true
    }

}

