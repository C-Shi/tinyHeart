// this file is responsible for detecting the collision between fish and fruit
function momFruitCollision() {
  // iterate over all fruit and check
  // 1. if this fruit is alive
  // 2. if the distance is small enough
  for (var i = 0; i < fruit.num; i++) {
    if(fruit.alive[i]) {
      var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
      if (l < 900) {
        // fruit be eaten
        // do not call fruit.alive[i] = false here, use OOP approach, encapsulate dead method
        fruit.dead(i);
      }
    }
  }
}

function momBabyCollision(){
  var l = calLength2(mom.x, mom.y, baby.x, baby.y);
  if (l < 900) {
    baby.babyBodyCount = 0;
  }
}