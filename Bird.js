class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    this.trail = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    if(this.body.velocity.x > 3 && this.body.position.x > 250){
      var position = [this.body.position.x,this.body.position.y]
      this.trail.push(position)
    }

   
    for(var cloud = 0; cloud< this.trail.length; cloud++){
      image(this.smokeImage,this.trail[cloud][0],this.trail[cloud][1])
    }


    super.display();
  }
}
