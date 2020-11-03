class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          'restitution':0.3,
          'friction':0,
          'radius' :70,
          'density':1.2
      }
     // this.width = width;
      this.height = height;
      this.radius = radius;
      this.image = loadImage("Sprites/paperImage.png");
      this.body = Bodies.circle(x, y, radius, options);
      
      World.add(world, this.body);
      
    }
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(255);
      console.log("paper");
     image(this.image, 0, 0, this.radius, this.radius);
   //  circle(100,50,50);
      pop();
    }
  };
  