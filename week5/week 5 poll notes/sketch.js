var choices = {
    
    "Cake": 0,
    "Candy": 0,
    "Pie": 0,
    "Savory": 0  
    
};

var cakeMessage = "";
var candyMessage = "";
var pieMessage = "";
var savoryMessage = "";

function setup() {
    createCanvas(400,100);
    console.log(choices);
    console.log(choices["Cake"]);
    console.log(choices["Candy"]);
    console.log(choices["Pie"]);
    console.log(choices["Savory"]);
    
    noStroke();
}

function draw() {
    background(255);
   
    fill(255,0,0,100);
    ellipse(20, height/2, choices["Cake"], choices["Cake"]);
    fill(0,255,0,100);
    ellipse(100, height/2, choices["Candy"], choices["Candy"]);
    
    fill(0,0,0);
    text(cakeMessage, 10, height/2);
    text(candyMessage, 80, height/2);

    
    
}

function keyPressed(){
    //49 == 1, 50 == 2, 51 == 3, 52 == 4
    
    if(keyCode == 49){
        choices["Cake"]++;
        //choices["Cake"]++ = choices["Cake"] + 1
        cakeMessage = "Cake: " + choices["Cake"];
    }else if(keyCode == 50){
        choices["Candy"]++;
        candyMessage = "Candy: " + choices["Candy"];
    }
    
        console.log(choices);

}