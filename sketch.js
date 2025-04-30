let velocity = {x: 2.5, y: 2};
let ball;
let ballSize;

function setup() {
  createCanvas(600, 400);
  ball = new Vector(300, 200);
  ballSize = 20;
}

function draw() {
    background(220);

    ball.add(velocity);

    stroke(255);
    circle(ball.x, ball.y, ballSize);

    if ((ball.x - ballSize + 10) < 0 || (ball.x + ballSize - 10) > width) {
        velocity.x *= -1; 
    }

    if ((ball.y - ballSize + 10) < 0 || (ball.y + ballSize - 10) > height) {
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
