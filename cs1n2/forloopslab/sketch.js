function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
  strokeWeight(1)
  for(let i = 0; i < 20; i++){
    line(i*10, 0, i*10, 200)
}
  for(let i = 0; i < 20; i++){
    line(0, i*10, 200, i*10)
}
}