var fruitObj = function() {
  this.alive = [];
  this.x = [];
  this.y = [];
  // this.l is responsible for controlling the fruit change variable
  this.l = [];
  // spd is the random controller for growing and floating speed for each fruit;
  this.spd = []
  this.orange = new Image();
  this.blue = new Image();
}

fruitObj.prototype.num = 30;
// initialize all instance of fruit to false
fruitObj.prototype.init = function() {
  for (var i = 0; i < this.num; i++) {
    // for each fruit, set init point
    this.alive[i] = true;
    this.x[i] = 0;
    this.y[i] = 0;
    // when init fruit class, will create each individual fruit
    this.l[i] = 0
    // initialize a random speed for each fruit
    this.spd[i] = Math.random() * 0.01 + 0.01
    this.born(i)
  }
  this.orange.src = 'src/fruit.png';
  this.blue.src = 'src/blue.png';
}
//
fruitObj.prototype.draw = function() {
  for (var i = 0; i < this.num; i++) {
    //draw
    //find ane, grow, fly

    // for each load, use random speed to control each fruit
    if (this.l[i] <= 14) {
      this.l[i] += this.spd[i] * deltaTime;
    } else {
      this.y[i] -= this.spd[i] * deltaTime;
    }

    // locate image position
    // drawImage take 5 argument, pic, x, y, width, height
    ctx2.drawImage(this.orange, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i])
  }
}

fruitObj.prototype.born = function(i) {
  // assign random ane for fruit to born at
  var aneId = Math.floor(Math.random() * ane.num);
  this.x[i] = ane.x[aneId];
  this.y[i] = canHeight - ane.len[aneId]
  this.l[i] = 0
}

