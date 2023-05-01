import MovingObject from "./moving_object.js"

console.log("Webpack is working....")

document.addEventListener("DOMContentLoaded", () => {

    const canvas1 = document.getElementById("game-canvas");
    canvas1.width = 500;
    canvas1.height = 500;
    const ctx = canvas1.getContext("2d");

    const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 500,
    color: "#00FF00"
    });

    mo.draw(ctx);

}) 

window.MovingObject = MovingObject
//instatntate moving object instance invoke draw  pass in ctx

