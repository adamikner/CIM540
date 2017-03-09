var frameAmounts = 4;
var frameArray = [];
var currentFrame = 0;


var interval = 1000; //equals one second since it's measured in miliseconds

var pMillis = 0;


function preload() {
    for (var frames = 0; frames < frameAmounts; frames++) {
        var frameString = "assests/Thatwasclose" + frames + ".jpg";
        frameArray[frames] = loadImage(frameString);
    }
}

function setup() {
    createCanvas(500, 500);
    frameRate(30);
}

function draw() {
    // console.log(millis());

    image(frameArray[currentFrame], 0, 0);
    
      if (millis() - pMillis >= interval) {
        currentFrame++; //Next frame
        pMillis = millis();
        
    }
   // currentFrame++; // Next frame
    if (currentFrame == frameArray.length) {
        currentFrame = 0;
        // Return to first frame
    }
    
    ellipse(mouseX,mouseY, 100, 100);
}