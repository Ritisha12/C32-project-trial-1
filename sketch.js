const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 





var stand  
var ball      
var engine,world
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,
block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,
block21,block22,block23,block24,block25
 var slingshot   
 var score              

function setup() {
  engine=Engine.create()

  world= engine.world
  createCanvas(800,400);
  score=0

stand1 = new Ground(355,350,170,10);
stand2 = new Ground(620,230,135,10);
//bottom level of bigger tower
block1 = new Box(295,325,30,40);
block2 = new Box(325,325,30,40);
block3 = new Box(355,325,30,40);
block4 = new Box(385,325,30,40);
block5 = new Box(415,325,30,40);
//level 4 of bigger tower
block6 = new Box(310,285,30,40);
block7 = new Box(340,285,30,40);
block8 = new Box(370,285,30,40);
block9 = new Box(400,285,30,40);
//level 3 of bigger tower
block10 = new Box(325,245,30,40);
block11 = new Box(355,245,30,40);
block12 = new Box(385,245,30,40);
//level 2 of bigger tower
block13 = new Box(340,205,30,40);
block14 = new Box(370,205,30,40);
//top level of bigger tower
block15 = new Box(355,165,30,40);

// bottom level of smaller tower
block16 = new Box(575,205,30,40);
block17 = new Box(605,205,30,40);
block18 = new Box(635,205,30,40);
block19 = new Box(665,205,30,40);
// level 3 of smaller tower
block20 = new Box(590,165,30,40);
block21 = new Box(620,165,30,40);
block22 = new Box(650,165,30,40);
// level 2 of smaller tower
block23 = new Box(605,125,30,40);
block24 = new Box(635,125,30,40);
//top level of smaller tower
block25 = new Box(620,85,30,40);

ball=new Ball(100,200,15)

slingshot=new Slingshot(ball.body,{x:100,y:200})
}

function draw() {
  Engine.update(engine)
  rectMode(CENTER);
background("lightblue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();                                              
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
stand1.display();
stand2.display();
ball.display()
slingshot.display();
block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();
block21.score();
block22.score();
block23.score();
block24.score();
block25.score();
textSize(20)
fill("black")
text("score:"+score,550,40)
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if (keyCode===32){
      Matter.Body.setPosition(ball.body,{x:100,y:200})
      slingshot.attach(ball.body)
  }
}