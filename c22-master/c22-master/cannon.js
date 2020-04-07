class Cannon{
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(100,980,100,20,options);
      this.w = 100; 
      this.h = 20;
      World.add(world, this.body);
      stroke("green");

    }
    display(){
      //var pos=this.body.position;
      //pos.x=mouseX;
      //pos.y=mouseY;
      push();
      //translate(pos.x,pos.y);
      fill("green");
      rect(100,980, 100,10);
      arc(100,975,100,50,180,0);
      rect(150,970,50,10);
      
      pop();
    }
  };