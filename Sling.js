class Sling {
    constructor(body,point) {
        var options={
            bodyA: body,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
        this.point=point;
    }
    display() {
        if(this.sling.bodyA) {
            var pointA=this.sling.bodyA.position;
            push();
            strokeWeight(10);
            line(pointA.x,pointA.y,this.point.x,this.point.y);
            pop();
        }
    }
    fly() {
        this.sling.bodyA=null;
    }
}