//Holes.js is supposed to handle the traps(holes) for the player to fall in

import { body, canvas, ctx, canvasWidth, canvasHeight } from "./connect.js";

class hole{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.backgroundColor = "gray";
        this.borderColor = "black";
        this.lineWidth = 5
        this.radius = 14;
    };
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.backgroundColor;
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = this.lineWidth;
        ctx.fill()
        ctx.stroke();
    }
};

export function CreateTraps() {
    const HowMany = 16
    let arr = []
    for (let i = 0; i < HowMany; i++){
        const trapElement = new hole(Math.random() * canvasWidth, Math.random() * canvasHeight) 
        arr.push(trapElement);
    }
    return arr
}

export function DisplayTraps(arr) {
    arr.forEach(element => {
        element.draw();
    });
}