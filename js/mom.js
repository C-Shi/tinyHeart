// this file is responsible for handling big fish
var momObj = function() {
  // define x-y
  this.x;
  this.y;
  this.bigEye = new Image();
  this.bigBody = new Image();
  this.bigTail = new Image();
}

momObj.prototype.init = function() {
  // draw fish
  this.x = canWidth * 0.5;
  this.y = canHeight * 0.5;
  this.bigEye.src = 'src/bigEye0.png'
  this.bigBody.src = 'src/bigSwim0.png'
  this.bigTail.src = 'src/bigTail0.png'
}

momObj.prototype.draw = function() {

  // the position of fish will always pursuing the current mouse coordinate
  this.x = lerpDistance(mx, this.x, 0.9)
  this.y = lerpDistance(my, this.y, 0.9)

  //
  ctx1.save();
  ctx1.translate(this.x, this.y)


  ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);
  ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
  ctx1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5)

  ctx1.restore()
}