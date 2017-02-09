var mouthX = 50;
var mouthY = 300;
var mouthW = 400;
var mouthH = 40;

var eye1X = 70;
var eye1Y = 70;

var eye2offset = 300;
var pupiloffset = 20;

var backgroundColor = 'yellow';

var randNum = 0;

var mapX = 0

function setup() {

    createCanvas(500,400);
    background(255,0,0);
    background(125);
    
    noStroke();
    randNum = random(256); //0-255 full range
    console.log(randNum);
    
}



function draw() {
    // x, y, width, height
    
   frameRate(30);
    
    background(backgroundColor);
    ellipse(mouseX,mouseY,10,10);
    
    mapX = map(mouseX,0,width,-10,10);
   // ellipse(random(width),random(height),50,50);
    
    
    //eye1
    fill(255);
    ellipse(eye1X,eye1Y,100,100);
    
    //eye1 pupil
    fill(0,0,250);
    ellipse(eye1X + mapX,eye1Y + pupiloffset,25,50);
    
    //eye2
    fill(255);
    ellipse(eye1X + eye2offset,eye1Y,100,100);
    
    //eye2 pupil
    fill(0,0,250);
    ellipse(eye1X + eye2offset + mapX,eye1Y + pupiloffset,25,50);
    
    //nose
    fill(255);
    triangle(width/2,height/2,(width/2) + 20,(height/2) + 20,(width/2) - 20,(height/2) + 20)
    
    //mouth
    rect(mouthX,mouthY,mouthW,mouthH);
    
    //lipline
    stroke(125);
    strokeWeight(10);
    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
    noStroke();
   
    //tongue
    //fill('red');
    
    fill(randNum,0,0);
    arc(width/2 + 100,315,100,100,0,PI);
    
}

function mousePressed(){
    //background('yellow');
    backgroundColor = "pink";
     randNum = random(256);
    
}

function mouseReleased(){
    backgroundColor = "blue";
    
}