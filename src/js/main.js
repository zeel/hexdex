$( document ).ready( function () {
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            currentAngle -= angleToChange;
            break;
        case 39:
            currentAngle += angleToChange;
            break;
    }
    currentAngle %= 2 * Math.PI;
    raf(repaintCircle);
};
  var canvas = document.getElementById("myCanvas"),
  ctx = canvas.getContext("2d"),colors = ['#F44336', '#9C27B0', '#FF5722', '#3F51B5', '#FFEB3B', '#4CAF50'],
  currentAngle = 0,angleToChange = 2*Math.PI/36,
    raf = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame,
        drawCircle = function(){
    colors.forEach(function( color, iter ){
      ctx.beginPath();
      ctx.arc(175, 200, 150,  0.34 * (iter)* Math.PI + currentAngle, 0.34 * (iter + 1)* Math.PI + currentAngle);
      ctx.strokeStyle=color;
      ctx.lineWidth=20;
      ctx.stroke();
      ctx.closePath();
    })
  };

function repaintCircle(){

//Clears
ctx.clearRect(0,0,canvas.width,canvas.height);

drawCircle();
}

  drawCircle();
} );
