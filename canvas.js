let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

// Rectangles
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);

c.fillStyle = 'rgba(255, 50, 0, 0.5)';
c.fillRect(400, 100, 100, 100);

c.fillStyle = 'rgba(255, 50, 100, 0.5)';
c.fillRect(300, 300, 100, 100);

console.log(canvas);

// Lines
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = 'firebrick';
c.stroke();

// Circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

for (let i = 0; i < 5; i++) {
	let x = Math.random() * window.innerWidth;
	let	y = Math.random() * window.innerHeight;

	c.beginPath();
	c.arc(x, y, 30, 0, Math.PI * 2, false);
	c.strokeStyle = 'blue';
	c.stroke();
}