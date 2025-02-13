let redVelocity = 1;
let redX = 0;
let blueVelocity = 1;
let blueX = 0;
let greenVelocity = 1;
let greenY = 0;
let circleChange = 1;
let circleDiameter = 1;
let circleX = 0;
let circleY = 0;
let circleXVel = 4;
let circleYVel = 4;

function setup(){
  createCanvas(800, 500);
}

function draw(){
  background(80);
  redSquare();
  blueSquare();
  greenSquare();
  darkCircle();
  yellowCircle();

}

function redSquare(){
  fill('red')
  rect(redX, 40, 40, 40);
  if(redX >= 760 || redX < 0){
    redVelocity *= -1;
  }
  redX += redVelocity;

}

function blueSquare(){
  fill('blue')
  rect(blueX, 120, 40, 40);
  blueVelocity *= 1.03;
  blueX += blueVelocity;
  if(blueX >= 760){
    blueVelocity = 1;
    blueX = 0;
  }

}

function greenSquare(){
  fill('green')
  rect(200, greenY, 40, 40)
  greenY += greenVelocity;
  if(greenY >= 460 || greenY < 0){
    greenVelocity *= -1;
  }
}

function darkCircle(){
  fill('black')
  circle(600, 350, circleDiameter)
  circleDiameter += circleChange
  if(circleDiameter >= 100 || circleDiameter <= 0){
    circleChange *= -1;
  }
}

function yellowCircle(){
  fill('yellow');
  circle(circleX, circleY, 20);
  circleX += circleXVel;
  circleY += circleYVel;
  if(circleX > 800 || circleX < 0){
    circleXVel *= -1;
  }
  if(circleY > 500 || circleY < 0){
    circleYVel *= -1;
  }
}