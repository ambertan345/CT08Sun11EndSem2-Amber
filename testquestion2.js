let square;

function setup(){
    new Canvas(400, 600);
   
    // code to set the gravity of the world
    world.gravity.y = 10;
    // code to create a new square sprite
    square = new Sprite();
    square.width = 50;
    square.height = 50;
    square.x = width/2;
    square.y = height/2;
    square.color = "blue";
}

function draw(){
    background("grey");

    // code to check if mouse is pressed i.e. mouse.presses()
        // if mouse is pressed, the square sprite "flies" up
    if (mouse.presses()) {
        square.vel.y = -6;
    }
}
