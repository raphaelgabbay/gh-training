var props = null;
var gui = null;
var snakesArray = [];

class Props {
    constructor() {
        // this.iterations = 20;
        // this.speed = 0.01;
        // this.radius = 0;
        // this.pause = false;
        // this.bones = false;
        this.spacing = 50;
    }

    reset() {
        setup();
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    if(props === null) {
        props = new Props();
    }
    if(gui === null) {
        gui = new dat.GUI();
        dat.GUI.toggleHide(); //Hide GUI by default
        gui.add(props, 'reset');
        // gui.add(props, 'pause').listen();
        // gui.add(props, 'bones').listen();
        gui.add(props, 'spacing', 0, 100);
        // gui.add(props, 'speed', 0, 0.1);
        // gui.add(props, 'radius', 0, 1000).listen();
    }

    props.radius = 0.213*min(windowHeight, windowWidth);

    //TODO: Initialize snakesArray
    var nbSnakes = 0;
    
    for(var y = props.spacing/2; y <= windowHeight; y+=props.spacing) {
        for(var x = props.spacing/2; x <= windowWidth; x+=props.spacing) {
            snakesArray.push(new Snake(x, y, nbSnakes));
        nbSnakes++;
        }
    }
   


    createCanvas(windowWidth, windowHeight);
    background(0);
    noFill();
    stroke(255);
}

function draw() {
    background(0,50);
    
    //TODO: Draw all snakes
    for(var snake in snakesArray) {
        snakesArray[snake].display();
    }
}


//TODO: Define line
class Line {
    constructor(Length, Y) {
        this.length = createVector(X, Y);
    }

    display() {
        push();
        if(props.colorMode) {
            fill('white');
        } else fill('red');
        ellipse(this.pos.x, this.pos.y, 5, 5);
        pop();
    }
}

//TODO: Define snake
class Snake {
    constructor(x, y, hue) {
        this.x = x;
        this.y = y;
        this.hue = hue;
    }

    drawLine() {
        push();
        colorMode(HSB, snakesArray.length, 100, 50, 100);
        noFill();
        strokeWeight(1)
        stroke(this.hue, 100, 50, 50);
        line(this.x, this.y, mouseX, mouseY);
        pop();
    }

    display() {
        push();
        fill('white');
        noStroke();
        //ellipse(this.x, this.y, 10);
        pop();
        //TODO: Draw line
        this.drawLine();
    }
}


function keyPressed() {
    if (key === 'r') setup();
    if (key === 'p') props.pause = !props.pause;
    if (key === 'b') props.bones = !props.bones;
}