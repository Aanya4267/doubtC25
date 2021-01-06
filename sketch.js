
var ground1,dus1,paperball; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	dus1= new dustbin (200,200,800,550);
	
	paperball= new paper(200,300,10,10);
	ground1 = new ground(width/2,650,width,20);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 dus1.display();

 paperball.display();
 ground1.display();
 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:12,y:-20});
	}
}

