var BGC = 0;
var counter = 175;
var direction = true;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(BGC);

    if (mouseY > height / 2) {
        BGC = color(255, 145, 0);
        direction = false;

    } else {
        BGC = color(205, 0, 255);
        direction = true;
    }

    if (direction == true) {
        counter = counter - 1;
    } else {
        counter = counter + 1;
    }

    if (counter < 0) {
        counter = 0;
    } else if (counter > height - 50) {
        counter = height - 50;
    }

    rect(175, counter, 50, 50);
}