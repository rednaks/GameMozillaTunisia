var canvas = document.getElementById("canvasId");
//we get the element canvas from the HTML5 document

canvas.height = 500; 
canvas.width = 400;
//we change the height then the width of the canvas

var context = canvas.getContext("2d");
//the context is the object that allow us to draw in the canvas .. we will use 2d not the 3d

var maxCells = 3;
//the size of the grid

context.strokeStyle = "red";
//choose a color

for(var i = 0; i < maxCells; i++)
	for(var j = 0; j < maxCells; j++)
		context.strokeRect(i * 50, j * 50, 50, 50);
//we draw the grid (9 rectangles)
