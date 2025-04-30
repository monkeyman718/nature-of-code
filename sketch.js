let velocity = {x: 2.5, y: 2};
let ball;

function setup() {
  createCanvas(600, 400);
  ball = new Vector(300, 200);
}

function draw() {
    background(220);

    ball.add(velocity);
    console.log(`${ball.x}, ${ball.y}`);

    stroke(255);
    circle(ball.x, ball.y, 20);

    if (ball.x < 0 || ball.x > width) {
        velocity.x *= -1; 
    }

    if (ball.y < 0 || ball.y > height) {
        velocity.y *= -1; 
    }
}

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }

    add (vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
}
