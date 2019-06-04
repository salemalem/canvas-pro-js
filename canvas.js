function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

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
function Particle(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color

    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;

    this.update = function(){
        // Move points over time
        this.radians += this.velocity;
        this.x = this.x + Math.cos(this.radians) * 5; // remove * 100 to make it 2d
        this.y = this.y + Math.sin(this.radians) * 5; // remove * 100 to make it 2dth.cos()
        this.draw()
    }
}

Particle.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
}



// Implementation
let particles;
function init() {
    particles = []

    for (let i = 0; i < 20; i++) {
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, 5, 'blue'));
    }
    console.log(particles);
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(particle => {
     particle.update()
    })
}

init()
animate()
