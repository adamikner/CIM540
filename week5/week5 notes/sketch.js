var message = "hello";
var i = 0;

function setup() {
    createCanvas(200,200);
    frameRate(60);
}

function draw() {
//     textSize(32);
//     text(message, 10, 10, 100, 100);

       // background(255);
    
    ellipse(i, height/2, 10, 10);
    
//    i = i + 1;
//    
//    if(i > width){
//        i = 0;
//    }
    
    
//    while(i < width){
//        i++; //i++ is the same thing as i + 1
//        console.log(i);
//    }
    
//    for(var i = 0; i < width; i++){
//        console.log(i);
//        fill(random(255));
//         ellipse(i, height/2, 10, 10);
//    }
    
//        for(var i = 0; i < width; i++){
//        console.log(i);
//        fill(random(255), random(255), random(255));
//         ellipse(random(width), random(height), 10, 10);
//    }
    while(i < width){
        i++;
        console.log(i);
        fill(random(255), random(255), random(255));
        ellipse(random(width), random(height), 10, 10);
    }
}
    
function keyPressed(){
    console.log(key);
    console.log(keyCode);
    
    if(key == 'A'){
        console.log("A is for Apple");
    }
    
    if(keyCode == 65){
        console.log("A is for 65");
    }
}


    