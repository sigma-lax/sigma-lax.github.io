var over = null; 
var mouseOffset = null;
var src = ""; 
var elem1 = null;
document.onmousemove = mouseMove; 
function mousePoint(x, y){ 

    this.x = x; 
    this.y = y; 

} 

function getMousePosition(event){ 

    event = event ? event : window.event; 
    var x = parseInt(event.clientX); 
    var y = parseInt(event.clientY); 
    mouseOffset = new mousePoint(x, y); 

} 

function mouseOver(img){ 

    over = true; 
    createImage(); 
    src = img;
} 

function mouseOut(){ 

    over = false; 
    elem1.innerHTML = ""; 

} 

function mouseMove(){ 

    if(over){ 
	elem1 = document.getElementById("imgDiv"); 
        	getMousePosition(); 
	elem1.style.position = "absolute"; 
        	elem1.style.left = (mouseOffset.x + 2) + "px"; 
	elem1.style.top = (mouseOffset.y + 2) + "px"; 
    } 

} 

function createImage(){ 

    var elem1 = document.getElementById("imgDiv"); 
    elem1.innerHTML = "<img src='"+src+"'/>"; 

} 
