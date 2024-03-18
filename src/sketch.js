let scene = 1;
let buttonX, buttonY, buttonWidth, buttonHeight;
let flowers;
let frogX = 200;
let frogY = 300;
let frogSize = 30;

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
  else if (scene === 3 ) {
    //dirty pond
    drawDirtyLily();
  }
  else if (scene === 4) {
    //clean pond
    drawCleanLily();
  }
  else if (scene === 5) {
     //clean pond
     drawCleanLily();
    // Fish drawing
    Fish();
 for (let count = 0; count < 6; count++) {
  Fish(random(width), random(height), 20);
  frameRate(1.5);
}
drawFrog();
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
  else if (scene === 2) {
    // If the button is clicked in Scene 1, transition to Scene 2
    // if (
    //   mouseX >= buttonX &&
    //   mouseX <= buttonX + buttonWidth &&
    //   mouseY >= buttonY &&
    //   mouseY <= buttonY + buttonHeight
    // ) {
      scene = 3; // Change scene to 3
    //}
  }
  else if (scene === 3) {
    scene = 4;
    flowers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let i = 0
    while (i<20){ 
      flowers[i] = (random(width));
      i++;
      flowers [i] = random(height);
      i++;
    }
  }
  else if (scene === 4) {
    scene = 5;
  }
  else if (scene === 5) {
    // Move the frog to the clicked position
    if (dist(mouseX, mouseY, frogX, frogY) < frogSize / 2) {
      // Move the frog to a random position
      frogX = random(width);
      frogY = random(height);
    }

    for (let i = 0; i < flowers.length; i += 2) {
      let flowerX = flowers[i];
      let flowerY = flowers[i + 1];
      if (dist(mouseX, mouseY, flowerX, flowerY) < 20) {
        // Move the whiteflower to a random position
        flowers[i] = random(width);
        flowers[i + 1] = random(height);
      }
    }
  }
}

  
function drawDirtyLily(){
  let xLily = [163, 22, 347, 55, 289, 97, 204, 381, 68, 134, 317, 291, 90, 225, 11,];
let yLily = [49, 306, 245, 88, 172, 384, 203, 57, 298, 119, 375, 30, 196, 300, 363,];
let rLily;
let sLily;
  
  rLily = [ 4.982, 1.235, 2.717, 5.634, 0.874, 3.890, 2.109, 6.006, 4.439, 4.982, 1.235, 2.717, 5.634, 0.874, 3.890];
  sLily = [0.6, 1.2, 0.8, 1.0, 1.3, 0.7, 1.0, 1.1, 0.6, 1.2, 0.8, 1.3, 0.7, 1.1, 0.5];
     //---> *****clean pond***** <---
 // background(180,245,255);
      //---> *****dirty pond***** <---
  background(205,210,200)

  let i= 0
  while(i<15){

    //---> *****Clean lilypads**** <---
    //fill(100,190,150)
   // stroke(90,150,100)
    push();
    //---> ****dirty lilies**** <---
    fill(133, 123, 32)
    stroke(84, 78, 25)
    translate(xLily[i],yLily[i]);
    rotate(rLily[i]);
    scale(sLily[i]);
    arc(0, 0, 50,50, -PI/6, -PI/2);
    pop();
    i++;

    //rocks
  stroke(105, 94, 83)
  fill(105, 94, 83)
  //rect(301,325, 100,80, 10,5,0,10)
  quad(280,340, 310,295, 390,280, 400,360)
  quad(160,380, 130,330, 170,340, 190,360)
  fill(89, 86, 72)
  stroke(89, 86, 72)
    quad(200,140, 220,85, 272,90, 272,140)
  }
}


function drawCleanLily(){
  //---> *****clean pond***** <---
  let xLily = [163, 22, 347, 55, 289, 97, 204, 381, 68, 134, 317, 291, 90, 225, 11];
let yLily = [49, 306, 245, 88, 172, 384, 203, 57, 298, 119, 375, 30, 196, 300, 363];
let rLily = [];
let sLily = [];

   rLily = [ 4.982, 1.235, 2.717, 5.634, 0.874, 3.890, 2.109, 6.006, 4.439, 4.982, 1.235, 2.717, 5.634, 0.874, 3.890];
  sLily = [0.6, 1.2, 0.8, 1.0, 1.3, 0.7, 1.0, 1.1, 0.6, 1.2, 0.8, 1.3, 0.7, 1.1, 0.5];
 
  for (let i = 0; i < 9; i++) {
    rLily.push(0);
    sLily.push(1); 
  
  }
  background(180,245,255);

  let i = 0;
  while (i < 15) {

    //---> *****Clean lilypads**** <---
    push();
    fill(100,190,150);
    stroke(90,150,100);
    translate(xLily[i], yLily[i]);
    rotate(rLily[i]);
    scale(sLily[i]);
    arc(0, 0, 50, 50, -PI / 6, -PI / 2);
    pop();
    i++;

    //rocks
    stroke(105, 105, 102);
    fill(143, 143, 138);
    //rect(301,325, 100,80, 10,5,0,10)
    quad(280, 340, 310, 295, 390, 280, 400, 360);
    quad(160, 380, 130, 330, 170, 340, 190, 360);
    quad(200, 140, 220, 85, 272, 90, 272, 140);
  }

  // Flower drawing
  for (let count = 0; count < 6; count++) {
    drawMainFlower(flowers[2*count], flowers[2*count+1], 20);
  }
}

function drawMainFlower(x, y, size) {
  push();
  translate(x, y);

  for (let r = 0; r < 2 * PI; r += 2 * PI / 10) {
    push();
    rotate(r);
    fill(255);
    noStroke();
    ellipse(0, 10, 10, 30);
    pop();
  }

  noStroke();
  fill(255, 234, 141);
  ellipse(0, 0, size);
  pop();

  drawSecondaryFlowers(x, y, size);
}

function drawSecondaryFlowers(x, y, size) {
  for (let r = 0; r < 2 * PI; r += 2 * PI / 10) {
    push();
    translate(x + 100, y); 
    rotate(r);
    noStroke();
    fill(255, 176, 247);
    ellipse(0, 10, 10, 30);
    pop();
  }

  noStroke();
  fill(255, 234, 141);
  ellipse(x + 100, y, size); 

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

}

function Fish(x, y){
push();
translate(x,y);
noStroke();
fill('orange');
ellipse(0,0, 40, 20);
triangle(-30,12, -30,-12, -12,0)
fill('black');
circle(10, -2, 5);

pop();

}

