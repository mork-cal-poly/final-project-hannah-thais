let scene = 1;
let buttonX, buttonY, buttonWidth, buttonHeight;
let trashBagX = 355;
let trashBagY = 120;
let fishX = 50;
let fishY = 200;
let fishClicked = false;
let frogX = 200;
let frogY = 300;
let frogSize = 30;
let clickedLilyIndex = -1; 
let rotationAngle = 0; 
const rotationSpeed = 0.05; 
let rotateLily = []; 
let xLily = [163, 22, 347, 55, 289, 97, 204, 381, 68, 134, 317, 291, 90, 225, 11];
let yLily = [49, 306, 245, 88, 172, 384, 203, 57, 298, 119, 375, 30, 196, 300, 363];
let rLily = [4.982, 1.235, 2.717, 5.634, 0.874, 3.890, 2.109, 6.006, 4.439];
let sLily = [0.6, 1.2, 0.8, 1.0, 1.3, 0.7, 1.0, 1.1, 0.6];

// Setup function
function setup() {
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
  buttonWidth = 100;
  buttonHeight = 80;
  buttonX = width / 2 - buttonWidth / 2;
  buttonY = height / 2 - buttonHeight / 2;

  // rotateLily array
  for (let i = 0; i < xLily.length; i++) {
    rotateLily.push(false);
  }
}

// Main draw function
function draw() {
  background(220);
  if (scene === 1) {
    drawScene1();
  } else if (scene === 2) {
    drawScene2();
  } else if (scene === 3) {
    drawScene3();
  }
}

// Draw functions for different scenes
function drawScene1() {
  drawBackground();
  drawButton(buttonX, buttonY, buttonWidth, buttonHeight);
}

function drawScene2() {
  drawDirtyPond();
  drawRocks();
  drawExtraRock();
  drawDirtyLilies();
  drawTrashBag();
  if (fishClicked) {
    drawFish();
  }
}

function drawScene3() {
  drawCleanPond();
  drawRocks();
  drawCleanLilies();
  drawFish();
  drawFrog();
}

function drawBackground() {
  background(200, 220, 180);
}

function drawButton(x, y, w, h) {
  fill(0, 200, 0);
  rect(x, y, w, h);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text("Click Me!", x + w / 2, y + h / 2);
}

function drawTrashBag() {
  fill(255);
  ellipse(335, 120, 10, 50);
  ellipse(375, 120, 10, 50);
  square(330, 120, 50);
  fill(255, 0, 0);
  textSize(8);
  textAlign(CENTER, CENTER);
  text("THANK YOU", 355, 150);
}

function drawFish() {
  fill(255, 0, 0);
  ellipse(fishX, fishY, 40, 20);
  triangle(fishX - 20, fishY, fishX - 40, fishY - 10, fishX - 40, fishY + 10);
  fill(255);
  ellipse(fishX + 10, fishY - 5, 5, 5);
}

function drawDirtyPond() {
  background(205, 210, 200);
}

function drawRocks() {
  fill(105, 94, 83);
  stroke(105, 94, 83);
  quad(280, 340, 310, 295, 390, 280, 400, 360);
  quad(160, 380, 130, 330, 170, 340, 190, 360);
  fill(89, 86, 72);
  stroke(89, 86, 72);
  quad(200, 140, 220, 85, 272, 90, 272, 140);
  fill(255);
  textSize(10);
  text("Click Me", 345, 340);
}

function drawExtraRock() {
  fill(105, 94, 83);
  stroke(105, 94, 83);
  quad(10, 200, 60, 230, 90, 240, 40, 260);
}

function drawDirtyLilies() {
  for (let i = 0; i < xLily.length; i++) {
    fill(133, 123, 32);
    stroke(84, 78, 25);
    push();
    translate(xLily[i], yLily[i]);
    if (rotateLily[i]) {
      rotate(PI / 6);
    }
    arc(0, 0, 50, 50, -PI / 6, -PI / 2);
    pop();
    fill(255);
    textSize(9);
    text("Click Me", xLily[i], yLily[i] + 10);
  }
}

function drawCleanPond() {
  background(180, 245, 255);
}

function drawFlower(x, y) {
  fill(255, 0, 255);
  ellipse(x, y, 20, 20);
  ellipse(x - 10, y - 10, 20, 20);
  ellipse(x + 10, y - 10, 20, 20);
  ellipse(x - 10, y + 10, 20, 20);
  ellipse(x + 10, y + 10, 20, 20);
  fill(255, 255, 0);
  ellipse(x, y, 10, 10);
}

function drawCleanLilies() {
  for (let i = 0; i < xLily.length; i++) {
    fill(100, 190, 150);
    stroke(90, 150, 100);
    push();
    translate(xLily[i], yLily[i]);
    if (i === clickedLilyIndex) {
      rotate(rotationAngle);
    } else {
      rotate(rLily[i]);
    }
    scale(sLily[i]);
    arc(0, 0, 50, 50, -PI / 6, -PI / 2);
    pop();
    fill(0);
    textSize(8);
    text("Click Me", xLily[i], yLily[i] + 10);

    // Draw flower on top of clean lily if it's clicked
    if (i === clickedLilyIndex) {
      drawFlower(xLily[i], yLily[i]);
    }
  }
}

function drawFrog() {
  fill(27, 180, 20);
  noStroke();

  // Body
  ellipse(frogX, frogY, 50, 60);

  // Legs
  fill(27, 180, 20);
  ellipse(frogX - 20, frogY + 20, 10, 20);
  ellipse(frogX + 20, frogY + 20, 10, 20);
  fill(27, 180, 20);
  ellipse(frogX - 22, frogY + 30, 10, 5);
  ellipse(frogX + 22, frogY + 30, 10, 5);
  ellipse(frogX - 20, frogY + 10, 15, 15);
  ellipse(frogX + 20, frogY + 10, 15, 15);

  // Belly
  fill(90, 217, 89);
  ellipse(frogX, frogY, 40, 50);

  // Eyes
  fill(27, 180, 20);
  ellipse(frogX - 12, frogY - 30, 20, 20);
  ellipse(frogX + 12, frogY - 30, 20, 20);
  fill(255, 255, 255);
  ellipse(frogX - 12, frogY - 30, 12, 12);
  ellipse(frogX + 12, frogY - 30, 12, 12);
  fill(0); // Black color for pupils
  ellipse(frogX - 12, frogY - 30, 8, 8);
  ellipse(frogX + 12, frogY - 30, 8, 8);

  // Nose
  fill(0, 0, 0);
  ellipse(frogX - 3, frogY - 22, 2, 2);
  ellipse(frogX + 3, frogY - 22, 2, 2);

  // "Click Me" text
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(10);
  text("Click Me", frogX, frogY + 10);
}

function handleScene1MouseClick() {
  if (
    mouseX >= buttonX &&
    mouseX <= buttonX + buttonWidth &&
    mouseY >= buttonY &&
    mouseY <= buttonY + buttonHeight
  ) {
    scene = 2;
  }
}

function handleScene2MouseClick() {
  if (
    mouseX >= 280 &&
    mouseX <= 400 &&
    mouseY >= 295 &&
    mouseY <= 360 &&
    !fishClicked
  ) {
    fishClicked = true;
  } else if (
    mouseX >= trashBagX &&
    mouseX <= trashBagX + 50 &&
    mouseY >= trashBagY &&
    mouseY <= trashBagY + 50
  ) {
    scene = 3;
  } else {
    for (let i = 0; i < xLily.length; i++) {
      if (dist(mouseX, mouseY, xLily[i], yLily[i]) < 25) {
        rotateLily[i] = !rotateLily[i];
      }
    }
  }
}

function handleScene3MouseClick() {
  if (
    mouseX >= 280 &&
    mouseX <= 400 &&
    mouseY >= 295 &&
    mouseY <= 360
  ) {
    fishX += 30;
    if (fishX > width + 20) {
      fishX = -20;
    }
  }
  for (let i = 0; i < xLily.length; i++) {
    if (dist(mouseX, mouseY, xLily[i], yLily[i]) < 25) {
      clickedLilyIndex = i;
      break;
    }
  }
  // Check if the mouse is clicked on the frog
  if (dist(mouseX, mouseY, frogX, frogY) < frogSize / 2) {
    // when the frog is clicked, making it jump
    // Move the frog to a random position
    frogX = random(width);
    frogY = random(height);
  }
}

function mouseClicked() {
  if (scene === 1) {
    handleScene1MouseClick();
  } else if (scene === 2) {
    handleScene2MouseClick();
  } else if (scene === 3) {
    handleScene3MouseClick();
  }
}

function mouseDragged() {
  if (scene === 2 && fishClicked) {
    fishX = mouseX;
    fishY = mouseY;
  }
}
