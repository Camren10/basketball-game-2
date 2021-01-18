class Ball {
    constructor (x,y) {
        var options={
            restitution:0.8,
            density:1.2
        }
        this.body=Bodies.circle(x,y,40,options);
        World.add(world,this.body);

        this.image=loadImage("images/basketball.png");
    }
    display() {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,90,90);
        pop();
    }
}