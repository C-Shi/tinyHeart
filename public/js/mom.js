// this file is responsible for handling big fish
var momObj = function() {
  // define x-y
  this.x;
  this.y;
  this.angle;
  this.bigBody = new Image();

  this.momTailArr = [];
  this.momTailTimer = 0;
  this.momTailCount = 0;

  this.momEyeArr = [];
  this.momEyeTimer = 0;
  this.momEyeCount = 0;
  this.momEyeInterval = 1000;

  this.momBodyOraArr = [];
  this.momBodyBluArr = [];
  this.momBodyCount = 0;
}

momObj.prototype.init = function() {
  // draw fish
  this.x = canWidth * 0.5;
  this.y = canHeight * 0.5;
  this.angle = 0;

  // initalized momTail
  for (var i = 0; i < 8; i++) {
    this.momTailArr[i] = new Image();
    this.momTailArr[i].src = "src/bigTail" + i + ".png";
  }

  // initalized momEye
  this.momEyeArr[0] = new Image();
  this.momEyeArr[1] = new Image();
  this.momEyeArr[0].src = 'src/bigEye0.png';
  this.momEyeArr[1].src = 'src/bigEye1.png';

  // initalized momBody
  for (var i = 0; i < 8; i++) {
    this.momBodyOraArr[i] = new Image();
    this.momBodyBluArr[i] = new Image();
    this.momBodyOraArr[i].src = 'src/bigSwim' + i + '.png';
    this.momBodyBluArr[i].src = 'src/bigSwimBlue' + i + '.png';
  }

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


  // Tail
  this.momTailTimer += deltaTime;
  if (this.momTailTimer > 50) {
    this.momTailCount = (this.momTailCount + 1) % 8;
    this.momTailTimer = 0;
  }

  // Eye
  this.momEyeTimer += deltaTime;
  if (this.momEyeTimer > this.momEyeInterval) {
    this.momEyeCount = (this.momEyeCount + 1) % 2;
    this.momEyeInterval = this.momEyeCount ? 80 : Math.random() * 1500 + 1500;
    this.momEyeTimer = 0;
  }


  // start drawing fish
  ctx1.save();
  ctx1.translate(this.x, this.y)

  ctx1.rotate(this.angle)

  if (data.double === 1){
    ctx1.drawImage(this.momBodyOraArr[this.momBodyCount], -this.momBodyOraArr[this.momBodyCount].width * 0.5, -this.momBodyOraArr[this.momBodyCount].height * 0.5);
  } else {
    ctx1.drawImage(this.momBodyBluArr[this.momBodyCount], -this.momBodyBluArr[this.momBodyCount].width * 0.5, -this.momBodyBluArr[this.momBodyCount].height * 0.5);
  }

  ctx1.drawImage(this.momEyeArr[this.momEyeCount], -this.momEyeArr[this.momEyeCount].width * 0.5, -this.momEyeArr[this.momEyeCount].height * 0.5);

  ctx1.drawImage(this.momTailArr[this.momTailCount], -this.momTailArr[this.momTailCount].width * 0.5 + 30, -this.momTailArr[this.momTailCount].height * 0.5)

  ctx1.restore()
}