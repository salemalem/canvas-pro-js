// import * as dat from 'node_modules/dat.gui/build/dat.gui.min.js'

const gui = new dat.GUI();

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const wave = {
	y : canvas.height / 2,
	length : 0.01,
	amplitude : 100,
	frequency : 0.01,
}

const strokeColor = {
	h: 200,
	s: 50,
	l: 50
}

const backgroundColor = {
	r: 0,
	g: 0,
	b: 0,
	a: 0.01,
}

const waveFolder = gui.addFolder('wave');
waveFolder.add(wave, 'y', 0, canvas.height);
waveFolder.add(wave, 'length', -0.01, 0.01);
waveFolder.add(wave, 'amplitude', -300, 300);
waveFolder.add(wave, 'frequency', -0.01, 1);
waveFolder.open(); // to keep folder opened

const strokeFolder = gui.addFolder('stroke');
strokeFolder.add(strokeColor, 'h', 0, 255);
strokeFolder.add(strokeColor, 's', 0, 100);
strokeFolder.add(strokeColor, 'l', 0, 100);
strokeFolder.open();

const backgroundFolder = gui.addFolder('background');
backgroundFolder.add(backgroundColor, 'r', 0, 255);
backgroundFolder.add(backgroundColor, 'g', 0, 255);
backgroundFolder.add(backgroundColor, 'b', 0, 255);
backgroundFolder.add(backgroundColor, 'a', 0, 1);
backgroundFolder.open();

let increment = wave.frequency;

function animate(){
	requestAnimationFrame(animate);
	c.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`;
	c.fillRect(0, 0, canvas.width, canvas.height);
	// c.clearRect(0, 0, canvas.width, canvas.height);

	c.beginPath();

	c.moveTo(0, canvas.height / 2);

	// created for loop because without it only two end points of line are controlable.
	// instead of that  code : c.lineTo(canvas.width, canvas.height / 2);
	// with for loop we say that every pixel of line is controllable point. And line is consist of multiple points.
	for (var i = 0; i < canvas.width; i++) {
	    c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment));
	}

	c.strokeStyle = `hsl(${strokeColor.h}, ${strokeColor.s}%, ${strokeColor.l}%)`;
	c.stroke();
	increment += wave.frequency;
}

animate();