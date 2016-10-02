id = 0;
Ball = function (ctx, x, y, callBackObj) {
	id++;
	var xDirection = Math.floor(Math.random()*2) == 1 ? 1 : -1,
		yDirection = Math.floor(Math.random()*2) == 1 ? 1 : -1;

	this.dx = Math.random() * xDirection;
	this.id = id;
	this.dy = Math.random() * yDirection;
	this.color = COLORS[Math.floor(Math.random()*COLORS.length)];
	this.radius = 10;
	this.angle = Math.atan2(-this.dy, -this.dx) + Math.PI;
	this.x = x;
	this.y = y;
	this.timer = setInterval(updateBall.bind(this), 10);
	function updateBall() {
            // drawing code
            // ctx.clip();
            // repaintCircle();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
            // ctx.clip();
            this.x += this.dx;
            this.y += this.dy;
            if(callBackObj.isBallCollided(this)){
            	callBackObj.onBallCollision(this);
            }
        }
    this.destroy = function(){
    	clearTimeout(this.timer)
    }
};