const Constants = {
  CANVAS_ID: "screen",
  ORIENTATION: "landscape-primary",

  BACKGROUND_COLOR: "#FFFFFF",
  TEXT_FONT: "20px serif",
  TEXT_COLOR: "#000000",

  PLAYER_RADIUS: 10,
  PLAYER_COLOR: "#FF0000",
  PLAYER_ACCELERATION: 1000,

  HOLE_RADIUS: 20,
  HOLE_COLOR: "#000000",
  TARGET_COLOR: "#FFD700",

  WIN_SOUND: "data/perfect.mp3",
  ENTER_FULLSCREEN_TEXT: "Smellið til að fara í fullskjá",
  START_GAME_TEXT: "Dragið til að byrja leik!",
  WIN_TEXT: "Leik lokið!",
  WIN_RESTART_TEXT: "Dragið til þess að byrja aftur (refresh)",

  DRAW_DEBUG_INFO: false,
};

const Vector = {
  new: x => y => { return { x: x, y: y, }; },
  copy: v => Vector.new(v.x)(v.y),
  zero: () => Vector.new(0)(0),
  add: a => b => Vector.new(a.x + b.x)(a.y + b.y),
  sub: a => b => Vector.new(a.x - b.x)(a.y - b.y),
  mul: a => b => Vector.new(a.x * b.x)(a.y * b.y),
  div: a => b => Vector.new(a.x / b.x)(a.y / b.y),
  scale: v => s => Vector.new(v.x * s)(v.y * s),
  scaleInverse: v => s => Vector.new(v.x / s)(v.y / s),
  min: a => b => Vector.new(Math.min(a.x, b.x))(Math.min(a.y, b.y)),
  max: a => b => Vector.new(Math.max(a.x, b.x))(Math.max(a.y, b.y)),
  clamp: min => max => v => Vector.min(max)(Vector.max(min)(v)),
  random: min => max => Vector.new(Math.random() * (max.x - min.x) + min.x)(Math.random() * (max.y - min.y) + min.y),
  dotProduct: a => b => a.x * b.x + a.y * b.y,
  magnitude: v => Math.sqrt(Vector.dotProduct(v)(v)),
  distance: a => b => Vector.magnitude(Vector.sub(a)(b)),
  lerp: a => b => t => Vector.add(a)(Vector.scale(Vector.sub(b)(a))(t)),
};

const Level = {
  playerSpawn: Vector.new(20)(140),
  holesPos: [
    Vector.new(110)(70),
    Vector.new(120)(180),
    Vector.new(120)(300),
    Vector.new(220)(230),
    Vector.new(520)(160),
    Vector.new(320)(330),
    Vector.new(310)(150),
    Vector.new(620)(230),
    Vector.new(460)(30),
    Vector.new(700)(200),
  ],
  targetPos: Vector.new(800)(140),
};

const Timing = {
  getTick: () => performance.now(),
};

const Collision = {
  circleToCircle: a => b => {
    const distance = Vector.distance(a.pos)(b.pos);
    const collisionDistance = a.radius + b.radius;
    return distance < collisionDistance;
  },
};

const Input = {
  rotation: {
    pitch: 0,
    roll: 0,
    yaw: 0,
  },

  drag: {
    start: null,
    stop: null,
  },
  onDrag: null,

  init: () => {
    const orientationEventCallback = event => {
      const { rotation } = Input;
      rotation.pitch = event.beta;
      rotation.roll = event.gamma;
      rotation.yaw = event.alpha;
    };

    const dragStartCallback = event => {
      const touch = event.touches[0];
      Input.drag.start = Vector.new(touch.pageX)(touch.pageY);
    };

    const dragStopCallback = event => {
      const touch = event.changedTouches[0];
      Input.drag.stop = Vector.new(touch.pageX)(touch.pageY);
      if (Input.onDrag) Input.onDrag(Input.drag.start)(Input.drag.stop);
      Input.drag.start = null;
      Input.drag.stop = null;
    };

    window.addEventListener("deviceorientation", orientationEventCallback);
    window.addEventListener("touchstart", dragStartCallback);
    window.addEventListener("touchend", dragStopCallback);

  },

  rotationToVector: () => {
    const { pitch, roll } = Input.rotation;
    const rotation = Vector.new(pitch / 90)(-roll / 90);
    const clampedRotation = Vector.clamp(Vector.new(-1)(-1))(Vector.new(1)(1))(rotation);
    return clampedRotation;
  },
};

const Graphics = {
  canvas: null,
  context: null,
  fullscreen: false,

  init: () => {
    Graphics.canvas = document.getElementById(Constants.CANVAS_ID);
    Graphics.context = Graphics.canvas.getContext("2d");

    window.addEventListener("resize", Graphics.resizeCanvas);
    Graphics.canvas.addEventListener("click", Graphics.enterFullscreen);
    Graphics.resizeCanvas();
  },

  resizeCanvas: () => {
    const { innerWidth, innerHeight } = window;
    Graphics.canvas.width = innerWidth;
    Graphics.canvas.height = innerHeight;
  },

  enterFullscreen: () => {
    if (Graphics.fullscreen) return;
    const onFullscreenEnter = () => {
      Graphics.fullscreen = true;
      screen.orientation.lock(Constants.ORIENTATION);
    };

    if (Graphics.canvas.requestFullscreen) {
      Graphics.canvas.requestFullscreen().then(onFullscreenEnter);
    }
  },

  screenSize: () => {
    const { width, height } = Graphics.canvas;
    return Vector.new(width)(height);
  },
};

const Drawing = {
  rect: pos => size => color => {
    const { context } = Graphics;
    context.fillStyle = color;
    context.fillRect(pos.x, pos.y, size.x, size.y);
  },

  circle: pos => radius => color => {
    const { context } = Graphics;
    context.fillStyle = color;
    context.beginPath();
    context.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
    context.fill();
  },

  text: pos => text => color => {
    const { context } = Graphics;
    context.fillStyle = color;
    context.font = Constants.TEXT_FONT;
    context.fillText(text, pos.x, pos.y);
  },

  clear: () => {
    Drawing.rect(Vector.zero())(Graphics.screenSize())(Constants.BACKGROUND_COLOR);
  },

  textCenter: pos => text => color => {
    const { context } = Graphics;
    context.textAlign = "center";
    context.textBaseline = "middle";
    Drawing.text(pos)(text)(color);
  },

  textLeftTop: pos => text => color => {
    const { context } = Graphics;
    context.textAlign = "left";
    context.textBaseline = "top";
    Drawing.text(pos)(text)(color);
  },

  textRightTop: pos => text => color => {
    const { context } = Graphics;
    context.textAlign = "right";
    context.textBaseline = "top";
    Drawing.text(pos)(text)(color);
  },

  line: start => stop => color => width => {
    const { context } = Graphics;
    context.strokeStyle = color;
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(stop.x, stop.y);
    context.stroke();
  },
};

const Player = {
  spawnPos: null,
  pos: null,
  vel: null,
  radius: null,

  init: pos => {
    Player.spawnPos = Vector.copy(pos);
    Player.pos = Vector.copy(pos);
    Player.vel = Vector.zero();
    Player.radius = Constants.PLAYER_RADIUS;
  },

  update: () => {
    Player.updatePosition();
    Player.collideWithBorder();
    Player.collideWithHoles();
  },

  render: () => {
    const { pos, radius } = Player;
    Drawing.circle(pos)(radius)(Constants.PLAYER_COLOR);
  },

  updatePosition: () => {
    const rotation = Input.rotationToVector();
    const tickAcceleration = Game.tickDelta * Constants.PLAYER_ACCELERATION;
    const acceleration = Vector.scale(rotation)(tickAcceleration);
    Player.vel = Vector.add(Player.vel)(acceleration);

    const tickVel = Vector.scale(Player.vel)(Game.tickDelta);
    Player.pos = Vector.add(Player.pos)(tickVel);
  },

  collideWithBorder: () => {
    const { pos, vel, radius } = Player;
    const { x: screenWidth, y: screenHeight} = Graphics.screenSize();

    if (pos.x < radius) {
      pos.x = radius;
      vel.x = 0;
    }

    if (pos.y < radius) {
      pos.y = radius;
      vel.y = 0;
    }

    if (pos.x > screenWidth - radius) {
      pos.x = screenWidth - radius;
      vel.x = 0;
    }

    if (pos.y > screenHeight - radius) {
      pos.y = screenHeight - radius;
      vel.y = 0;
    }
  },

  collideWithHoles: () => {
    const { holes } = Hole;
    const isColliding = Collision.circleToCircle(Player);

    const colidingHoles = holes.filter(isColliding);
    if (colidingHoles.length === 0) return;

    const targetHole = colidingHoles.find(hole => hole.isTarget);
    if (targetHole) {
      Game.onWin();
    }
    else {
      Player.onDeath(); 
    }
  },

  onDeath: () => {
    Player.pos = Vector.copy(Player.spawnPos);
    Player.vel = Vector.zero();
    navigator.vibrate([200, 50, 200]);
  },
};

const Hole = {
  holes: [],

  createHole: isTarget => pos => {
    const hole = {
      pos: pos,
      radius: Constants.HOLE_RADIUS,
      isTarget: isTarget,
    };

    Hole.holes.push(hole);

    return hole;
  },

  render: hole => {
    Drawing.circle(hole.pos)(hole.radius)(hole.isTarget ? Constants.TARGET_COLOR : Constants.HOLE_COLOR);
  },
};

const Debug = {
  draw: () => {
    const { x: screenWidth, y: screenHeight } = Graphics.screenSize();

    const rotation = Input.rotation;
    Drawing.textLeftTop(Vector.new(10)(10))(`Pitch: ${rotation.pitch.toFixed(2)}`)(Constants.TEXT_COLOR);
    Drawing.textLeftTop(Vector.new(10)(30))(`Roll: ${rotation.roll.toFixed(2)}`)(Constants.TEXT_COLOR);
    Drawing.textLeftTop(Vector.new(10)(50))(`Yaw: ${rotation.yaw.toFixed(2)}`)(Constants.TEXT_COLOR);

    const rotationVec = Input.rotationToVector();
    Drawing.textLeftTop(Vector.new(10)(80))(`Rotation: (x: ${rotationVec.x.toFixed(2)}, y: ${rotationVec.y.toFixed(2)})`)(Constants.TEXT_COLOR);

    const { pos, vel } = Player;
    Drawing.textRightTop(Vector.new(screenWidth - 10)(10))(`Pos: (x: ${pos.x.toFixed(2)}, y: ${pos.y.toFixed(2)})`)(Constants.TEXT_COLOR);
    Drawing.textRightTop(Vector.new(screenWidth - 10)(30))(`Vel: (x: ${vel.x.toFixed(2)}, y: ${vel.y.toFixed(2)})`)(Constants.TEXT_COLOR);

    Drawing.line(pos)(Vector.add(pos)(Player.vel))("#0000FF")(4);
    Drawing.line(pos)(Vector.add(pos)(Vector.scale(rotationVec)(Constants.PLAYER_ACCELERATION)))("#00FF00")(4);

    Drawing.textRightTop(Vector.new(screenWidth - 10)(50))(`Delta: ${Game.tickDelta.toFixed(2)}`)(Constants.TEXT_COLOR);
    Drawing.textRightTop(Vector.new(screenWidth - 10)(70))(`Screen: (${screenWidth.toFixed(2)}, ${screenHeight.toFixed(2)})`)(Constants.TEXT_COLOR);
  },
};

const Game = {
  tick: null,
  lastTick: null,
  tickDelta: null,
  gameOver: null,
  gameStarted: null,

  init: () => {
    Input.init();

    Player.init(Level.playerSpawn);
    Level.holesPos.forEach(Hole.createHole(false));
    Hole.createHole(true)(Level.targetPos);

    const startGame = start => stop => {
      if (Vector.distance(start)(stop) < 100) return;
      Game.gameStarted = true;
      Input.onDrag = null;
    };
    Input.onDrag = startGame;

    Game.tick = Timing.getTick();
    Game.lastTick = Game.tick;
    Game.tickDelta = 0;
    Game.gameOver = false;
    Game.gameStarted = false;
  },

  update: () => {
    Game.tick = Timing.getTick();
    Game.tickDelta = (Game.tick - Game.lastTick) / 1000;

    if (!Game.gameOver && Game.gameStarted) {
      Player.update();
    }

    Game.lastTick = Game.tick;
  },

  render: () => {
    Drawing.clear();
    if (!Game.gameStarted) {
      Game.renderStartGame();
    }
    else {
      Hole.holes.forEach(Hole.render);
      Player.render();
      if (Constants.DRAW_DEBUG_INFO) Debug.draw();
      if (Game.gameOver) Game.renderGameOver();
    }
  },

  loop: () => {
    Game.update();
    Game.render();

    requestAnimationFrame(Game.loop);
  },

  onWin: () => {
    Game.gameOver = true;
    const audio = new Audio(Constants.WIN_SOUND);
    audio.play();
    Drawing.textCenter(Vector.scale(Graphics.screenSize())(0.5))(Constants.WIN_TEXT)(Constants.TEXT_COLOR);

    const restartGame = start => stop => {
      if (Vector.distance(start)(stop) < 100) return;
      window.location.reload();
    };

    Input.onDrag = restartGame;
  },

  renderGameOver: () => {
    const screenCenter = Vector.scale(Graphics.screenSize())(0.5);
    const below = Vector.add(Vector.new(0)(50))(screenCenter)
    Drawing.textCenter(screenCenter)(Constants.WIN_TEXT)(Constants.TEXT_COLOR);
    Drawing.textCenter(below)(Constants.WIN_RESTART_TEXT)(Constants.TEXT_COLOR);
  },

  renderStartGame: () => {
    const message = Graphics.fullscreen ? Constants.START_GAME_TEXT : Constants.ENTER_FULLSCREEN_TEXT;
    Drawing.textCenter(Vector.scale(Graphics.screenSize())(0.5))(message)(Constants.TEXT_COLOR);
  },
};

const main = () => {
  Graphics.init();
  Game.init();
  Game.loop();
};

window.onload = main;
