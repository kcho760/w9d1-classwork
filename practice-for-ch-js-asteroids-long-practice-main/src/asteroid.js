import * as Util from "./util.js";
import MovingObject from "./moving_object.js";
class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "#0077C2"

    constructor(options) {
        super({
        pos: options.pos,
        radius: Asteroid.RADIUS,
        color: Asteroid.COLOR,
        vel: Util.randomVec(10)
        })
    }
}

export default Asteroid;