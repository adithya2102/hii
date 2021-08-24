var frect, mrect;

function setup() {
  createCanvas(1200,800);
  frect= createSprite(450, 200, 50, 80);
  mrect= createSprite(400,200,80,30);
  frect.shapeColor="green";
  mrect.shapeColor="green";
}

/*frect = 50/2 = 25
mrect = 80/2 = 40
40+25 = 65
frect.height= 80/2=40
mrect.height=30/2=15
15+40=55
*/
function draw() {
  background(0);  
  console.log(frect.x-mrect.x);
  if(mrect.x-frect.x<mrect.width/2+frect.width/2 && 
    frect.x-mrect.x<mrect.width/2 + frect.width/2 &&
    mrect.y-frect.y<mrect.height/2+frect.height/2 &&
    frect.y-mrect.y<frect.height/2+mrect.height/2){
    frect.shapeColor="red";
    mrect.shapeColor="red";
  }
  else{
    frect.shapeColor="green";
    mrect.shapeColor="green";
  }
  mrect.x= World.mouseX;
  mrect.y= World.mouseY;
  drawSprites();
}