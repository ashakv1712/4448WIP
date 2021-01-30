var ground;
var rock1, rock2, rock3, rock4, rock5;
var pogo;
var score = 0;
var gameState = "play";
var gameover, goimg;
var win, winimg;
var score = 1000;

function preload() {
  bg = loadImage("images/bg2.jpg");
  pogoimg = loadImage("images/player.png");
  levelimg = loadImage("images/wood2.png");
  goimg = loadImage("images/go.png");
  winimg = loadImage("images/winner.png");
}

function setup() {
  createCanvas(600, 600);
  ground = createSprite(20, 300, 30, 10);
  pogo = createSprite(20, 280, 10, 10);
  pogo.addImage("pogo", pogoimg);
  pogo.scale = 0.08;
  pogo.velocityY = 3;

  level1 = createSprite(100, 300, 25, 10);
  level1.velocityY = -3;
  level1.addImage("level", levelimg);
  level1.scale = 0.2;

  level2 = createSprite(200, 300, 25, 10);
  level2.addImage("level", levelimg);
  level2.scale = 0.2;

  level3 = createSprite(300, 300, 25, 10);
  level3.velocityY = -4;
  level3.addImage("level", levelimg);
  level3.scale = 0.2;

  level4 = createSprite(400, 300, 25, 10);
  level4.addImage("level", levelimg);
  level4.scale = 0.2;

  level5 = createSprite(500, 300, 25, 10);
  level5.velocityY = -5;
  level5.addImage("level", levelimg);
  level5.scale = 0.2;

  level6 = createSprite(580, 100, 25, 10);
  gameOver = createSprite(280, 250, 1, 1);
  gameOver.addImage("gameOver", goimg);
  gameOver.scale = 0.2;
  gameOver.visible = false;

  win = createSprite(280, 250, 1, 1);
  win.addImage(winimg);
  win.scale = 0.5;
  win.visible = false;
}
function draw() {
  background(bg);

  edges = createEdgeSprites();

  level1.bounceOff(edges);
  level2.bounceOff(edges);
  level3.bounceOff(edges);
  level4.bounceOff(edges);
  level5.bounceOff(edges);

  pogo.bounceOff(ground);
  pogo.velocityY = pogo.velocityY + 0.5;

  if (keyDown("space")) {
    pogo.y = pogo.y - 5;
  }

  if (keyDown(LEFT_ARROW)) {
    pogo.velocityX = -2;
  }

  if (keyDown(RIGHT_ARROW)) {
    pogo.velocityX = 2;
  }

  // camera.position.y = pogo.y + 100;

  pogo.bounceOff(level1);
  pogo.bounceOff(level2);
  pogo.bounceOff(level3);
  pogo.bounceOff(level4);
  pogo.bounceOff(level5);

  if (frameCount % 1 === 0) {
    score = score - 1;
  }
  text("Score: " + score, 50, 10);
  if (pogo.collide(level6)) {
    pogo.velocityX = 0;
    pogo.velocityY = 0;
    level1.velocityY = 0;
    level3.velocityY = 0;
    level5.velocityY = 0;
    gameState = "win";
    win.visible = true;
  }

  if (pogo.y > 600) {
    gameState = "end";
    pogo.visible = false;
    pogo.x = 20;
    pogo.y = 280;
    pogo.velocityY = 0;
    pogo.velocityX = 0;

    level1.visible = false;
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
    level5.visible = false;

    gameOver.visible = true;
  }

  if (keyDown("r")) {
    gameState = "play";
    pogo.x = 20;
    pogo.y = 280;
    pogo.velocityY = -3;
    pogo.velocityX = 0;
  }

  drawSprites();
}
