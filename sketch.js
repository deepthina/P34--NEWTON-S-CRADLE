const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;

var canvas;

var pendulum1, pendulum2,pendulum3,pendulum4, pendulum5;
var sling1, sling2,sling3,sling4,sling5;


function preload() {
  
}

function setup() {
  canvas= createCanvas(1000,1000);

  engine = Engine.create();
  world = engine.world;

  var canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio=pixelDensity();

  var options={
    mouse:canvasmouse
  }

  mConstraint = MouseConstraint.create(engine, options);

  World.add(world,mConstraint);
  // create sprites here

  pendulum1 = new Pendulum(200, 250, "red");
  pendulum2 = new Pendulum(260, 250, "green");
  pendulum3 = new Pendulum(320, 250, "blue");
  pendulum4 = new Pendulum(380, 250, "yellow");
  pendulum5 = new Pendulum(440, 250, "pink");


  sling1 = new Sling(pendulum1.body, {x:200, y:250});
  sling2 = new Sling(pendulum2.body, {x:260, y:250});
  sling3 = new Sling(pendulum3.body, {x:320, y:250});
  sling4 = new Sling(pendulum4.body, {x:380, y:250});
  sling5 = new Sling(pendulum5.body, {x:440, y:250});



}

function draw() {
  background("black");

  Engine.update(engine);


  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();



  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

 

}


function mouseDragged(){

  Matter.Body.setPosition(pendulum1.body, {x:mouseX, y:mouseY});
}
