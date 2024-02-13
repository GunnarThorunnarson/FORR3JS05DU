//Connect.js is like main.js but 2 file for reading abilty.
//Here are func reletive to the game and some grouped togeter.
//Tested on iphone 14 pro max.


export const body = document.querySelector("body");
export const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
export const canvasWidth = canvas.width;
export const canvasHeight = canvas.height;

export function ClearCanvas() {
    ctx.clearRect(0,0,innerWidth,innerHeight);
}

function goIntoFullscreen() {
    document.documentElement.requestFullscreen();
}

//If not supported or desktop will console.log error
function goIntoLandscape() {
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock("landscape");
    }
}


export function DisplayRules() {
    //goIntoFullscreen();
    //goIntoLandscape();
}


export function platform(where = "Start") {
    if (where != "Start") {
        createPlatform(innerWidth - 55,45)
    } else {
        createPlatform(45,innerHeight - 53)
    }
}

function createPlatform(a,b) {
    ctx.beginPath();
    ctx.arc(a,b, 30, 0, 4 * Math.PI);
    ctx.fillStyle = "gray";
    ctx.fill();
}

export function displayText(words) {
    ClearCanvas()
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(words,innerHeight / 2 + 125, innerHeight - 100);
}

//doSound/playSong takes nothing but plays winning song
export function doSound() {
    const audioSrc = "gamewon.wav" 
    let audio = new Audio(audioSrc);
    audio.play();
}

export const doVibrate = () => { navigator.vibrate(1); };
