$( document )
  .ready( function () {

    var canvas = document.getElementById( "myCanvas" ),
        centerX = canvas.width/2, 
        centerY = canvas.height/2,
        ctx = canvas.getContext( "2d" ),
        currentAngle = 0,
        angleToChange = 2 * Math.PI / 36,
        colors = [ '#F44336', '#9C27B0', '#FF5722', '#3F51B5', '#FFEB3B', '#4CAF50' ],
        raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame,

//draws circle;
        drawCircle = function () {
        colors.forEach( function ( color, iter ) {
          ctx.beginPath();
          ctx.arc( CENTRE_X, CENTRE_Y, 150, 0.34 * ( iter ) * Math.PI + currentAngle, 0.34 * ( iter + 1 ) *
            Math.PI + currentAngle );
          ctx.strokeStyle = color;
          ctx.lineWidth = 20;
          ctx.stroke();
          ctx.closePath();
        } )
      };

      
    document.onkeydown = function ( e ) {
      switch ( e.keyCode ) {
      case 37:
        currentAngle -= angleToChange;
        break;
      case 39:
        currentAngle += angleToChange;
        break;
      }
      currentAngle %= 2 * Math.PI;
      raf( repaintCircle );
    };

      
      drawCircle = function () {
        colors.forEach( function ( color, iter ) {
          ctx.beginPath();
          ctx.arc( centerX, centerY, 150, 0.34 * ( iter ) * Math.PI + currentAngle, 0.34 * ( iter + 1 ) *
            Math.PI + currentAngle );
          ctx.strokeStyle = color;
          ctx.lineWidth = 20;
          ctx.stroke();
          ctx.closePath();
          // ctx.clip();
        } )
      };

    function repaintCircle() {

      //Clears
      ctx.clearRect( 0, 0, canvas.width, canvas.height );

      drawCircle();
    }

    drawCircle();

    var x=CENTRE_X, y=CENTRE_Y, dx= 1, dy=1;

    var ball = new Ball();

    function drawBall() {
      // drawing code
      // ctx.clip();
      repaintCircle();
      ctx.beginPath();
      ctx.arc( x, y, ball.radius, 0, Math.PI * 2 );
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
      // ctx.clip();
      x+=ball.dx;
      y+=ball.dy;
    }
    setInterval( draw, 10 );
  } );
