
var sea, seaImg, shipImage1, ship;

function preload() {
  seaImg = loadImage("sea.png");

  shipImage1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup() {
  createCanvas(400, 400);

  // Creamos el fondo
  sea = createSprite(200, 180);
  sea.addImage("sea", seaImg);
  sea.scale = 0.4;
  sea.x = sea.width / 5;
  sea.velocityX = -4;

  // Creamos el barco
  ship = createSprite(150, 200);
  ship.addAnimation("floating", shipImage1);
  ship.scale = 0.2;

}

function draw() {
  background("blue");

  //para que no se acabe el fondo
  if (sea.x < 0) {
    sea.x = sea.width / 5;
  }

  drawSprites();
}