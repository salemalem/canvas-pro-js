import utils from './utils';

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

var gravity = 1;
var friction = 0.95;

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function Ball(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.radius = radius
    this.color = color

}

Ball.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.stroke();
    c.closePath()
}

Ball.prototype.update = function() {
    if (this.y + this.radius + this.dy >= canvas.height) {
            this.dy = -this.dy * friction;
            this.dx = this.dx * friction;
    } else {
        this.dy += gravity;
    }

    if (this.x + this.radius + this.dx >= canvas.width) {
        this.dx = - this.dx;
    }
    if (this.x - this.radius <= 0) {
        this.dx = - this.dx;
    }



    this.x += this.dx;
    this.y += this.dy;
    this.dx = this.dx;
    this.draw()
}
var ballArray = [];
// Implementation
function init() {
    ballArray = [];

    for (let i = 0; i < 20; i++) {
        let radius = utils.randomIntFromRange(25, 35);
        let x = utils.randomIntFromRange(0 + radius, canvas.width - radius);
        let y = utils.randomIntFromRange(0 + radius, canvas.height - radius);
        let dx = utils.randomIntFromRange(-2, 2);
        let dy = utils.randomIntFromRange(-2, 2);
        let color = utils.randomColor(colors);
        ballArray.push(new Ball(x, y, dx, dy, radius, color));
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    ballArray.forEach(ball => {
     ball.update()
    })
}

init()
animate()
