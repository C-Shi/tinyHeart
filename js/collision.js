// this file is responsible for detecting the collision between fish and fruit
function momFruitCollision() {
  if (data.gameOver) return true;
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
        data.fruitNum += 1;
        mom.momBodyCount++;
        if(mom.momBodyCount > 7) mom.momBodyCount = 7;
        if(fruit.fruitType[i] === 'blue') {
          data.double = 2;
        }
        // wave animation
        wave.born(fruit.x[i], fruit.y[i]);
      }
    }
  }
}

function momBabyCollision(){
  if (data.gameOver) return;
  var l = calLength2(mom.x, mom.y, baby.x, baby.y);
  //
  if (l < 900 && data.fruitNum > 0) {
    baby.babyBodyCount = 0;
    mom.momBodyCount = 0;
    data.addScore();
    halo.born(baby.x, baby.y)
  }
}