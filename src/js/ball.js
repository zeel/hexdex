Ball = function () {
	var xDirection = Math.floor(Math.random()*2) == 1 ? 1 : -1,
		yDirection = Math.floor(Math.random()*2) == 1 ? 1 : -1;

	this.dx = Math.random() * xDirection;
	this.dy = Math.random() * yDirection;
	this.radius = 10;
};