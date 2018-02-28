var pic = document.getElementById("pic");
var clearButt = document.getElementById("clear");
var circleX = 500;
var circleY = 400;
var circleR = 50;

var addCircle = function(e){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("x", "120");
    c1.setAttribute("y", "70");
    c1.setAttribute("r", "30");
    pic.appendChild(c1);
}

clearButt.addEventListener("click", addCircle);

/*var clearFxn = function(e){
    ctx.clearRect(0, 0, 500, 500);
}

clearButt.addEventListener("click", clearFxn);*/

