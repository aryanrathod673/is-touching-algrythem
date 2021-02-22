var mr,fr;


function setup() {
  createCanvas(800,400);

  fr = createSprite(600,200,80,50);
  fr.shapeColor = 'yellow';

  mr = createSprite(400, 200, 50, 80);
  mr.shapeColor = 'yellow';


}

function draw() {
  background(0);  

mr.x = World.mouseX;

mr.y = World.mouseY;

if(mr.x-fr.x < mr.width/2+fr.width/2 && 
  fr.x-mr.x < mr.width/2+fr.width/2 &&
  mr.y-fr.y < mr.width/2+fr.width/2 &&
  fr.y-mr.y < mr.width/2+fr.width/2){
  mr.shapeColor='blue';
  fr.shapeColor='blue';
}
 else{
  mr.shapeColor='yellow';
  fr.shapeColor='yellow';
 }


  drawSprites();
}