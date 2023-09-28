function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}
// Resize-ar canvasið og uppfærir leik elements þegar stærð window er breytt
window.addEventListener('resize', (event) => {
    resizeCanvas();
});


window.addEventListener("load", (event) => {

const canvas = document.getElementById('Pac-Man-Canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Lætur síðuna fara fullscreen og Þegar Þú clickar á Fullscreen kemur Músik
const fullScreenButton = document.getElementById("fullScreenButton");
function toggleFullScreen(){
    console.log(document.fullscreenElement)
    if (!document.fullscreenElement)
        canvas.requestFullscreen().catch(err => {
            alert(`Error, can't enable full-screen mode: ${err.message}`);
        });
    else {
        document.exitFullscreen();
    }
    // Býr til Audio source
    const backgroundMusic = new Audio();

    backgroundMusic.src = 'PacManMusic.mp3'; 
    backgroundMusic.loop = true;

    // Spilar background music
    backgroundMusic.addEventListener('canplaythrough', () => {
        backgroundMusic.play();
    });
    backgroundMusic.volume = 0.3;
}
fullScreenButton.addEventListener("click", toggleFullScreen)

// læsir átt á símanum svo það verði lárétt
function lockOrientation() {
    if (screen.orientation.lock) {
        screen.orientation.lock('landscape');
    }
}

// kallar á lockOrientation function þegar window hleður
window.addEventListener('load', lockOrientation);

class PacMan {
    constructor(x, y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = Math.PI /180;
        this.speed = 5;
        this.direction = 0; // 0: hægri, 1: niður, 2: vinstri, 3: upp
    }

    move() {
        switch (this.direction) {
            case 0:
                this.x += this.speed;
                break;
            case 1:
                this.y += this.speed;
                break;
            case 2:
                this.x -= this.speed;
                break;
            case 3:
                this.y -= this.speed;
                break;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0.2 * Math.PI + this.direction * 0.5 * Math.PI, 1.8 * Math.PI + this.direction * 0.5 * Math.PI);
        ctx.lineTo(this.x, this.y);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.closePath();

        // Draw pac man augu
        ctx.beginPath();
        ctx.arc(this.x - 1, this.y - 13, 7, 0, 2 * Math.PI );
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
    }
}



let hasPowerPelletEffect = false;// Til að fylgjast með ef Pac-Man hefur enn þá Powerpellet
let powerPelletEffectDuration = 5000; // 5 Sekúndur í millisekúndur
class Ghost {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = 30;
        this.speed = 2;
        this.direction = Math.random() * 2 * Math.PI;
        this.changeDirectionInterval = 3000; // Skiptu um stefnu á 3 sekúndna fresti
        this.lastDirectionChangeTime = Date.now();
        this.isVulnerable = false; 
        this.shouldDelete = false; 
    }

    handleCollisionWithGhosts(ghosts) {
        for (const otherGhost of ghosts) {
            if (otherGhost !== this) {
                const dx = otherGhost.x - this.x;
                const dy = otherGhost.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.radius + otherGhost.radius) {
                    const angle = Math.atan2(dy, dx);
                    this.direction = 2 * angle - this.direction;
                    this.x -= Math.cos(angle) * this.speed;
                    this.y -= Math.sin(angle) * this.speed;
                }
            }
        }
    }

    move() {
        this.handleCollisionWithGhosts(ghosts);
        this.updateDirection();
        this.x += this.speed * Math.cos(this.direction);
        this.y += this.speed * Math.sin(this.direction);
    }

    draw(ctx) {
        if (!this.isVulnerable || (this.isVulnerable && Date.now() % 1000 < 500)) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }

    updateDirection() {
        const currentTime = Date.now();
        if (currentTime - this.lastDirectionChangeTime >= this.changeDirectionInterval) {
            this.direction = Math.random() * 2 * Math.PI; // random ný stefna
            this.lastDirectionChangeTime = currentTime;
        }
    }


    setVulnerable() {
        this.isVulnerable = true;
        setTimeout(() => {
            this.isVulnerable = false;
        }, powerPelletEffectDuration);
    }

    // breytir update til að sjá um eyðingu
    update() {
        if (this.shouldDelete) {
            // eyðir draug úr draug array
            const index = ghosts.indexOf(this);
            if (index !== -1) {
                ghosts.splice(index, 1);
            }
        }
    }
}

class Pellet {
    constructor(x, y, isCornerPellet = false) {
        this.x = x;
        this.y = y;
        this.radius = isCornerPellet ? 10 : 5;
        this.isBlinking = isCornerPellet;
        this.isVisible = true; // Tjékkar ef það er sýnilegt 
        this.blinkInterval = 500; // Bil til að blikka í millisekúndum
        this.blinkTimer = null; 
        if (this.isBlinking) {
            // Byrjar blikk timan fyrir horn pellets
            this.startBlinking();
        }
    }

    // Stilla til að skipta um sýnilegan Pellets
    toggleVisibility() {
        this.isVisible = !this.isVisible;
    }

    // Byjar blikk timan
    startBlinking() {
        this.blinkTimer = setInterval(() => {
            this.toggleVisibility();
        }, this.blinkInterval);
    }

    // Stoppar blikk timan
    stopBlinking() {
        clearInterval(this.blinkTimer);
        this.isVisible = true;
    }

    draw(ctx) {
        if (this.isVisible) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'yellow';
            ctx.fill();
            ctx.closePath();
        }
    }
}

const pacMan = new PacMan(canvas.width / 2, canvas.height / 2, 30);
const ghosts = [];
// bý til fixed Pellets í fjórum hornum
const pellets = [
    new Pellet(20, 20, true), // Stærri hornar pellet
    new Pellet(canvas.width - 20, 20, true), // Stærri hornar pellet
    new Pellet(20, canvas.height - 20, true), // Stærri hornar pellet
    new Pellet(canvas.width - 20, canvas.height - 20, true), // Stærri hornar pellet 
];

// býr til af random gula Pellets
function createPellets() {
    for (let i = 0; i < 46; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        pellets.push(new Pellet(x, y));
    }
}


// Býr til drauga
for (let i = 0; i < 4; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const color = ['red', 'cyan', 'pink', "orange"][i];
    ghosts.push(new Ghost(x, y, color));
}



createPellets();

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            pacMan.direction = 0; //Pac man fer hægri
            break;
        case 'ArrowDown':
            pacMan.direction = 1; //Pac man fer niður
            break;
        case 'ArrowLeft':
            pacMan.direction = 2; //Pac man fer vinstri
            break;
        case 'ArrowUp':
            pacMan.direction = 3; //Pac man fer upp
            break;
    }
});

function gameOverHandler() {
    for (const pellet of pellets) {
        if (pellet.isBlinking) {
            pellet.stopBlinking();
        }
    }
}


function displayScore(ctx) {
    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.fillText(`Stig: ${score}`, 20, 30);
}

function displayLives(ctx) {
    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.fillText(`Lives: ${remainingLives}`, canvas.width - 100, 30);
}

let gameOver = false;
let remainingPellets = pellets.length;
let remainingLives = 3; // stilla hámarksfjölda líf
let score = 0; // bætir við stigbreytu
function update() {
    pacMan.move();

    if (gameOver) {
        gameOverHandler();
        return; // Ekki uppfæra leikinn ef hann er búinn
    }

    // Hreyfa Drauga
    ghosts.forEach((ghost,ghostIndex) => {
        ghost.move();
        const dx = pacMan.x - ghost.x;
        const dy = pacMan.y - ghost.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < pacMan.radius + ghost.radius) {
            if (hasPowerPelletEffect && ghost.isVulnerable) {
                // Fjarlægðu étna drauginn úr array
                ghosts.splice(ghostIndex, 1);
                // Resettar stöðu draugsins á random stað
                ghost.x = Math.random() * canvas.width;
                ghost.y = Math.random() * canvas.height;
                
                // Bættu við stuttu ósigrandi tímabili fyrir Pac-Man eftir að hafa borðað draug
                setTimeout(() => {
                    ghost.isVulnerable = false;
                }, 1000); // Stilla lengdina eftir þörfum í 1 sek

            } else if (!hasPowerPelletEffect && !ghost.shouldDelete) {
                remainingLives--; // Draga úr lífi hjá Pac-Man
                if (remainingLives <= 0) {
                    gameOver = true;
                    console.log('Game over! You ran out of lives.');
                } else {
                    // Lætur pac man byrja aftur í miðjunni
                    pacMan.x = canvas.width / 2;
                    pacMan.y = canvas.height / 2;
                    if (navigator.vibrate) {// Kemur stutt vibration
                        navigator.vibrate(200);// Vibrate í 2 sek
                        console.log("Þetta vibratar")
                    }
                }
            }
        }
    });

    // Athuga collision við pellets
    pellets.forEach((pellet, index) => {
        const dx = pacMan.x - pellet.x;
        const dy = pacMan.y - pellet.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
    
        if (distance < pacMan.radius + pellet.radius) {
            pellets.splice(index, 1);
    
            if (pellet.radius === 10) {
                hasPowerPelletEffect = true;
                ghosts.forEach((ghost) => {
                    ghost.setVulnerable();
                });
                setTimeout(() => {
                    hasPowerPelletEffect = false;
                }, powerPelletEffectDuration);
            }
            // Ef Pac-Man safnar Pellete skaltu hækka stigið
            if (pellet.radius === 10) {
                score += 1; 
            } else {
                score += 1; 
            }
    
            remainingPellets--; 
        }
    });

    // Athuga hvort Pac-Man hafi safnað öllum köglum
    if (remainingPellets === 0) {
        gameOver = true;
        console.log('Þú Vannst!');
        ctx.fillStyle = 'red';
        ctx.font = '36px Arial';
        ctx.fillText('Þú Vannst!', canvas.width / 2 - 100, canvas.height / 2);
        return;
    }

    // Athuga collision við veggi
    pacMan.x = Math.max(pacMan.x, pacMan.radius);
    pacMan.x = Math.min(pacMan.x, canvas.width - pacMan.radius);
    pacMan.y = Math.max(pacMan.y, pacMan.radius);
    pacMan.y = Math.min(pacMan.y, canvas.height - pacMan.radius);

    // Athuga collision við drauga
    ghosts.forEach((ghost) => {
        const dx = pacMan.x - ghost.x;
        const dy = pacMan.y - ghost.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < pacMan.radius + ghost.radius) {
            gameOver = true;
        }
        if(ghost) {
            ghost.x = Math.max(ghost.x, ghost.radius);
            ghost.x = Math.min(ghost.x, canvas.width - ghost.radius);
            ghost.y = Math.max(ghost.y, ghost.radius);
            ghost.y = Math.min(ghost.y, canvas.height - ghost.radius);

        }
        
        
    });
}

window.addEventListener('deviceorientation', handleDeviceMotion);

function handleDeviceMotion(event) {
    const gamma = event.gamma; 

    if (gamma > 15) {
        pacMan.direction = 0; // Hægri
    } else if (gamma < -15) {
        pacMan.direction = 2; // Vinstri
    } else if (gamma > -15 && gamma < 15) {
        pacMan.direction = 1; // Niður
    }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Pellets
    pellets.forEach((pellet) => {
        pellet.draw(ctx);
    });

    // Sýna stig
    displayScore(ctx);

    // Sýna líf
    displayLives(ctx); 

    // Draw Drauga
    ghosts.forEach((ghost) => {
        if (!ghost.shouldDelete) {
            ghost.draw(ctx);
            ghost.move();
        }
    });

    // Draw Pac-Man
    pacMan.draw(ctx);

    if (gameOver) {
        // Birtir leikskilaboð 
        ctx.fillStyle = 'Yellow';
        ctx.font = '36px Arial';
        ctx.fillText('Game Over!', canvas.width / 2 - 100, canvas.height / 2);
    }
}



function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
});