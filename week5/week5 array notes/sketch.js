var randomHello = [];

function setup() {
   createCanvas(500,500);
    
    
    console.log(randomHello.length);
    console.log(typeof(randomHello));
    
    randomHello.push("Hello");
    console.log(randomHello);
    console.log(randomHello[0]);
    
    randomHello.push("Parev");
    console.log(randomHello);
    console.log(randomHello[1]);
    console.log(randomHello.length);
    
     randomHello.push("Goddag");
    console.log(randomHello);
    console.log(randomHello[randomHello.length - 1]);
    console.log(randomHello.length);
    
    randomHello.push("Bonjour");
    randomHello.push("Halo");
    randomHello.push("Aloha");
    randomHello.push("Shalom");
    randomHello.push("Sawubona");
  
     randomHello.push("Bonjour");
    randomHello.push("Halo");
    randomHello.push("Aloha");
    randomHello.push("Shalom");
    randomHello.push("Sawubona");
    
     randomHello.push("Bonjour");
    randomHello.push("Halo");
    randomHello.push("Aloha");
    randomHello.push("Shalom");
    randomHello.push("Sawubona");
    
    console.log(randomHello);
    console.log(randomHello[randomHello.length - 1]);
    console.log(randomHello.length);
    
    //removes first item in the array -- shift command--opposite of push--removes first value of array
    console.log(randomHello.shift());
    console.log(randomHello);
    
    //a pop removes the last item of an array
    console.log(randomHello.pop());
    console.log(randomHello);
    
    //sorting arrays -- sorts alphabetically a-z
    console.log(randomHello.sort());
  
    //reverse array --sorts alphabeticalls Z-A
    console.log(randomHello.reverse());
    
    
    
    
//    text(randomHello[0], random(width), random(height));
//     text(randomHello[1], random(width), random(height));
//     text(randomHello[2], random(width), random(height));
//     text(randomHello[3], random(width), random(height));
//     text(randomHello[4], random(width), random(height));
//     text(randomHello[5], random(width), random(height));
//     text(randomHello[6], random(width), random(height));
//     text(randomHello[7], random(width), random(height));
    
    for(var i = 0; i < randomHello.length; i++){
        text(randomHello[i], random(width), random(height));
    }
}

function draw() {
  
}