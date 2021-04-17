const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box;
var options;
var ground;

function setup(){
  var canvas=createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  options={
    isStatic : false,
    restitution : 1,
    density : 1
  }
  box = Bodies.rectangle(200,200,50,50,options);
  World.add(world,box);
  console.log(box);
 
  options2 = {
isStatic : true
  } 
  ground = Bodies.rectangle(200,350,200,10,options2);
  World.add(world,ground);

}
function draw()
{
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50);
  rect(ground.position.x,ground.position.y,200,10)
}








