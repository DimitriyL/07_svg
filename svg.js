var drawLine = false;
var pic = document.getElementById("pic");
var clearButt = document.getElementById("clear");
var circleR = 10;
var oldX = 0;
var oldY = 0;

var addCircle = function(e){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var l1 = document.createElementNS("http://www.w3.org/2000/svg", "line");

    c1.setAttribute("cx", e.offsetX);
    c1.setAttribute("cy", e.offsetY);
    c1.setAttribute("r", circleR);
    pic.appendChild(c1);

    if(drawLine == true){
	l1.setAttribute("x1", oldX);
	l1.setAttribute("y1", oldY);
	l1.setAttribute("x2", e.offsetX);
	l1.setAttribute("y2", e.offsetY);
	l1.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2");
	pic.appendChild(l1);
    }

    drawLine = true;
    oldX = e.offsetX;
    oldY = e.offsetY;
}

pic.addEventListener("click", addCircle);

var clearFxn = function(e){
    while(pic.childNodes[0] != null){
	pic.removeChild(pic.childNodes[0]);
    }
}

clearButt.addEventListener("click", clearFxn);

