class Block{
    constructor(x, y, width, height) {
        var options = {
          friction:0.4,
          restitution:0.4

          
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       this.image=loadImage("block.png")
        World.add(world, this.body);
        this.visiblity=255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<4.5){
          image(this.image,this.body.position.x,this.body.position.y)
        }
        else{
          World.remove(world,this.body)
          push()
          this.visiblity=this.visiblity-5
          tint(255,this.visiblity);
          image(this.image,this.body.position.x,this.body.position.y)
          pop()
        }
      
      }
}
