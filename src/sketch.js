let scene = 1;
let buttonX, buttonY, buttonWidth, buttonHeight;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
    buttonWidth = 100;
  buttonHeight = 80;
  buttonX = width / 2 - buttonWidth / 2;
  buttonY = height / 2 - buttonHeight / 2;
}

function draw() {
  background(220);
  if (scene === 1) {
    // Scene 1: Background and button
    drawBackground();
    drawButton(buttonX, buttonY, buttonWidth, buttonHeight); 
  } else if (scene === 2) {
    // Scene 2: Blue background
    background(0, 0, 255);
  }
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
  text("Click Me!", x + w/2, y + h/2);
}

function mouseClicked() {
  if (scene === 1) {
    // If the button is clicked in Scene 1, transition to Scene 2
    if (
      mouseX >= buttonX &&
      mouseX <= buttonX + buttonWidth &&
      mouseY >= buttonY &&
      mouseY <= buttonY + buttonHeight
    ) {
      scene = 2; // Change scene to 2
    }
  }
}

  





