var flavors = {

    "Chocolate": 0,
    "Vanilla": 0,
    "Cookie Dough": 0,
    "Strawberry": 0,
    "Mint Chocolate Chip": 0
};

function setup() {
    createCanvas(500, 500);
    background("orange");
    console.log(flavors);
    console.log(flavors["Chocolate"]);
    console.log(flavors["Vanilla"]);
    console.log(flavors["Cookie Dough"]);
    console.log(flavors["Strawberry"]);
    console.log(flavors["Mint Chocolate Chip"]);

    textSize(32);
    text("Which ice cream flavor is your favorite?", 50, 50, 400, 250);
    text("Chocolate = 1", 50, 150, 400, 400);
    text("Vanilla = 2", 50, 200, 400, 400);
    text("Cookie Dough = 3", 50, 250, 400, 400);
    text("Strawberry = 4", 50, 300, 400, 400);
    text("Mint Chocolate Chip = 5", 50, 350, 400, 400);
}

function draw() {

}

function keyPressed() {

    if (keyCode == 49) {
        flavors["Chocolate"]++;
    } else if (keyCode == 50) {
        flavors["Vanilla"]++;
    } else if (keyCode == 51) {
        flavors["Cookie Dough"]++;
    } else if (keyCode == 52) {
        flavors["Strawberry"]++;
    } else if (keyCode == 53) {
        flavors["Mint Chocolate Chip"]++;
    }

    console.log(flavors);

}