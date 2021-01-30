const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var engine,world,ground,ball
function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(400,400);
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,100,400,50,ball_options)
  World.add(world,ground)
  var ball_options={
    restitution:0.9
  }
  ball=Bodies.circle(200,350,40,ground_options)
  World.add(world,ball)
}

function draw() {
  background(0,0,0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,40,40)
}
