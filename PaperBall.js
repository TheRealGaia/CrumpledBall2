class PaperBall {
    constructor(x, y) {
      
        var options={
	    isStatic : false,
	    restitution : 0.3,
	    friction : 0.5,
	    density : 1.2,
}
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 20;
      this.image = loadImage("PaperBall.jpg");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image, 0, 0, this.radius*2, this.radius*2);
      pop();
    }
  }