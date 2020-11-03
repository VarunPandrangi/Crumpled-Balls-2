const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustBin, dustBin1, dustBin2, dustBin3;

function preload()
{

}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1800,20);

	paper = new Paper(150, 50, 70);

	dustBin2 = new dustBinClass2(1275, 683, 200, 20);
	dustBin1 = new dustBinClass1(1170, 642, 20, 100);
	dustBin3 = new dustBinClass3(1350, 642, 20, 100);
	dustBin = new dustBinClass(1275, 525);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  dustBin2.display();
  dustBin1.display();
  dustBin3.display();
  dustBin.display();
  ground.display();
  paper.display();
  

  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:1150, y: -1200});
	}

	if(keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:-1000, y: -1000});
	}
}
