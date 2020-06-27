var fixedRect, movingRect;
var f1,m1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  f1=createSprite(200,500,50,50);
  f1.shapeColor = "blue";
  f1.velocityY=-5;

  m1=createSprite(200,100,50,50);
  m1.shapeColor = "blue";
  m1.velocityY=5;




}

function draw() {
  background(0,0,0);  
   /*if(bounceOff(f1,m1)){
    m1.shapeColor = "green";
    f1.shapeColor = "green";
   }else{
    
    m1.shapeColor = "blue";
    f1.shapeColor = "blue";

   }*/
   bounceOff(fixedRect,movingRect);
  drawSprites();
}






