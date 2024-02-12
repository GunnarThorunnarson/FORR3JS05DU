window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1400;
    canvas.height = 720;
    let gameOver = false;
    const fullScreenButton = document.getElementById('fullScreenButton');

    function toggleFullScreen() {
        console.log(document.fullscreenElement);
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                // Lock orientation after entering fullscreen if supported
                if (screen.orientation && screen.orientation.lock) {
                    forceLandscape();
                }
            }).catch(err => {
                console.error('Error entering fullscreen:', err);
            });
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    function forceLandscape() {
        screen.orientation.lock('landscape-primary')
            .then(() => console.log('Orientation locked to landscape'))
            .catch((err) => console.error('Could not lock orientation:', err));
    }

    fullScreenButton.addEventListener('click', toggleFullScreen);

    screen.orientation.addEventListener("change", (event) => {
        const type = event.target.type;
        const angle = event.target.angle;
        console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
    });

    let touchStartX, touchStartY;

    window.addEventListener('touchstart', e => {
        console.log('start');
        console.log(e);
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });

    window.addEventListener('touchmove', e => {
        console.log('moving');
        const touchEndX = e.touches[0].clientX;
        const touchEndY = e.touches[0].clientY;

        const swipeDistanceX = touchEndX - touchStartX;
        const swipeDistanceY = touchEndY - touchStartY;

        console.log(`Swipe Distance X: ${swipeDistanceX}, Y: ${swipeDistanceY}`);

        // You can perform additional actions based on swipe distance if needed

        touchStartX = touchEndX;
        touchStartY = touchEndY;
    });

    window.addEventListener('touchend', e => {
        console.log('end');
    });
});