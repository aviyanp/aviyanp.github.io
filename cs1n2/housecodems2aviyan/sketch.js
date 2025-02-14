let mouseWasClicked = 0;
let mouseWasDoubleClicked = 0;
let windowColor = 255;
let extraY = 80;
let houseImg;
let keyWasPressed = 0;
let backgroundBrightness = 87;
let spacingBetweenFences = 64;
let fenceX = 100;
let velocity = 1;
let sunY = 180;
let isSun = true;
let randomStarX = [];
let randomStarY = [];


function preload() {
  houseImg = loadImage('A6_orig.png'); // Replace with your image path
}

function setup() {
  createCanvas(1280, 800);
  colorMode(HSB);
  for (let v = 0; v < 50; v++) {
    let randomNumberX = Math.floor(Math.random() * (width + 1));
    randomStarX.push(randomNumberX);
  }
  console.log(randomStarX);
  
  for (let s = 0; s < 50; s++) {
    let randomNumberY = Math.floor(Math.random() * (height + 1));
    randomStarY.push(randomNumberY);
  }
  console.log(randomStarY);

}

function draw() {
  strokeWeight(6);
  background(182, 100, backgroundBrightness);
  if(isSun != true){
    for(let i = 0; i < 50; i++){
      drawStars(randomStarX[i], randomStarY[i]);
    }
  }
  theSunAndMoon();
  theBackground();
  everythingElse();

  if(mouseWasClicked === 1){
    image(houseImg, 730, 390 + extraY, 97, 67);
  }
  fill(0, 0, 100);
  rect(0, 650, width, 25)

  fenceX = 36;
  for(let i = width / spacingBetweenFences; i != 0; i--){
    aFence(fenceX, 600, 44, 120);
    fenceX += 64;
  }



}

function theBackground(){

  fill(117, 100, 60);
  rect(0, 540+extraY, 1280, 180);

  if(keyWasPressed === 1 && backgroundBrightness > 10){
    backgroundBrightness--;
    
  }
  if(keyWasPressed === 0 && backgroundBrightness < 89){
    backgroundBrightness++;

  }

  //console.log("Hello World!");

}

function mouseClicked(){
  if(mouseWasClicked === 1 && mouseX > 480 && mouseX < 640 && mouseY > 460 && mouseY < 700){
    mouseWasClicked = 0;
    windowColor = 255;
    console.log("Clicked back to 0");

  }
  else if(mouseWasClicked === 0 && mouseX > 480 && mouseX < 640 && mouseY > 460 && mouseY < 700){
    mouseWasClicked = 1;
    windowColor = color(60, 45, 100);
    console.log("Clicked back to 1");
  }
}

function keyPressed(){
  if(keyWasPressed === 1){
    keyWasPressed = 0;
    console.log("KEYPRESS 0")
  }
  else if (keyWasPressed === 0){
    keyWasPressed = 1;
    console.log("KEYPRESS 1")
  }


}

function doubleClicked(){

}

function theSunAndMoon(){
  if (isSun) {
    fill(58, 45, 100); 
    circle(120, sunY, 170); 
  } else {
    fill(0, 0, 100);
    circle(120, sunY, 170);
  }


  if(keyWasPressed === 1 && isSun === true){
    sunY += 2;
    if (sunY > height) {
      isSun = false;
      sunY = -170;
    }
  } else if (keyWasPressed === 0 && isSun === false) {
    sunY += 2;
    if (sunY > height) {
      isSun = true;
      sunY = -170;
    }
  } else if (keyWasPressed === 0 && isSun === true) {
    sunY -= 2;
    if (sunY < 180) {
      sunY = 180;
    }
  } else if (keyWasPressed === 1 && isSun === false) {
    sunY -= 2;
    if (sunY < 180) {
      sunY = 180;
    }
  }
}

function aFence(somethingx, somethingy, w, h){
    fill(255)
    rect(somethingx, somethingy, w, h)
    triangle(somethingx, somethingy, somethingx + w, somethingy + h, somethingx + (w/2), somethingy + h)
    rect(somethingx + 10, somethingy - 10, w - 20, h - 20)
    rect(somethingx + 20, somethingy - 20, w - 40, h - 40)
    circle(somethingx + (w/2), somethingy + h + 20, 40)

}

function everythingElse(){
  fill(28, 100, 46);
  rect(250, 220+extraY, 780, 80, 15, 15, 15, 15);

  fill(28, 100, 46);
  rect(250, 300+extraY, 780, 80, 15, 15, 15, 15);

  fill(28, 100, 46);
  rect(250, 380+extraY, 780, 80, 15, 15, 15, 15);

  fill(28, 100, 46);
  rect(250, 460+extraY, 780, 80, 15, 15, 15, 15);

  fill(28, 100, 46);
  rect(250, 540+extraY, 780, 80, 15, 15, 15, 15);

  fill(28, 100, 46);
  rect(290, 160+extraY, 700, 60, 15, 15, 15, 15);

  fill(28, 100, 46);
  rect(330, 120+extraY, 620, 40, 15, 15, 15, 15);

  fill(28, 100, 46);
  rect(360, 80+extraY, 560, 40, 15, 15, 15, 15);

  fill(0, 0, 43);
  rect(480, 380+extraY, 160, 240, 15, 15, 15, 15);

  fill(windowColor);
  rect(720, 380+extraY, 220, 160, 15, 15, 15, 15);
  line(830, 380+extraY, 830, 540+extraY);
  line(720, 460+extraY, 940, 460+extraY);

  fill(windowColor);
  rect(530, 130+extraY, 220, 160, 15, 15, 15, 15);
  line(640, 130+extraY, 640, 290+extraY);
  line(530, 210+extraY, 750, 210+extraY);

  fill(58, 58, 78);
  circle(620, 500+extraY, 30);

  fill(28, 85, 54);
  rect(75, 400+extraY, 75, 225);

  fill(120, 100, 48);
  triangle(50, 450+extraY, 175, 450+extraY, 113, 300+extraY);
  triangle(50, 400+extraY, 175, 400+extraY, 113, 250+extraY);

  fill(28, 85, 54);
  rect(1130, 400+extraY, 75, 225);

  fill(120, 100, 48);
  triangle(1105, 450+extraY, 1230, 450+extraY, 1167, 300+extraY);
  triangle(1105, 400+extraY, 1230, 400+extraY, 1167, 250+extraY);


}

function drawStars(starX, starY){
  push();
  stroke('white');
  fill(0, 0, 100);
  circle(starX, starY, 3);
  pop();
}

