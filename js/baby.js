var babyObj = function() {
  this.x;
  this.y;
  this.angle;
  this.babyBody = new Image();
  this.babyTailArr = [];
  this.babyEyeArr = [];

  this.babyTailTimer = 0;
  this.babyTailCount = 0;
  this.babyEyeTimer = 0;
  this.babyEyeCount = 0;
  // babyEyeInterval determine how long a eye status should proceed
  this.babyEyeInterval = 1000;
}

babyObj.prototype.init = function() {
  this.x = canWidth * 0.5 + 50;
  this.y = canHeight * 0.5 + 50;
  this.angle = 0;

  // initalize babyTailArr for tail animation
  for (var i = 0; i < 8; i++) {
    this.babyTailArr[i] = new Image();
    this.babyTailArr[i].src = 'src/babyTail' + i +'.png';
  }

  this.babyEye.src = 'src/babyEye0.png';
  this.babyBody.src = 'src/babyFade0.png';

  // initalize babyEyeArr for eye animation
  this.babyEyeArr[0] = new Image();
  this.babyEyeArr[1] = new Image();

  this.babyEyeArr[0].src = 'src/babyEye0.png';
  this.babyEyeArr[1].src = 'src/babyEye1.png';
}

babyObj.prototype.draw = function() {
  // draw baby fish following mom

  // the position of fish will always pursuing the current mouse coordinate
  this.x = lerpDistance(mom.x, this.x, 0.95)
  this.y = lerpDistance(mom.y, this.y, 0.95)



  // calcaulate the fish angle and let it point to mouse
  var deltaX = this.x - mom.x;
  var deltaY = this.y - mom.y;
  // beta is the angle value that allow fish to point to mouse
  var beta = Math.atan2(deltaY, deltaX)

  // using lerpAngle function to calcaulate how much angle it could rotate
  this.angle =  lerpAngle(beta, this.angle, 0.6)

  // timer and counter functioning - Tail animation
  this.babyTailTimer += deltaTime;
  if (this.babyTailTimer > 50) {
    this.babyTailCount = (this.babyTailCount + 1) % 8;
    this.babyTailTimer = this.babyTailTimer % 50;
  }

  // Eye animation change babyEyeInterval based on status
  this.babyEyeTimer += deltaTime;
  if (this.babyEyeTimer > this.babyEyeInterval) {
    this.babyEyeCount = (this.babyEyeCount + 1) % 2;
    this.babyEyeInterval = this.babyEyeCount ? 80 : Math.random() * 1500 + 1500;
    this.babyEyeTimer = 0;
  }



  ctx1.save();
  ctx1.translate(this.x, this.y)
  ctx1.rotate(this.angle)


  ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
  ctx1.drawImage(this.babyEyeArr[this.babyEyeCount], -this.babyEyeArr[this.babyEyeCount].width * 0.5, -this.babyEyeArr[this.babyEyeCount].height * 0.5);
  ctx1.drawImage(this.babyTailArr[this.babyTailCount], -this.babyTailArr[this.babyTailCount].width * 0.5 + 23, -this.babyTailArr[this.babyTailCount].height * 0.5);
  ctx1.restore();
}