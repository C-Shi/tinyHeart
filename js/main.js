document.body.onload = game;

var can1, can2;
var ctx1, ctx2;
var bgPic = new Image();
var canWidth;
var canHeight;


function game() {
  init();
  gameLoop()
}

function init() {
  can1 = document.getElementById('canvas1'); // first layer: dust, UI, circle
  ctx1 = can1.getContext('2d')
  can2 = document.getElementById('canvas2'); // background layer: ane, fruit
  ctx2 = can2.getContext('2d')

  bgPic.src = 'src/background.jpg'
  console.log(bgPic)
  canWidth = can1.width;
  canHeight = can1.height;
}

function gameLoop() {
  window.requestAnimFrame(gameLoop)
  drawBackgroud()
}