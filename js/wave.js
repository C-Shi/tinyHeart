var waveObj = function() {
  this.x = [];
  this.y = [];
  this.alive = [];
  this.r = [];
}

waveObj.prototype.num = 10;
waveObj.prototype.init = function(){
  for (var i = 0; i < this.num; i++){
    this.alive[i] = false;
    this.r[i] = 0;
  }
}

waveObj.prototype.draw = function() {
  ctx1.save();
  ctx1.lineWdith = 2;
  ctx1.strokeBlur = 10;
  for (var i = 0; i < this.num; i++) {
    if (this.alive[i]) {
      this.r[i] += deltaTime * 0.05;

      // give wave an animate radius and opacity
      if (this.r[i] > 50) {
        this.alive[i] = false;
      }
      var alpha = this.r[i] / 50;

      // draw wave
      ctx1.beginPath();
      ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
      ctx1.closePath();
      ctx1.strokeStyle = 'rgba(255, 255, 255,' + alpha + ')'
      ctx1.stroke()
    }
  }
  ctx1.restore();
}

waveObj.prototype.born = function(x, y) {
  for (var i = 0; i < this.num; i++){
    // only find one wave that is not alive, and active it
    if (!this.alive[i]){
      // born
      this.alive[i] = true;
      this.r[i] = 20;
      this.x[i] = x;
      this.y[i] = y;
      return ;
    }
  }
}

