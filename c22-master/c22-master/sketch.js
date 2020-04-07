
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var   ground,cannon,box1,box2,box3,box4,box5,pig1,pig2,log,log1,log3,log4;

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(500,1000,2000,30);
    cannon=new Cannon();
    box1 = new Box(850,750,60,60);
    
    box2=new Box(1050,750,60,60);
    pig1=new Pig(950,750);
    log=new Log(950,650,270,PI/2);
    box3=new Box(850,600,60,60);
    box4=new Box(1050,600,60,60);
    pig2=new Pig(950,600);
    log2=new Log(950,550,270,PI/2);
    box5=new Box(950,500,60,60);
    log3=new Log(885,500,120,PI/7);
    log4=new Log(1020,500,120,-PI/7);
    
    

}


function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    cannon.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    




    
}