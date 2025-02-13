//Aviyan Panday, CS1 A (Whittenburg), No EC implemented

let graph_it_button;
let a_input, b_input, c_input;
let a_term, b_term, c_term;

function setup() {
  createCanvas(700, 400);
  
  a_input = createInput();
  a_input.position(420, 10);
  b_input = createInput();
  b_input.position(420, 40);
  c_input = createInput();
  c_input.position(420, 70);
  
  graph_it_button = createButton('Graph It!');
  graph_it_button.position(600, 40);
  graph_it_button.mousePressed(graph_it);
  
  background(220);
  
  run_milestone_1_tests();
}

function draw() {
  fill(0);
  text("a:", 405, 25);
  text("b:", 405, 55);
  text("c:", 405, 85);

}

//----------------------------Milestone 1----------------------------//
function get_y(x, a, b, c){
  // Given y=ax^2+bx+c, calculates y for a given x.
   return a*x**2 + b*x + c;
}

function get_h(a, b, c){
  //Given y=ax^2+bx+c, calculates h from y = a(x - h)^2 + k
  return -b/(2*a);
}

function get_k(a, b, c){
  //Given y=ax^2+bx+c, calculates k from y = a(x - h)^2 + k
  return get_y(get_h(a, b, c), a, b, c);
}

function get_x_intercepts(a, b, c){
  //Given y=ax^2+bx+c, use the quadratic formula
  if(b**2 - 4*a*c > 0){
    if(a != 0){
      let pos = (-1 * b + Math.sqrt(b**2 - 4*a*c))/(2*a); //plus
      let neg = (-1 * b - Math.sqrt(b**2 - 4*a*c))/(2*a); //minus
      if(pos > neg){
        return [pos, neg]; //reordering the x-ints if needed?
      }
      else{
        return [neg, pos];
      }
    }
    else{
      return [(-1*c)/b]; // this essentially means the equation is linear, so all i'm doing is computing the x-int for it
    }
  }
  if(b**2 - 4*a*c === 0){
    if(a != 0){
      return [(-1 * b + Math.sqrt(b**2 - 4*a*c))/(2*a)]; // one solution, so either plus sqrt(b^2 - 4ac) or minus would work
    }
    else{
      return []; //returns empty array
    }
  }
  else{
      return []; //returns empty array
  }
}

function get_y_intercept(a, b, c){
  //Given y=ax^2+bx+c, each point where x = 0
  return c;
}

function coefficient_handler(n, isC, isA, isVertex) {
  if (n === 0 && isVertex) {
    return "";
  }
  if (n > 0 && isVertex) {
    return "+ " + n;
  }
  if (n < 0 && isVertex) {
    return "- " + Math.abs(n);
  }
  if (n === 1 && isA === true) {
    return "";
  }
  if (n === -1 && isA === true) {
    return "-";
  }
  if (n === 0 && isA === true) {
    return "0";
  }
  if (n === 1 && isC === true) {
    return "+ 1";
  }
  if (n === 1 && isC === false) {
    return "+ ";
  }
  if (n === -1) {
    return "- ";
  }
  if (n > 0) {
    return "+ " + n;
  }
  if (n === 0) {
    return "+ 0";
  }
  if (n < 0) {
    return "- " + Math.abs(n);
  }
}
function draw_text(a, b, c) {
  background(220);
  fill(0);
  let xints = get_x_intercepts(a, b, c);
  text("Standard Form: y = " + coefficient_handler(a, false, true, false) + "x\u00B2 " + coefficient_handler(b, false, false, false) + "x " + coefficient_handler(c, true, false, false), 405, 120);

  let h = get_h(a, b, c);
  let k = get_k(a, b, c);
  if (isFinite(h) && isFinite(k)) {
    text("Vertex Form: y = " + a + "(x " + coefficient_handler(h, false, false, true) + ")\u00B2 " + coefficient_handler(k, false, false, true), 405, 140);
    text("Vertex: (" + h + ", " + k + ")", 405, 160);
    text("Axis of Symmetry: x = " + h, 405, 180);
    if (xints.length === 0) {
      text("X-Intercepts: NONE", 405, 220);
    }
    if (xints.length === 1) {
      text("X-Intercept: (" + xints[0] + ", 0)", 405, 220);
    }
    if (xints.length === 2) {
      text("X-Intercepts: (" + xints[0] + ", 0), (" + xints[1] + ", 0)", 405, 220);
    }
    text("Y-Intercept: (0, " + get_y_intercept(a, b, c) + ")", 405, 240);

    text("X", 410, 280);
    text("Y", 450, 280);
    line(435, 270, 435, height);
    line(400, 285, 470, 285);

    text(h - 2, 410, 300);
    text(h - 1, 410, 320);
    text(h, 410, 340);
    text(h + 1, 410, 360);
    text(h + 2, 410, 380);
    text(get_y(h - 2, a, b, c), 450, 300);
    text(get_y(h - 1, a, b, c), 450, 320);
    text(get_y(h, a, b, c), 450, 340);
    text(get_y(h + 1, a, b, c), 450, 360);
    text(get_y(h + 2, a, b, c), 450, 380);
  } else {
    text("Vertex Form: N/A", 405, 140);
    text("Vertex: N/A", 405, 160);
    text("Axis of Symmetry: N/A", 405, 180);
    if (xints.length === 0) {
      text("X-Intercepts: NONE", 405, 220);
    }
    if (xints.length === 1) {
      text("X-Intercept: (" + xints[0] + ", 0)", 405, 220);
    }
    if (xints.length === 2) {
      text("X-Intercepts: (" + xints[0] + ", 0), (" + xints[1] + ", 0)", 405, 220);
    }
    text("Y-Intercept: (0, " + get_y_intercept(a, b, c) + ")", 405, 240);

    text("X", 410, 280);
    text("Y", 450, 280);
    line(435, 270, 435, height);
    line(400, 285, 470, 285);

    text("-2", 410, 300);
    text("-1", 410, 320);
    text("0", 410, 340);
    text("1", 410, 360);
    text("2", 410, 380);
    text(get_y(-2, a, b, c), 450, 300);
    text(get_y(-1, a, b, c), 450, 320);
    text(get_y(0, a, b, c), 450, 340);
  }
}
//----------------------------Milestone 2----------------------------//
function draw_grid(){
  //draws a grid-based coordinate plane in the viewing window
  fill(255);
  rect(0,0,400,400);
  line(0, 200, 400, 200)
  line(200, 0, 200, 400)
  push();
  strokeWeight(2);
  for(let i = -20; i < 20; i += 5){
    line(200+i*10, 195, 200+i*10, 205);
    line(195, 200+i*10, 205, 200+i*10);
  }
  pop();
}

function draw_graph(a, b, c){
  for(let i = -20; i <= 20; i += 0.001){
    fill(0);
    circle(get_view_window_x(i), get_view_window_y(get_y(i, a, b, c)), 1);
  }

  let h = get_h(a, b, c);
  let k = get_k(a, b, c);

  if(isFinite(h) && isFinite(k)){
    push()
    strokeWeight(2)
    for(let i = 0; i<400; i += 20){
      line(get_view_window_x(h), i, get_view_window_x(h), i+10)
    }
    pop()
    for(let i = h-2; i <= h+2; i++){
      fill(120);
      circle(get_view_window_x(i), get_view_window_y(get_y(i, a, b, c)), 10);
      push();
      fill(255, 50, 0)
      circle(get_view_window_x(h), get_view_window_y(k), 10)
      pop();
    }
  }
  else{
    for(let i = -2; i <= 2; i++){
      fill(120);
      circle(get_view_window_x(i), get_view_window_y(get_y(i, a, b, c)), 10);
    }
  }
  let xints = get_x_intercepts(a, b, c);
      fill(108, 250, 7)
      circle(get_view_window_x(xints[0]), get_view_window_y(get_y(xints[0], a, b, c)), 10)
      fill(108, 250, 7)
      circle(get_view_window_x(xints[1]), get_view_window_y(get_y(xints[1], a, b, c)), 10)
      fill(0, 212, 201)
      circle(get_view_window_x(0), get_view_window_y(get_y_intercept(a, b, c)), 10)
}

function get_view_window_x(math_x){
  return 200 + math_x*10;
  
}

function get_view_window_y(math_y){
  return 200 - math_y*10;
  
}

//----------------------------Event Listeners----------------------------//
function graph_it(){
  a = parseFloat(a_input.value());
  b = parseFloat(b_input.value());
  c = parseFloat(c_input.value());
  
  draw_text(a, b, c);
  draw_grid();
  draw_graph(a, b, c);
}

//----------------------------Function Tests----------------------------//
function run_milestone_1_tests(){
  //--------------------------------------------get_y tests--------------------------------------------//
  console.assert(get_y(0, 1, 2, 3)===3, "get_y(0, 1, 2, 3) should return 3. You returned:"+get_y(0, 1, 2, 3))
  console.assert(get_y(1, 1, 2, 3)===6, "get_y(1, 1, 2, 3) should return 6. You returned:"+get_y(1, 1, 2, 3))
  console.assert(get_y(1, 0, 2, -3)===-1, "get_y(1, 0, 2, -3) should return -1. You returned:"+get_y(1, 0, 2, -3))
  console.assert(get_y(4, 2, -4, 1)===17, "get_y(4, 2, -4, 1) should return 17. You returned:"+get_y(4, 2, -4, 1))
  print("All get_y() tests pass!!")
  //--------------------------------------------get_h tests--------------------------------------------//
  console.assert(get_h(1, 2, 3)===-1, "get_h(1, 2, 3) should return -1. You returned:"+get_h(1, 2, 3))
  console.assert(get_h(3, 0, 3)===0, "get_h(3, 0, 3) should return 0. You returned:"+get_h(3, 0, 3))
  console.assert(get_h(2, -4, 1)===1, "get_h(2, -4, 1) should return 1. You returned:"+get_h(2, -4, 1))
  print("All get_h() tests pass!!")
  //--------------------------------------------get_k tests--------------------------------------------//
  console.assert(get_k(1, 2, 3)===2, "get_k(1, 2, 3) should return 2. You returned:"+get_k(1, 2, 3))
  console.assert(get_k(2, -4, 1)===-1, "get_k(2, -4, 1) should return -1. You returned:"+get_k(2, -4, 1))
  print("All get_k() tests pass!!")
    //--------------------------------------------get_y_intercepts tests--------------------------------------------//
  console.assert(get_y_intercept(1, 2, 3)===3, "get_y_intercept(1, 2, 3) should return 3. You returned:"+get_y_intercept(1, 2, 3))
  console.assert(get_y_intercept(0, 2, 3)===3, "get_y_intercept(0, 2, -3) should return 3. You returned:"+get_y_intercept(0, 2, -3))
  console.assert(get_y_intercept(2, -4, 1)===1, "get_y_intercept(2, -4, 1) should return 1. You returned:"+get_y_intercept(2, -4, 1))
  print("All get_y_intercepts() tests pass!!")
  //--------------------------------------------get_x_intercepts tests--------------------------------------------//
  console.assert(get_x_intercepts(1, 2, 3).length===0, "get_x_intercepts(1, 2, 3) should return []. You returned:"+get_x_intercepts(1, 2, 3))
  console.assert(get_x_intercepts(2, -4, 1)[0]===1.7071067811865475 && get_x_intercepts(2, -4, 1)[1]===0.2928932188134524, "get_x_intercepts(2, -4, 1) should return [1.7071067811865475, 0.2928932188134524]. You returned:"+get_x_intercepts(2, -4, 1))
  console.assert(get_x_intercepts(1, 6, 9)[0]===-3, "get_x_intercepts(1, 6, 9) should return [-3]. You returned:"+get_x_intercepts(1, 6, 9))
  console.assert(get_x_intercepts(1, 6, 9).length===1, "get_x_intercepts(1, 6, 9) should return [-3]. You returned:"+get_x_intercepts(1, 6, 9))
  console.assert(get_x_intercepts(0, 3, 6)[0]===-2, "get_x_intercepts(0, 3, 6) should return [-2]. You returned:"+get_x_intercepts(0, 3, 6))
  print("All get_x_intercepts() tests pass!!")

}
