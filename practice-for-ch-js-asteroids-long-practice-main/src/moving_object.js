class MovingObject{
    constructor(pos,vel, radius, color){
        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
}
} ;
function draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
}









export default MovingObject;