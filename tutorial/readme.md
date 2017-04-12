TUTORIAL ON A SOUND FILE LIBRARY

In my final project, sound is an integral portion, as it is an interactive piano game. When the pattern is played, the notes sound, as well as when the user presses the keys themselves via the mouse.


Code parts: 

First I got the mp3 files I wanted to use, and grouped them together in a folder for easy access.

Another initial step is to preload the soundfiles using the preload function

function preload() {
    CSound = loadSound('sounds/C.mp3');
    DSound = loadSound('sounds/D.mp3');
    ESound = loadSound('sounds/E.mp3');
    FSound = loadSound('sounds/F.mp3');
    GSound = loadSound('sounds/G.mp3');
    ASound = loadSound('sounds/A.mp3');
    BSound = loadSound('sounds/B.mp3');
}

from there, I wanted each sound file to play when its associated key would be illuminated. Therefore, I set up true/false statements within this if/else statement.

//D
    if (currentLetter == 'd') {
        fill(fillColor);
        PlayDSound = true;
    } else {
        fill(255);
        PlayDSound = false;
    }
    rect(130, 75, 80, 300);
    
    
initially, all true/false statements are set as false

var PlayDSound = false;
var DSoundPlayed = false;

Next, because I only want the sound files to play once even though they are in the draw function--being looped through over and over again--I have to set up more conditional statements, which I did below

    if (PlayDSound == true && DSoundPlayed == false) {
        PlayDSound = false;
        DSoundPlayed = true;
        DSound.play();
    } else if (PlayDSound == false && DSoundPlayed == true) {
        DSound.stop();
        DSoundPlayed = false;
    }
    
because PlayDSound is immediately set to false after it is initially made true in the fill if/else statement, and DSoundPlayed is set to true, it will play only once instead of over and over again in the draw because this new if statement with 2 conditions will never be fulfilled again. Instead, it drops down to the else/if portion, where the sound file is told to stop.

But I also want the sound files to play when it is the user's turn to repeat the pattern by clicking on the piano keys with the mouse. So to do so, under the mosuePressed function, where I push values into the user array, I also would play the corresponding sound files.

   } else if (currentSection == 1) {
            playerArray.push("d");
            DSound.play();
        }
        
Because it is not in the draw and not being redrawn over and over, I simply need to include the .play(); as it only plays once per click.

And thats a bit on how I'm using a sound file library in my final!