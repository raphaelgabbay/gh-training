let props = null;
let gui = null;

let time = 0;
let circlesArray = [];

class Props {
    constructor() {
        this.spacing = 50;
        this.colorMode = false;
        this.mouseControl = true;
    }
    reset() {
        remove();
        setup();
    }
}

function setup() {
    if(props === null) {
        props = new Props();
        gui = new dat.GUI();
        dat.GUI.toggleHide(); // Hide GUI by default

        // Add elements to GUI
        gui.add(props, 'reset');
        gui.add(props, 'spacing', 0, 100);
        gui.add(props, 'colorMode');
        gui.add(props, 'mouseControl');
    }

    // Changing p5 variables
    noStroke();
    colorMode('HSB', 360, 100, 100, 100);
    angleMode(DEGREES);

    // TODO: Initialize all circles
    for (let i = 0; i < 5; i++) {
        circlesArray.push(new Circle(100*i, 0, 50, 50));        
    }

    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    translate(windowWidth/2, windowHeight/2);
    rotate(time*5);
    //background(0);
    
    // Draw && Update all circles
    circlesArray.forEach(Circle => {
        Circle.update();
        Circle.display();
    });
        
    time++; // Time goes on
}

// Define circle
class Circle {
    constructor(x, y, size, bright) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.bright = bright;
    }

    display() { // Display this circle
        push();
        // fill(this.bright);
        fill(255,3);
        ellipse(this.x, this.y, this.size);
        pop();
    }

    update() { // Update this circle

    }
}


function keyPressed() {
    if (key === 'r') setup();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }