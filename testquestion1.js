let bird
let background, birdImg;

function preload(){
    // write code to preload bird.png and background.png
    // refer to assets folder
    birdImg = loadImage("assets/bird.png")
    background = loadImage("assets/background.png")
    
}

function setup(){
    new Canvas(400, 600);
    // write code to create sprite and load bird image on sprite
    bird = new Sprite();
    bird.x = width/2;
    bird.y = height/2;

    background = new Sprite();
    background.x = width/2;
    background.y = height/2;
    background.layer = 0;

}

function draw(){
    image(background, 0, 0, width, height);
}
