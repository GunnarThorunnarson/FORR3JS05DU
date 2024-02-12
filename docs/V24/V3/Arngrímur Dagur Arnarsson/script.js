document.addEventListener('DOMContentLoaded', () => {
    const maze = document.getElementById('maze');
    const player = document.createElement('div');
    player.classList.add('player');
    maze.appendChild(player);
    let playerX = 0;
    let playerY = 0;
    function movePlayer(x, y) {
        player.style.left = x + 'px';
        player.style.top = y + 'px';
    }
    function requestFullscreen() {
        if (maze.requestFullscreen) {
            maze.requestFullscreen();
        } else if (maze.mozRequestFullScreen) {
            maze.mozRequestFullScreen();
        } else if (maze.webkitRequestFullscreen) {
            maze.webkitRequestFullscreen();
        } else if (maze.msRequestFullscreen) {
            maze.msRequestFullscreen();
        }
    }
    function lockLandscapeOrientation() {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock("landscape");
        }
    }
    lockLandscapeOrientation();
    function startGame() {
        maze.removeEventListener('touchstart', startGame);
    }
    maze.addEventListener('touchstart', startGame);
    function handleDeviceMotion(event) {
        const { accelerationIncludingGravity } = event;
        const maxX = maze.offsetWidth - player.offsetWidth;
        const maxY = maze.offsetHeight - player.offsetHeight;

        const newX = playerX + accelerationIncludingGravity.x;
        const newY = playerY + accelerationIncludingGravity.y;

        if (newX >= 0 && newX <= maxX) {
            playerX = newX;
        }
        if (newY >= 0 && newY <= maxY) {
            playerY = newY;
        }

        movePlayer(playerX, playerY);
    }
    window.addEventListener('devicemotion', handleDeviceMotion);
    function handleWallCollision() {
        const mazeRect = maze.getBoundingClientRect();
        const playerRect = player.getBoundingClientRect();

        if (playerRect.left < mazeRect.left) {
            playerX = 0;
        }
        if (playerRect.right > mazeRect.right) {
            playerX = maze.offsetWidth - player.offsetWidth;
        }
        if (playerRect.top < mazeRect.top) {
            playerY = 0;
        }
        if (playerRect.bottom > mazeRect.bottom) {
            playerY = maze.offsetHeight - player.offsetHeight;
        }

        movePlayer(playerX, playerY);
    }
    function handleHoleCollision() {
        const holes = document.querySelectorAll('.hole');
        holes.forEach(hole => {
            const holeRect = hole.getBoundingClientRect();
            const playerRect = player.getBoundingClientRect();

            if (playerRect.left < holeRect.right &&
                playerRect.right > holeRect.left &&
                playerRect.top < holeRect.bottom &&
                playerRect.bottom > holeRect.top) {
                playerX = 0;
                playerY = 0;
                movePlayer(playerX, playerY);
                if (navigator.vibrate) {
                    navigator.vibrate(200);
                }
            }
        });
    }
    handleWallCollision();
    handleHoleCollision();
});