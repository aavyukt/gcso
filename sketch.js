var car1,wall1;
var speed,width;



function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90)
  width=random(400,1500)
  
  car1=createSprite(50,200,50,50);
  wall1=createSprite(1500,200,60,height/2)

}


function draw() {
  background(255,255,255);  
  car1.velocityX=speed; 
  if(wall1.x-car1.x < (car1.width=wall1.width)/2)
  {
   car1.velocityX=0;
   var deformation=0.5 * width * speed* speed/22509;
   if(deformation>180){
     car1.shapeColor=color(225,0,0);
   }
   
   if(deformation<180 && deformation>100 ){
    car1.shapeColor=color(230,230,0);
   }
   if(deformation<180 ){
    car1.shapeColor=color(0,255,0);
   }
   
  }
  
 drawSprites();
}