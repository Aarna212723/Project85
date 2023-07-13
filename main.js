var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Give specific height and width to the car image
car_width = 75;
car_height = 100;

// Set initial position for a car image
car_x = 5;
car_y = 225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

function add() {
	// Upload car and background images on the canvas
	uploadBackground();
	uploadgreencar();
}

function uploadBackground() {
	// Define function to upload background image
	background_imgTag = new Image();
	background_imgTag.onload = function () {
		ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
	};
	background_imgTag.src = background_image;
}

function uploadgreencar() {
	// Define function to upload car image
	greencar_imgTag = new Image();
	greencar_imgTag.onload = function () {
		ctx.drawImage(greencar_imgTag, car_x, car_y, car_width, car_height);
	};
	greencar_imgTag.src = greencar_image;
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}
}

function up() {
	// Define function to move the car upward
	if (car_y >= 0) {
		car_y -= 10;
		uploadBackground();
		uploadgreencar();
	}
}

function down() {
	// Define function to move the car downward
	if (car_y <= canvas.height - car_height) {
		car_y += 10;
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	// Define function to move the car to the left side
	if (car_x >= 0) {
		car_x -= 10;
		uploadBackground();
		uploadgreencar();
	}
}

function right() {
	// Define function to move the car to the right side
	if (car_x <= canvas.width - car_width) {
		car_x += 10;
		uploadBackground();
		uploadgreencar();
	}
}

// Add the add() function call to upload images initially
add();
