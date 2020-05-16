const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var something;

function setup(){
    var canvas = createCanvas(400,415);
    engine = Engine.create();
    world = engine.world;
    circle = new Ball(70,343,90); 
    bullet = new Ball2(115,325,1);
    box1 = new Box(70,400,120,40);
    box2 = new Box(70,381,120,40);
    something = new Box(115,325,80,20);
    console.log(bullet);
    
    ground = new Ground(200,height,400,20)
    slingShot = new SlingShot(bullet.body,{x:115,y:325});

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    circle.display();
   // bullet.display();
    something.display();
    slingShot.display();
    keyPressed();
}

function keyPressed(){
    if(keyCode===32){
       // something.body.angle = something.body.angle - 0.03;
       // Matter.Body.setPosition(bullet.body,something.body);
bullet.display();
bullet.radius = 20;

               
      }
      
}

function keyReleased(){
   slingShot.fly();
   
}
