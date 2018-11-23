var aneObj = function() {
  this.x = [];
  this.len = [];

}

aneObj.prototype.num = 50;
aneObj.prototype.init = function() {
  for (var i = 0; i < this.num; i++) {
    this.x[i] = i * 17 + Math.random() * 20;
    this.len[i] = 200 + Math.random() * 50;
  }
}

aneObj.prototype.draw = function() {
  ctx2.save();
  ctx2.globalAlpha = .7
    // set line style
  ctx2.lineWidth = 20;
  ctx2.lineCap = 'round'
  ctx2.strokeStyle = 'purple';
  // using canvas to draw ane
  for (var i = 0; i < this.num; i++) {
    console.log(this.x[i], canHeight - this.len[i])
    // init pen
    ctx2.beginPath();
    // set init point
    ctx2.moveTo(this.x[i], canHeight);
    // set end point
    ctx2.lineTo(this.x[i], canHeight - this.len[i]);

    ctx2.stroke()
  }
  ctx2.restore();
}
