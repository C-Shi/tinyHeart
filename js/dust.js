var dustObj = function() {
  this.dustPic = [];
  this.x = [];
  this.y = [];
  this.amp = [];
  this.NO = [];
  this.alpha
}

dustObj.prototype.num = 30;
dustObj.prototype.init = function() {
  // initialized picture array
  for (var i = 0; i < 7; i++) {
    this.dustPic[i] = new Image();
    this.dustPic[i].src = "src/dust" + i + '.png';
  }

  for (var i = 0; i < this.num; i++) {
    this.x[i] = Math.random() * canWidth;
    this.y[i] = Math.random() * canHeight;
    this.amp[i] = 20 + Math.random() * 15;
    this.NO[i] = Math.floor(Math.random() * 7);
  }

  this.alpha = 0;
}

dustObj.prototype.draw = function() {
  this.alpha += deltaTime * 0.001;
  var l = Math.sin(this.alpha)
  for (var i = 0; i < this.num; i++ ){
    var no = this.NO[i];
    ctx1.drawImage(this.dustPic[no], this.x[i] + l * this.amp[i], this.y[i])
  }
}