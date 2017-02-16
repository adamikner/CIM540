var colorArray = ["white", "green", "pink", "purple", "blue", "orange", "yellow"];
//arrays start at o         1           2       3       4       5           6

var counter = 0;

function setup() {
    createCanvas(400,400);
    console.log(colorArray[2])
    
    console.log(colorArray.length);
}

function draw() {
  background(colorArray[counter]);
    
    
}
    
    

function mousePressed(){
    counter = counter + 1;
    
    //make sure the if statement comes after the counter
    if(counter > colorArray.length-1){
        counter = 0;
    }
}