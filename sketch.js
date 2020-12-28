var helicopterIMG, helicopterSprite, packageSprite,packageIMG,red,red1,red2,boxY,boxposition;
var packageBody,ground,redbody,redbase,redbody2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	 
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
   
	 boxposition = width/2 -100;
	boxY = 610;
	red = createSprite(boxposition,boxY,20,100);
	red.shapeColor = "red";
	redbody = Bodies.rectangle(boxposition + 20 , boxY,20,100,{isStatic:true} );
	
	World.add(world,redbody);

	red1 = createSprite(boxposition + 100 ,boxY + 40,200,20);
	red1.shapeColor = "red";
	redbase = Bodies.rectangle(boxposition + 100 , boxY + 45 - 20,200,20,{isStatic:true} );
	World.add(world,redbase);
	red2 = createSprite(boxposition + 200 ,boxY,20,100);
	red2.shapeColor = "red";
	redbody2 = Bodies.rectangle(boxposition + 200 -20 , boxY,20,100,{isStatic:true} );
	World.add(world,redbody2);
	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  keyPressed(); 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.setStatic(packageBody,false);
    
  }
}



