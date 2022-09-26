var canvas = document.getElementById("canvas");
var draw = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//runs the animation function
//setInterval(run, 10);

//All variables
var x = 20;






function run() {
	requestAnimationFrame(run);

	//clears the canvas
	draw.fillStyle = "rgba(0,0,0,0.08)";
	draw.fillRect(0, 0, window.innerWidth, window.innerHeight);

	draw.fillStyle = "purple";
	draw.fillRect(x,20,20,20);
	
	x+=2;
}
run();
