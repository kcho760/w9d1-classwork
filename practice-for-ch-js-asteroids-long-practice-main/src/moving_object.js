class MovingObject{
    constructor(options){
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;

    }

    draw(ctx) {
    console.log("meow") 
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }

} ;

export default MovingObject;