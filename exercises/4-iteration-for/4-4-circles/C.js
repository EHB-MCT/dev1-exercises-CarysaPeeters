"use strict";
import context from "../../../scripts/context.js";
import * as Utils from "../../../scripts/utils.js";

let width = context.canvas.width;
let amount = 20;
let step = width/amount;

drawCircles();

function drawCircles() {
    context.fillStyle = Utils.hsla(200, 50, 50, 0.3);
    for(let j = 0; j < amount; j++) {
        for(let i = 0; i < amount; i++) {
            let r = 20 + j * 10;
            Utils.fillCircle(step * i, step * j, r);
        }
    }
    
}