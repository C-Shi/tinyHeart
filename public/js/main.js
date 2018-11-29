document.body.onload = control;

var can1, can2;
var ctx1, ctx2;
var bgPic = new Image();
var lastTime;
var deltaTime;
var canWidth;
var canHeight;
var mx, my;
var ane = new aneObj();
var fruit = new fruitObj();
var mom = new momObj();
var baby = new babyObj();
var data = new dataObj();
var wave = new waveObj();
var halo = new haloObj();
var dust = new dustObj();

function control() {
  var start = document.getElementById('start');
  start.addEventListener('click', function() {
    var control = document.getElementsByClassName('control')[0]
    document.body.removeChild(control)
    console.log('hit')
    game()
  })
}

function game() {
  init();
  gameLoop()
}

function init() {
  can1 = document.getElementById('canvas1'); // first layer: dust, UI, circle
  ctx1 = can1.getContext('2d')
  can2 = document.getElementById('canvas2'); // background layer: ane, fruit
  ctx2 = can2.getContext('2d')

  can1.addEventListener('mousemove', onMouseMove)

  bgPic.src = 'src/background.jpg'
  canWidth = can2.width;
  canHeight = can2.height;
  lastTime = Date.now()

  ane.init()
  fruit.init()
  mom.init()
  baby.init()
  wave.init()
  halo.init()
  dust.init();

  // init mouse position
  mx = canWidth * 0.5;
  my = canHeight * 0.5

}

function gameLoop() {
  window.requestAnimFrame(gameLoop)
  var now = Date.now();
  deltaTime = now - lastTime;
  if (deltaTime > 40) deltaTime = 40;
  lastTime = Date.now()
  drawBackgroud();
  ane.draw();
  fruitMonitor();
  fruit.draw();

  ctx1.clearRect(0, 0, canWidth, canHeight)
  mom.draw();
  baby.draw();

  momFruitCollision();
  momBabyCollision();

  data.draw()
  wave.draw()
  halo.draw()
  dust.draw();
}


function onMouseMove(e) {
  if (data.gameOver) return;

  if (e.offSetX || e.layerX) {
    mx = e.offSetX || e.layerX;
    my = e.offSetY || e.layerY;
  }
}