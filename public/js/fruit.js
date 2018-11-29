var fruitObj = function() {
  this.alive = [];
  this.x = [];
  this.y = [];
  // this.l is responsible for controlling the fruit change variable
  this.l = [];
  // spd is the random controller for growing and floating speed for each fruit;
  this.spd = [];
  this.fruitType = [];
  this.orange = new Image();
  this.blue = new Image();
}

fruitObj.prototype.num = 30;
// initialize all instance of fruit to false
fruitObj.prototype.init = function() {
  for (var i = 0; i < this.num; i++) {
    // for each fruit, set init point
    this.x[i] = 0;
    this.y[i] = 0;
    // when init fruit class, will create each individual fruit
    this.l[i] = 0
    // initialize a random speed for each fruit
    this.spd[i] = Math.random() * 0.17 + 0.03
  }
  this.orange.src = 'src/fruit.png';
  this.blue.src = 'src/blue.png';
}
//
fruitObj.prototype.draw = function() {
  for (var i = 0; i < this.num; i++) {
    //draw
    //find ane, grow, fly

    // check if this fruit is not alive then do not proceed
    if (!this.alive[i]) continue;

    // for each load, use random speed to control each fruit
    if (this.l[i] <= 14) {
      this.l[i] += this.spd[i] * deltaTime;
    } else {
      this.y[i] -= this.spd[i] * deltaTime;
    }

    // locate image position
    // drawImage take 5 argument, pic, x, y, width, height

    ctx2.drawImage(this[this.fruitType[i]], this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i])

    // when fruit fly out from screen then deactive this fruit
    if (this.y[i] < 10) {
      this.alive[i] = false
    }
  }
}

// deactive fruit when being eaten
fruitObj.prototype.dead = function(i) {
  this.alive[i] = false
}

// born method control the initalize of fruit
fruitObj.prototype.born = function(i) {
  // assign random ane for fruit to born at
  var aneId = Math.floor(Math.random() * ane.num);
  this.x[i] = ane.headx[aneId];
  this.y[i] = ane.heady[aneId]
  this.l[i] = 0
  this.alive[i] = true;

  // whether a new born fruit is blue or orange is totally randomly depends on a random num
  this.fruitType[i] = Math.random() < 0.1 ? 'blue' : 'orange'

}

function fruitMonitor() {
  var activeFruit = 0;
  for (var i = 0; i < fruit.num; i++) {
    if (fruit.alive[i]) activeFruit++
  }
  if (activeFruit < 15) {
    sendFruit();
    return ;
  }
}

function sendFruit() {
  // find and call born method on a fruit that is current inactive
  for (var i = 0; i < fruit.num; i++ ){
    if (!fruit.alive[i]) {
      fruit.born(i);
      // we only want to pop up fruit one by one
      return;
    }
  }
}

