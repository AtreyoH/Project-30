class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:20

        }
        this.pointB=pointB
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
        



    }
    display(){  
        if(this.sling.bodyA){
        
        
            var posA=this.sling.bodyA.position
            var posB=this.pointB
            push()
            strokeWeight(1)
            line(posA.x,posA.y,posB.x,posB.y)
            pop()
            }
        }
        fly(){
            this.sling.bodyA=null
        }
        attach(body){
            this.sling.bodyA=body
        }
    }