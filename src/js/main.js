$( document ).ready( function () {
  console.log( 'ready' );

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var colors = ['#F44336', '#9C27B0', '#FF5722', '#3F51B5', '#FFEB3B', '#4CAF50'];

  var drawCircle = function(){
    colors.forEach(function( color, iter ){
      ctx.beginPath();
      ctx.arc(175, 200, 150,  0.34 * (iter)* Math.PI , 0.34 * (iter + 1)* Math.PI);
      ctx.strokeStyle=color;
      ctx.lineWidth=20;
      ctx.stroke();
      ctx.closePath();
    })
  }

  drawCircle();
} );
