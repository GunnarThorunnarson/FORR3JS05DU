const para = document.querySelector('p');

const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');

const width = myCanvas.width = window.innerWidth;
const height = myCanvas.height = window.innerHeight;

const FullScreenButton = document.getElementById('Fullscreen');


const audioElement = new Audio("low-impactwav-14905.mp3");



class Shape {
    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}

class playerball extends Shape {
    constructor(x, y, radius, color) {
        super(x, y, 0, 0);
        this.radius = radius;
        this.color = color; // Use the provided color
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    move() {
        // Handle player movement based on velocity
        this.x += this.velX;
        this.y += this.velY;

        // Ensure player stays within the canvas
        if (this.x - this.radius < 0) {
            this.x = this.radius;
        }
        if (this.x + this.radius > width) {
            this.x = width - this.radius;
        }
        if (this.y - this.radius < 0) {
            this.y = this.radius;
        }
        if (this.y + this.radius > height) {
            this.y = height - this.radius;
        }
    }
}

class npcball extends Shape {
    constructor(x, y, radius, color, audioElement) {
        super(x, y, 1, 1);
        this.radius = radius;
        this.color = color; // Use the provided color
        this.myAudioElement = audioElement; // Store the audio element
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    move() {
        // Simulate random movement
        this.x += this.velX;
        this.y += this.velY;

        // Handle collision with game borders
        if (this.x - this.radius < 0 || this.x + this.radius > width) {
            this.velX *= -1;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > height) {
            this.velY *= -1;
        }
    }
    colisionDetect() {
        //when player and npc collide vibrates the phone
        let dx = player.x - this.x;
        let dy = player.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < player.radius + this.radius) {
            window.navigator.vibrate(200);
            this.myAudioElement.play(); // Access the audio element through 'this'
            //console.log("colision");
        }
    }

}

const player = new playerball(100, 100, 20, "blue");
const npc = new npcball(200, 200, 30, "green", audioElement);

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        player.velY = -10;
    } else if (e.key === 'ArrowDown') {
        player.velY = 10;
    } else if (e.key === 'ArrowLeft') {
        player.velX = -10;
    } else if (e.key === 'ArrowRight') {
        player.velX = 10;
    }
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        player.velX = 0;
        player.velY = 0;
    }
});

function ToggleFullScreen() {
    console.log(document.fullscreenElement);
    if (!document.fullscreenElement) {
        myCanvas.requestFullscreen().catch( err => {
           alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`); 
        });
    }else {
        document.exitFullscreen();
    }
}
FullScreenButton.addEventListener('click', ToggleFullScreen);


function forceLandscapeMode() {
    // Check if the screen width is less than the height (indicating portrait mode)
    if (window.innerWidth < window.innerHeight) {
        console.log('Changing orientation to landscape.');
        // Lock the screen orientation to landscape mode
        screen.orientation.lock('landscape-primary')
            .then(() => {
                console.log('Screen orientation is locked to landscape.');
            })
            .catch((error) => {
                console.error('Failed to lock screen orientation:', error);
            });
    }
}

// Call the function to force landscape mode


// i need to make so my playerball can move with MotionEvent/devicemotion event

function handleMotionEvent(event) {
    // Extract the acceleration components from the event
    let accX = event.accelerationIncludingGravity.x;
    let accY = event.accelerationIncludingGravity.y;
    let accZ = event.accelerationIncludingGravity.z;
    // Use the acceleration to manipulate the velocity of the ball   
    player.velX = accX;
    player.velY = accY;
}
 


function loop() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    // Draw and move player and npc
    player.draw();
    npc.draw();
    player.move();
    npc.move();
    npc.colisionDetect();
    forceLandscapeMode();

    window.addEventListener('devicemotion', handleMotionEvent);
    // Other Function calls

    requestAnimationFrame(loop);
}

loop();
