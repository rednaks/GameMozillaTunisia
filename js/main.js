window.addEventListener('load',Main,false);
//we should wait until the page loaded 
function Main(){
	var canvas = document.getElementById("canvasId");
	//we get the element canvas from the HTML5 document

	canvas.height = 500; 
	canvas.width = 400;
	//we change the height then the width of the canvas

	var context = canvas.getContext("2d");
	//the context is the object that allow us to draw in the canvas .. we will use 2d not the 3d

	context.strokeStyle = "red";
	//we choose a color

	for(var i = 0; i < 3; i++){
		for(var j = 0; j < 3; j++){
		context.strokeRect(i * 50, j * 50, 50, 50);
		}
	}
	//we draw the grid (9 rectangles)

	var matrix = [];
	for (var i = 0; i < 3; i++){
		matrix[i] = [];
		for(var j = 0; j < 3; j++){
			matrix[i][j] = -1;
		}
	}
	matrix[1][1] = 0;
	//we initialize that all the boxes as hidden except the slogan of Mozilla Tunisia

	var distribution = [];
	for(var i = 0; i < 3; i++){
		distribution[i] = [];
	}
	distribution[0][0] = 1;
	distribution[0][1] = 1;
	distribution[0][2] = 2;
	distribution[1][0] = 2;
	distribution[1][2] = 3;
	distribution[2][0] = 3;
	distribution[2][1] = 4;
	distribution[2][2] = 4;
	var myImage = new Image();
	myImage.src = "img/Slogan.jpg"
	context.drawImage(myImage, 50, 58);
	//we distribute the values of the matrix statically
}
