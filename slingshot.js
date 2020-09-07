class Slingshot{
    constructor(ball,string){
        var options = {
            bodyA: ball,
            pointB: string,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = string
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    fly(){
        this.slingshot.bodyA=null
    } 
    attach(body){
        this.slingshot.bodyA=body
    }
    
    display(){
       
        if(this.slingshot.bodyA){
            var posA = this.slingshot.bodyA.position;
            var posB = this.pointB;
            strokeWeight(4);
           // stroke(48,22,8)
           line(posA.x,posA.y,posB.x,posB.y)
        }
    
    }
  
}