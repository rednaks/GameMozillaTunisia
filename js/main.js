var canvas = document.getElementById("canvasId");
//we get the element canvas from the HTML5 document

canvas.height = 500; 
canvas.width = 400;
//we change the height then the width of the canvas

var context = canvas.getContext("2d");
//the context is the object that allow us to draw in the canvas .. we will use 2d not the 3d
