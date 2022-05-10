<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Verkefni 3.1</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <style type="text/css">
        /*  rammi utan um canvas */
        canvas { border: 1px solid red; }
    </style>
</head>
<body>
    <!-- breyttu breidd og hæð -->
    <canvas id="canvas" width="400" height="400"></canvas> 
    
    <script>
      
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;  // game loop

// object
var ball = {
  x: 100,
  y: 100,
  vx: 5,      // velocity x
  vy: 2,      // velocity y
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

// Game loop 
function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(draw);  // endurkvæmt (recursive) kall á  draw fall.
}

/**
 * hlustar eftir atburð (event) frá notanda.
 * parameter nr. 1 er atburður sem hlustað er eftir, mouseover 
 * parameter nr. 2 er nafnlaust fall sem er keyrt við atburð. 
 * e er vísun í Event object (nánar um það síðar í áfanganum)
 */
canvas.addEventListener('mouseover', function(e) {
  // byjum gameloop
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function(e) {
  // stöðvuð gameloop
  window.cancelAnimationFrame(raf);
});

// ball.draw();  // upphafskeyrslan (oftast kallað init() )

    </script> 
</body>
</html>
