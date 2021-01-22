const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine,world;
var backgroundImg,basketball;
var invisibleGround;
var sling;
var gamestate="onSling";
var backboard,rim1,rim2,rim3,rim4Sprite;
var score=0;
function preload() {
  backgroundImg=loadImage("images/background.jpg");
  hoopImage=loadImage("images/hoop.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine=Engine.create();
  world=engine.world;
  basketball = new Ball(200,height/2);

  invisibleGround = new Ground(width/2,height-50,width,10);
  //backboard = new Hoop(width-800,200);
  //rim1 = new Hoop(width-800,360,800,600);
  //rim2 = new Hoop(width-230,275,55,15);
  //rim3 = new Hoop(width-400,360,15,150);
  A = createSprite(width-250,400,10,200);
  sling = new Sling(basketball.body,{x: 200,y: height/2+100});
}

function draw() {
  background(backgroundImg); 
  textSize(18); 
  text(mouseX+","+mouseY,mouseX,mouseY);
  Engine.update(engine);
  image(hoopImage,width-800,200);
  basketball.display();
  sling.display();

  text("points: "+score,width-150,100);

  //backboard.display();
  //invisibleGround.display();
  //rim1.display();
  //rim2.display();
  //rim3.display();

  if(basketball.body.position.x>1650 && basketball.body.position.x<1750 && 
    basketball.body.position.y>400 && basketball.body.position.y<470) {
    score=score+1;
  }

  drawSprites();
}

function mouseDragged() {
  if(gamestate==="onSling") {
    Matter.Body.setPosition(basketball.body,{x: mouseX, y: mouseY});
  }
}

function mouseReleased() {
  gamestate="launched";
  sling.fly();
}