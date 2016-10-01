$( document ).ready( function () {
  console.log( 'ready' );

  var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(150, 150, 50, 0, 0.5 * Math.PI);
ctx.stroke();
ctx.closePath();

} );
