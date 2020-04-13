// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
let angle = 0;
let angle_1 = 0;

let speed;
let range;
let maxRange;
let randomness;
let delay;
let amplitude;

let count = 0;

function setup() {
    createCanvas(1000, 600);
    frameRate(60);
    angleMode(DEGREES);
}

function draw() {
    clear();

    speed = 1;
    range = 20;
    randomness = 15;
    maxRange = 40;
    //delay =random(500);
    //amplitude = 4;

    angle = abs(range - (count + random(randomness)));
    angle_1 = 80 - angle;
    count = count + speed;

    if(count > maxRange){
      let delay = random(0.2*60);
      delay += -1;
      //let millisecond = millis();

      if(delay<0){
         count = 0;
      //   //millisecond = 0;
      }
    }
    console.log(angle);
    // const theta = map(frameCount, 0, 60, 0, 2 * PI);
    // const pendulumAngle = sin(theta) * .5;


    servo1(300, 300, 6, angle +10);
    servo2(700, 300, 6, angle_1 - 90);


}

function servo1(x, y, size, pendulumAngle) {
    push();
    //noStroke();
    translate(x, y);
    scale(size);

    // body
    //fill(220, 200, 200);
    //noFill();
    fill(200);
    stroke(50);
    strokeWeight(1);
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
    pop();
}

function servo2(x_1, y_1, size_1, pendulumAngle_1) {
    push();
    //noStroke();
    translate(x_1, y_1);
    scale(size_1);

    // body
    //fill(220, 200, 200);
    //noFill();
    fill(200);
    stroke(50);
    strokeWeight(1);
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


    // bottom
    //fill(180, 160, 160);
    //arc(0, 0, 50, 50, PI, 0);
    pop();
}
