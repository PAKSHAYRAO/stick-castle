function setup() {
  createCanvas(800,1500);
  createSprite(200, 400, 2000, 100);
  createSprite(200, 300, 50, 100);
 createSprite(100,300,50,100);
 createSprite(400, 300, 50, 100);
 createSprite(500,300,50,100);
 createSprite(600, 300, 50, 100);
 createSprite(700,300,50,100);
 createSprite(200, 300, 50, 100);
 createSprite(300,300,50,100);
 createSprite(200, 400, 2000, 200);
 createSprite(200, 600, 2000, 100);
}

function draw() {
  background(0,0,0);  
  drawSprites();
}