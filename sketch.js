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

function preload() {
  backgroundImg=loadImage("images/background.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine=Engine.create();
  world=engine.world;

  basketball = new Ball(200,height/2);

  invisibleGround = new Ground(width/2,height-50,width,10);
  backboard = new Ground(width-200,200,15,150);
  rim1 = new Ground(width-250,360,15,150);
  rim2 = new Ground(width-230,275,55,15);
  rim3 = new Ground(width-400,360,15,150);

  sling = new Sling(basketball.body,{x: 200,y: height/2+100});
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  basketball.display();
  sling.display();

  backboard.display();
  invisibleGround.display();
  rim1.display();
  rim2.display();
  rim3.display();

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