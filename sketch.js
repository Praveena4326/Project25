
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImage
function preload()
{
	bgImage = loadImage("bg.jpg");
}

function setup() {
	createCanvas(1366, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper = new Paper (300,570,40);
	ground = new Ground (700,580,1400,10);
	dustbin1 = new Dustbin(1002,475,10,200);
	dustbin2 = new Dustbin(885,570,225,10);
	dustbin3 = new Dustbin(770,475,10,200);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImage);

  push()
  stroke(700);
  pop()
  fill("rose");
  text("D U S T B I N",845,400);
  pop()
  push()

	push()
  textFont("Algerian");
  fill("white")
  textSize(30)
  text("May you have a year filled with happiness, luck and prosperity!!",200,50);
pop()

textFont("Old English Text MT")
fill("cyan")
textSize(40)
  text("HAPPY NEW YEAR 2021!! to all of you!",350,100)


  
    
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:280,y:-290})
	}
}



