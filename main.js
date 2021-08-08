var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_width = 100; 
var rover_height = 90;
var background_image = "concrete-road.jpg"
var car_image = "car2.png";
var car_x = 10;
var car_y = 10;

function add() {
     backgroundimage_tag = new Image();
    backgroundimage_tag.onload = uploadbackground;
    backgroundimage_tag.src = background_image;
     carimage_tag = new Image();
    carimage_tag.onload = uploadcar;
    carimage_tag.src = car_image;
}
function uploadbackground() {
    ctx.drawImage(backgroundimage_tag,0,0,800,600);
}
function uploadrover() {
    ctx.drawImage(carimage_tag,car_x,car_y,car_width,car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
if (keypressed == '37')
{
    left();
}
if (keypressed == '38')
{
    up();
}
if (keypressed == '39')
{
    right();
}
if (keypressed == '40')
{
    down();
}

}
function left() {
    if(rover_x >= 0) {
        rover_x = rover_x - 10;
    uploadbackground();
    uploadrover();
    }
    
}
function right() {
    if(rover_x <= 700) {
        rover_x = rover_x + 10;
        uploadbackground();
        uploadrover();
    }
}
function up() {
   if(rover_y >= 0) {
    rover_y = rover_y - 10;
    uploadbackground();
    uploadrover();
   }
}
function down() {
   if(rover_y <= 500) {
    rover_y = rover_y + 10;
    uploadbackground();
    uploadrover();
   }
}

