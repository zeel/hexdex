$(document)
    .ready(function () {

        var canvas = document.getElementById("myCanvas"),
            centerX = canvas.width / 2,
            centerY = canvas.height / 2,
            ctx = canvas.getContext("2d"),
            currentAngle = 0,
            circleRadius = 150,
            Balls = {},
            angleToChange = 2 * Math.PI / 36,
            colorsLength = COLORS.length,
            raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

         //logic to rotate wheel
        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 37:
                    currentAngle -= angleToChange;
                    break;
                case 39:
                    currentAngle += angleToChange;
                    break;
            }

            currentAngle += 2 * Math.PI;
            currentAngle %= 2 * Math.PI;

            
			function repaintCircle() {

			            //Clears
			            ctx.clearRect(0, 0, canvas.width, canvas.height);

			            drawCircle();
			        }
            raf(repaintCircle);
        };


        didBallHitSameColour = function(ball){
            var ballAngleAfterRotation = (ball.angle - currentAngle + 2 * Math.PI) % (2 * Math.PI),
            ballInSegment = Math.floor((3 / Math.PI) * ballAngleAfterRotation);

            console.log(COLORS[ballInSegment] === ball.color);
            return COLORS[ballInSegment] === ball.color;
        }

        drawCircle = function () {
            COLORS.forEach(function (color, iter) {
                ctx.beginPath();
                ctx.arc(centerX, centerY, circleRadius, (2 / colorsLength) * ( iter ) * Math.PI + currentAngle, (2 / colorsLength) * ( iter + 1 ) * Math.PI + currentAngle);
                ctx.strokeStyle = color;
                ctx.lineWidth = 20;
                ctx.stroke();
                ctx.closePath();
                // ctx.clip();
            })
        };

        isBallCollided = function(ball){
        	return Math.sqrt( (ball.x-centerX)*(ball.x-centerX) + (ball.y-centerY)*(ball.y-centerY) ) >= circleRadius;
        }

        onBallCollision = function(ball){
        	if(didBallHitSameColour(ball)){
        		delete Balls[ball.id];
	        	createBall();
        	}
        	ball.destroy();
        	
        }

        createBall = function(){
        	var ball = new Ball(ctx, centerX, centerY, {isBallCollided : isBallCollided, onBallCollision : onBallCollision});
        	Balls[ball.id] = ball;
        }
        
        drawCircle();
        createBall();
       
    });
        
