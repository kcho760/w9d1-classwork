import MovingObject from "./moving_object.js"
import Asteroid from "./asteroid.js";

console.log("Webpack is working....")

document.addEventListener("DOMContentLoaded", () => {

    const canvas1 = document.getElementById("game-canvas");
    canvas1.width = 500;
    canvas1.height = 500;
    const ctx = canvas1.getContext("2d");

    const mo = new MovingObject({
    pos: [250, 250],
    vel: [10, 10],
    radius: 100,
    color: "#00FF00"
    });
    const a1 = new Asteroid({
        pos: [100, 100],
    });


    mo.draw(ctx);
    mo.move()
    // mo.move();
    // a1.draw(ctx);
    // a1.move();
}) 

window.MovingObject = MovingObject
//instatntate moving object instance invoke draw  pass in ctx

