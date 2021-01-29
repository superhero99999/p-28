
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ball1,ball2,ball3,ball4,ball5,stand;
var ground,stone,leftside,rightside,bottemside,sling;
var boy 
function preload()
{
	boy= loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground=new Ground(400,700,800,100)
stone=new Ball(100,550,50)
leftside = new Bin(600,638,150,20);
rightside = new Bin(523,605,20,90);
bottemside= new Bin(673,605,20,90);
sling=new SlingShot(stone.body,{x:200,y:550})

	//Create the Bodies Here.

mango1=new Mango(550,400,50)
mango2=new Mango(490,450,50)
mango3=new Mango(620,480,50)
mango4=new Mango(650,450,50)
mango5=new Mango(600,450,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
	image(boy,170,440,200,300)
 ground.display();
 
 leftside.display();
 rightside.display();
 bottemside.display(); 
 image(leftside.image,600,500,400,300)
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 
 stone.display();
 sling.display();
 
 detectcolision(stone,mango1)
 detectcolision(stone,mango2)
 detectcolision(stone,mango3)
 detectcolision(stone,mango4)
 detectcolision(stone,mango5)

drawSprites();
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:550})
		sling.attach(stone.body)
	}
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function detectcolision(stonel,mangol){
	var stoneposition=stonel.body.position;
	var mangoposition=mangol.body.position
	var distance=dist(stoneposition.x,stoneposition.y,mangoposition.x,mangoposition.y)
	if( distance<=mangol.r+stonel.r){
	Matter.Body.setStatic(mangol.body,false)
	}
}
function mouseReleased(){
	sling.fly()
}
