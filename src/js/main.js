$(document)
    .ready(function () {

        var canvas = document.getElementById("myCanvas"),
            centerX = canvas.width / 2,
            centerY = canvas.height / 2,
            ctx = canvas.getContext("2d"),
            currentAngle = 0,
            angleToChange = 2 * Math.PI / 36,
            colorsLength = COLORS.length,
            raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

//draws circle;


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

            var ballAngle = Math.atan2(-ball.dy, -ball.dx) + Math.PI;
            var ballAngleAfterRotation = ballAngle - currentAngle;

            ballAngleAfterRotation += 2 * Math.PI;
            ballAngleAfterRotation %= 2 * Math.PI;

            var ballInSegment = Math.floor((3 / Math.PI) * ballAngleAfterRotation);

            console.log(COLORS[ballInSegment] === ball.color);

            raf(repaintCircle);
        };


        drawCircle = function () {
            COLORS.forEach(function (color, iter) {
                ctx.beginPath();
                ctx.arc(centerX, centerY, 150, (2 / colorsLength) * ( iter ) * Math.PI + currentAngle, (2 / colorsLength) * ( iter + 1 ) *
                    Math.PI + currentAngle);
                ctx.strokeStyle = color;
                ctx.lineWidth = 20;
                ctx.stroke();
                ctx.closePath();
                // ctx.clip();
            })
        };

        function repaintCircle() {

            //Clears
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawCircle();
        }

        drawCircle();

        var x = centerX, y = centerY;

        var ball = new Ball();

        function drawBall() {
            // drawing code
            // ctx.clip();
            repaintCircle();
            ctx.beginPath();
            ctx.arc(x, y, ball.radius, 0, Math.PI * 2);
            ctx.fillStyle = ball.color;
            ctx.fill();
            ctx.closePath();
            // ctx.clip();
            x += ball.dx;
            y += ball.dy;

        }


        setInterval(drawBall, 10);
    });
        
