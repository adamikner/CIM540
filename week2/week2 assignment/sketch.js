var num = 250;
var num2 = 173;
var num3 = 106;
var base = 350;
var start = 0
var end = 700

function setup() {
    createCanvas(700,500);
    background(num,num2,num3);
    fill(0,0,0);
    
}

function draw() {
  //line( start_x, start_y, end_x, end_y )
    line(start,base,end,base);
    line(start,base - 50,end,base - 50);
    line(start,base - 100,end,base - 100);
    line(start,base - 150,end,base - 150);
    line(start,base - 200,end,base - 200);
    
    ellipse(50,200,50,50);
    ellipse(150,150,50,50);
    line(25,200,25,325);
    line(125,150,125,275);
    line(25,325,125,275);
    
    ellipse(275,275,50,50);
    line(300,275,300,175);
    
    ellipse(400,225,50,50);
    ellipse(460,200,50,50);
    ellipse(520,175,50,50);
    ellipse(580,150,50,50);
    
    line(375,225,375,340);
    line(435,200,435,315);
    line(495,175,495,290);
    line(555,150,555,265);
    line(375,340,555,265);
    line(375,325,555,250);
    
}