var bg;

function preload() {
  bg = loadImage('hearts.png');
}

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bg);

  var centerX = width / 2;
  var centerY = height /2;

  rectMode(CENTER);
  fill(255, 159, 167);
  rect(centerX, centerY -15, 160, 65, 10);

  rect(centerX, centerY +80, 160, 65, 10);
}
