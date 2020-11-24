class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.key=loadImage ("sprites/sling1.png");
        this.abc=loadImage ("sprites/sling2.png");
        this.ab =loadImage ("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }


    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image (this.key,200,20);
        image (this.abc,170,10);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("#CA975E");
            line(pointA.x-20, pointA.y, pointB.x-8, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
            image (this.ab,pointA.x-15,pointA.y);
        }
    }
    
}