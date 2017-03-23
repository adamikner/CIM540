var button;

var newButton;

var fillArray = ["c", "d", "e", "f"];

var fillColor = "yellow";

var noteIndex = 0;

var section0 = 130;
var section1 = 210;
var section2 = 290;
var section3 = 370;

var currentSection = 0;

var playPrevMills = 0;
var playInterval = 3000;
var playCounter = 0;

var game = false;
var checking = false;
var doneChecking = false;

var playerArray = [];

var lost = false;
var win = true;

function setup() {
    createCanvas(675, 500);

    button = createButton('Start');
    button.position(330, 400);
    button.mousePressed(startGame);

    newButton = createButton('New Game');
    newButton.position(330, 450);
    button.mousePressed(newGame);
    newButton.hide();

}

function draw() {
    background(117, 129, 242);

    if (game == true) {
        button.hide();
        newButton.hide();
        playerArray = [];

        var currentLetter = fillArray[playCounter];
        console.log(currentLetter);

        if (millis() - playPrevMills > playInterval) {
            playCounter++;
            playPrevMills = millis();

            if (playCounter >= fillArray.length) {
                playCounter = 0;
                game = false;
                checking = true;
            }
        }
    } else {
        //    
    }



    //White Keys

    fill(255);

    //C
    if (currentLetter == 'c') {
        fill(fillColor);
    } else {
        fill(255);
    }
    rect(50, 75, 80, 300);

    //D
    if (currentLetter == 'd') {
        fill(fillColor);
    } else {
        fill(255);
    }
    rect(130, 75, 80, 300);

    //E
    if (currentLetter == 'e') {
        fill(fillColor);
    } else {
        fill(255);
    }
    rect(210, 75, 80, 300);

    //F

    if (currentLetter == 'f') {
        fill(fillColor);
    } else {
        fill(255);
    }
    rect(290, 75, 80, 300);



    //////////////////////////////////////////

    fill(255);
    //G
    rect(370, 75, 80, 300);
    //A
    rect(450, 75, 80, 300);
    //B
    rect(530, 75, 80, 300);

    //Black Keys
    fill(0);
    rect(110, 75, 40, 210);
    rect(190, 75, 40, 210);
    rect(350, 75, 40, 210);
    rect(430, 75, 40, 210);
    rect(510, 75, 40, 210);

    //Text
    textSize(32);
    text("C", 80, 325, 400, 250);
    text("D", 160, 325, 400, 250);
    text("E", 240, 325, 400, 250);
    text("F", 320, 325, 400, 250);
    text("G", 400, 325, 400, 250);
    text("A", 480, 325, 400, 250);
    text("B", 560, 325, 400, 250);

    if (mouseX > 0 && mouseX <= section0) {

        currentSection = 0;
    } else if (mouseX > section0 && mouseX <= section1) {
        currentSection = 1;

    } else if (mouseX > section1 && mouseX <= section2) {
        currentSection = 2;

    } else if (mouseX > section2 && mouseX <= width) {
        currentSection = 3;

    }

    if (doneChecking == true && lost == true && win == false) {

        text("LOSE!", 300, 450, 400, 250);
        button.show();
        playerArray = [];


    }

    if (doneChecking == true && win == true && lost == false) {
        text("WIN!", 300, 450, 400, 250);
        button.show();
        playerArray = [];


    }

}


function startGame() {
    game = true;
}

function newGame() {
    doneChecking = false;
    lost = false;
    win = false;
    game = true;

}


function mousePressed() {
    if (checking == true) {
        // you can start selecting keys

        if (currentSection == 0) {
            playerArray.push("c");
        } else if (currentSection == 1) {
            playerArray.push("d");
        } else if (currentSection == 2) {
            playerArray.push("e");
        } else if (currentSection == 3) {
            playerArray.push("f");
        }
        console.log(currentSection);
        console.log(playerArray);


        if (playerArray.length == fillArray.length) {

            //            for loop through fillArray vs playerArray


            for (var i = 0; i < fillArray.length; i++) {

                if (fillArray[i] != playerArray[i]) {
                    lost = true;
                    win = false;
                        break;
                } else {
                    win = true;
                    lost = false;

                }
            }

            doneChecking = true;
        }
    }
}
