// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
let angle = 0;
let angle_1 = 0;
let sel;

let speed;
let range;
let maxRange;
let randomness;
let delay;
let delayRandomness;
let amplitude;

let count = 0;

var inc = 0.01;
var start = 0;
var x = 0;

var volhistory = [];

var speed_slider;
var maxRange_slider;
var randomness_slider;
var delayRandomness_slider;

function setup() {
    speed = 1;
    range = 20;
    randomness = 15;
    maxRange = 40;
    //delay =random(500);
    amplitude = 8;
    delayRandomness = 200;
    createCanvas(1200, 600);
    frameRate(60);
    angleMode(DEGREES);

    //translate(0, 100);

    //createP('Angular Velocity');
    var a = 200;


    speed_slider = createSlider(0, 5, 1);
    speed_slider.position(970, 50+a);
    speed_slider.style("width", "100");


    //createP('Range');
    maxRange_slider = createSlider(0, 180, 40);
    maxRange_slider.position(970, 85+a);
    maxRange_slider.style("width", "100");

    //createP('Angle Randomness');
    randomness_slider = createSlider(0, 20, 15);
    randomness_slider.position(970, 120+a);
    randomness_slider.style("width", "100");
    //createP('Delay Randomness');
    delayRandomness_slider = createSlider(0, 1000, 200);
    delayRandomness_slider.position(970, 155+a);
    delayRandomness_slider.style("width", "100");

    // reset_button = createButton("Reset");
    // reset_button.position(1085, 190+a);
    // reset_button.mousePressed(setup);
}

function draw() {
    clear();
    push();
    noStroke();
    fill(220);
    rect(800, 0, width-830, height);
    pop();
    push();
    stroke(50);
    noFill();
    rect(0, 0, width, height);
    pop();
    
    speed = speed_slider.value();
    //range = maxRange * 0.5;
    randomness = randomness_slider.value();
    maxRange = maxRange_slider.value();
    range = maxRange * 0.5;
    delayRandomness = delayRandomness_slider.value();
    amplitude = 8;

    angle = abs(range - (count + random(randomness)));
    angle_1 = 80 - angle;
    count = count + speed;

    if(count > maxRange){
      let delay = random(delayRandomness*0.001*60);
      delay += -1;
      //let millisecond = millis();

      if(delay<0){
         count = 0;

      //   //millisecond = 0;
      }
    }



    servo1(200, 200, 6, angle +10);
    servo2(600, 200, 6, angle_1 - 90);

    graphic(x,angle);
    x = x+1;

    drawSliderText();

}
function graphic(posX, servoAngle){

  var vol = servoAngle;
  volhistory.push(vol);
  stroke(50);
  //strokeWeight(1);
  noFill();
  push();
  strokeWeight(2);
  var currentY = map(vol, 0, 40, height, 0);
  translate(0, height - 300);
  beginShape();
  for (var i = 130; i < volhistory.length; i += 4) {
    var y = map(volhistory[i], 0, 180, 180, 0);
    //var y = 100 - volhistory[i];
    vertex(i, y);
  }
  endShape();
  pop();
  if (volhistory.length > width - 530) {
    volhistory.splice(0, 4);
  }

  // stroke(255, 0, 0);
  // line(volhistory.length, 0, volhistory.length, height);

}

function servo1(x, y, size, pendulumAngle) {
    //clear();
    push();
    //noStroke();
    translate(x, y);
    scale(size);

    // body
    //fill(220, 200, 200);
    //noFill();
    fill(220);
    stroke(50);
    strokeWeight(0.5);
    //quad(-10, -100, 10, -100, 40, 0, -40, 0);
    quad(-11, 6, -11, -6, 11, -6, 11, 6);
    //fill()
    ellipse(5, 0, 12);
    pop();
    // pendulum
    push();
    //noStroke();
    translate(x + 30, y);
    scale(size);
    rotate(pendulumAngle);
    fill(255);
    //rect(-3, -90, 6, 90);
    //rect(-2.8, -2.8, 20, 5.6, 2.8);
    rect(-2.8, -17.2, 5.6, 20, 2.8);

    ellipse(0, 0, 2)
    //ellipse(0, -70, 20, 20);
    pop();


    // bottom
    //fill(180, 160, 160);
    //arc(0, 0, 50, 50, PI, 0);
    //pop();
}

function servo2(x_1, y_1, size_1, pendulumAngle_1) {
    push();
    //noStroke();
    translate(x_1, y_1);
    scale(size_1);

    // body
    //fill(220, 200, 200);
    //noFill();
    fill(220);
    stroke(50);
    strokeWeight(0.5);
    //quad(-10, -100, 10, -100, 40, 0, -40, 0);
    quad(-11, 6, -11, -6, 11, -6, 11, 6);
    //fill()
    ellipse(-5, 0, 12);
    pop();
    // pendulum
    push();
    //noStroke();
    translate(x_1 - 30, y_1);
    scale(size_1);
    rotate(pendulumAngle_1);
    fill(255);
    //rect(-3, -90, 6, 90);
    //rect(-2.8, -2.8, 20, 5.6, 2.8);
    rect(-2.8, -17.2, 5.6, 20, 2.8);

    ellipse(0, 0, 2)
    //ellipse(0, -70, 20, 20);
    pop();

}

function drawSliderText() {
  fill(50);
  textSize(20);
  text("Servo Behavior", 130, 60);
  text("Waveform Graph", 130, 330);
  textSize(60);
  strokeWeight(0.5);
  text("FEAR", 830, 90);
  

  translate(0, 200);
  // slider text
  fill(255);
  rect(1070, 40, 50, 20);
  rect(1070, 75, 50, 20);
  rect(1070, 110, 50, 20);
  rect(1070, 145, 50, 20);

  fill(50);


  textSize(15);
  //stroke(255);
  strokeWeight(0.5);

  //text("Choose Emotion", 830, 20);


  text("Angular Velocity",830,55);
  text(speed, 1080, 55);

  text("Maximum Range", 830, 90);
  text(maxRange, 1080, 90);

  text("Angle Randomness", 830, 125);
  text(randomness, 1080, 125);

  text("Delay Randomness", 830, 160);
  text(delayRandomness, 1080, 160);



}
