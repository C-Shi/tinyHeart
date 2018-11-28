

var aneObj = function() {
  this.rootx = [];
  this.headx = [];
  this.heady = [];
  this.amp = [];
  // sin value
  this.alpha = 0;

}

aneObj.prototype.num = 50;
aneObj.prototype.init = function() {
  for (var i = 0; i < this.num; i++) {
    this.rootx[i] = i * 17 + Math.random() * 20;
    this.headx[i] = this.rootx[i];
    this.heady[i] = canHeight - 250 + Math.random() * 50;
    this.amp[i] = Math.random() * 50 + 20;
  }
}

aneObj.prototype.draw = function() {
  this.alpha += deltaTime * 0.001;
  // position of end point
  var l = Math.sin(this.alpha)

  ctx2.save();
  ctx2.globalAlpha = .7
    // set line style
  ctx2.lineWidth = 20;
  ctx2.lineCap = 'round'
  ctx2.strokeStyle = 'rgba(204,93,181, 0.4)';
  // using canvas to draw ane
  for (var i = 0; i < this.num; i++) {
    // init pen
    ctx2.beginPath();
    // set init point (start pt, end pt)
    ctx2.moveTo(this.rootx[i], canHeight);
    // set end point
    ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i] + l * this.amp[i], this.heady[i]);

    ctx2.stroke()
  }
  ctx2.restore();
}
