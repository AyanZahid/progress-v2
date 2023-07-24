const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall
var bg
var bin

function preload()
{
	bg = loadImage("assets/classroom.jpeg")
  bin = loadImage("assets/bin.png")
  paperBall = loadImage("assets/paperBall.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,680,3200,20)
leftWall = new Ground(900,620,20,100)
rightWall = new Ground(750,620,20,100)
Wall = new Ground(750,620,20,100)
   var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
   }
   ball = Bodies.circle(200,200,20,ball_options)
   World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg)
  ground.display()  
  //leftWall.display()
  //rightWall.display()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  imageMode(CENTER);
  image(bin, 740, 500, 170, 170)
  textSize(25)
  text(mouseX, 100, 100)
  text(mouseY, 100, 300)
  ball(paperBall)
  image(paperBall, ball.position.x)
  image(paperBall, ball.position.y)
}


function keyPressed() {
  if(keyCode === RIGHT_ARROW){
	Matter.Body.applyForce(ball,ball.position,{
		x:55,y:-55
	})
  }
  }









