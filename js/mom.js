// this file is responsible for handling big fish
var momObj = function() {
  // define x-y
  this.x;
  this.y;
  this.angle;
  this.bigEye = new Image();
  this.bigBody = new Image();
  this.bigTail = new Image();
}

momObj.prototype.init = function() {
  // draw fish
  this.x = canWidth * 0.5;
  this.y = canHeight * 0.5;
  this.angle = 0;
  this.bigEye.src = 'src/bigEye0.png'
  this.bigBody.src = 'src/bigSwim0.png'
  this.bigTail.src = 'src/bigTail0.png'
}

momObj.prototype.draw = function() {

  // the position of fish will always pursuing the current mouse coordinate
  this.x = lerpDistance(mx, this.x, 0.95)
  this.y = lerpDistance(my, this.y, 0.95)

  // calcaulate the fish angle and let it point to mouse
  var deltaX = this.x - mx;
  var deltaY = this.y - my;
  // beta is the angle value that allow fish to point to mouse
  var beta = Math.atan2(deltaY, deltaX)

  // using lerpAngle function to calcaulate how much angle it could rotate
  this.angle =  lerpAngle(beta, this.angle, 0.6)


  ctx1.save();
  ctx1.translate(this.x, this.y)

  ctx1.rotate(this.angle)

  ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);
  ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
  ctx1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5)

  ctx1.restore()
}