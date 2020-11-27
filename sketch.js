
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;

   var options = {
	   isStatic : false,
	   restitution : 0.3,
	   friction : 0.5,
	   density : 1.2

   }

   var o = {
	  isStatic : true 
   }
	//Create the Bodies Here.
	paper = Bodies.circle(300,30,10,options);
    ground = Bodies.rectangle(650,400,900,10,o);

	World.add(world,paper);
	World.add(world,ground);

	//Engine.run(engine);
	
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  

  rectMode(CENTER);
  fill("orange")
  rect(ground.position.x,ground.position.y,1400,20);

  rectMode(CENTER);
  fill("blue")
  rect(800,385,250,10);
  rect(680,370,10,20);
  rect(920,370,10,20);

  
  ellipseMode(RADIUS);
  fill("white");
  ellipse(paper.position.x,paper.position.y,20);


  if(keyCode === 38){
	Matter.Body.applyForce(paper.body,paper.body.position.x,paper.body.position.y,{x:85,y:85});
	}

  drawSprites();
 
}



