//var num = 100;
//var num2 = 50;
//var trex = 1000;
//var zeven = 7;
//var message = "hello";
//var anotherMessage = "goodbye";
//var booleanVar = true;
//var booleanVar2 = false;

var mouthX = 50;
var mouthY = 300;
var mouthW = 400;
var mouthH = 40;

function setup() {
//console.log(num);
//console.log("num + num2= " + (num + num2));
//console.log(num * num2);
//console.log(num/num2);
//console.log(message + anotherMessage);
//console.log(message + " " + anotherMessage);    
//console.log(booleanVar);
//    
//console.log(message + trex);
    
//this is not going to work    
//console.log(message * trex);
//this will also not work
    //console.log(message/trex);
    

/*
If you want to
write more stuff.
Use a multi-line
comment.

*/
    
    
//var message2 = "this only works in the setup";
//console.log(message2);
    createCanvas(500,400);
    background(255,0,0);
    background(125);
    
    console.log("width: " + width + " " + "height: " + height);
}



function draw() {
//  console.log(num);
    // x, y, width, height
    ellipse(70,70,100,100);
    
    ellipse(width/2,height/2,50,50);
    
    rect(mouthX,mouthY,mouthW,mouthH);
    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
}