function setup() {
    createCanvas(675,500);
    background(117,129,242);
}

function draw() {
  
    //White Keys
    fill(255);
    rect(50,75,80,300);
    rect(130,75,80,300);
    rect(210,75,80,300);
    rect(290,75,80,300);
    rect(370,75,80,300);
    rect(450,75,80,300);
    rect(530,75,80,300);
    
    //Black Keys
    fill(0);
    rect(110,75,40,210);
    rect(190,75,40,210);
    rect(350,75,40,210);
    rect(430,75,40,210);
    rect(510,75,40,210);
    
    //Text
    textSize(32);
    text("C", 80, 325, 400, 250);
    text("D", 160, 325, 400, 250);
    text("E", 240, 325, 400, 250);
    text("F", 320, 325, 400, 250);
    text("G", 400, 325, 400, 250);
    text("A", 480, 325, 400, 250);
    text("B", 560, 325, 400, 250);
    
    
    
}