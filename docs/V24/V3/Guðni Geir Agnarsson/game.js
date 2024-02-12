document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let gameStarted = false;
    let ballPosition = { x: canvas.width - 30, y: canvas.height / 2 };
    const ballRadius = 10;
    const endZoneRadius = 25;
    const endZonePosition = { x: 30, y: canvas.height / 2 };
    let touchStartX = 0;
    let touchEndX = 0;

    const holes = [];
    for (let i = 0; i < 12; i++) {
        holes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: 15
        });
    }

    canvas.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
    }, false);

    canvas.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].clientX;
        if (!gameStarted && Math.abs(touchStartX - touchEndX) > 30) {
            gameStarted = true;
            initializeGame();
        }
    }, false);

    function triggerVibration(pattern = [200, 100, 200]) {
        if ('vibrate' in navigator) {
            navigator.vibrate(pattern);
        }
    }

    function initializeGame() {
        ballPosition = { x: canvas.width - 30, y: canvas.height / 2 };
        gameLoop();
    }

    function gameOver(win = false) {
        triggerVibration(win ? [500] : [200, 100, 200]);
        alert(win ? 'tilhamingju þú vannst!' : 'Game Over! Byrjar nýan leik...');
        gameStarted = false;
        initializeGame();
    }

    function showStartText() {
        ctx.font = '24px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText('Swipe til að byrja leik', canvas.width / 2, canvas.height / 2);
    }

    function drawBall() {
        ctx.beginPath();
        ctx.arc(ballPosition.x, ballPosition.y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    }

    function drawEndZone() {
        ctx.beginPath();
        ctx.arc(endZonePosition.x, endZonePosition.y, endZoneRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'green';
        ctx.stroke();
        ctx.closePath();
    }

    function drawHoles() {
        holes.forEach(hole => {
            ctx.beginPath();
            ctx.arc(hole.x, hole.y, hole.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'black';
            ctx.fill();
            ctx.closePath();
        });
    }

    function checkCollisions() {
        holes.forEach(hole => {
            const dx = hole.x - ballPosition.x;
            const dy = hole.y - ballPosition.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < hole.radius + ballRadius) {
                gameOver(false);
                return;
            }
        });

        const dx = endZonePosition.x - ballPosition.x;
        const dy = endZonePosition.y - ballPosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < endZoneRadius + ballRadius) {
            gameOver(true);
            return;
        }
    }

    function gameLoop() {
        if (!gameStarted) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawEndZone();
        drawHoles();
        checkCollisions();
        requestAnimationFrame(gameLoop);
    }
    showStartText();
    window.addEventListener('devicemotion', function(event) {
        if (!gameStarted) return;
        const acceleration = event.accelerationIncludingGravity;
        let xMove = acceleration.y * 1; 
        let yMove = -acceleration.x * 1;

        ballPosition.x += xMove;
        ballPosition.y += yMove;

        ballPosition.x = Math.max(ballRadius, Math.min(canvas.width - ballRadius, ballPosition.x));
        ballPosition.y = Math.max(ballRadius, Math.min(canvas.height - ballRadius, ballPosition.y));
    });
});
