var floral0;
var floral1;
var floral2;
var floral3;
var floral4;
var floral5;

var floralArray = [];

var floralIndex = 0;

function setup() {
    createCanvas(300,300);
    
    
    floralArray.push(loadImage("images/floral.jpg"));
    floralArray.push(loadImage("images/floral1.jpg"));
    floralArray.push(loadImage("images/floral2.jpg"));
    floralArray.push(loadImage("images/floral3.jpg"));
    floralArray.push(loadImage("images/floral4.jpg"));
    floralArray.push(loadImage("images/floral5.jpg"));
    
    floralIndex = floralChooser(0,6);

}

function draw() {
  image(floralArray[floralIndex],0,0);
}

function mousePressed(){
    floralIndex = floralChooser(0,6);
    
}

function floralChooser(min,max){
    
    var randomNum = int(random(min, max));
    
    return randomNum;
}