"use strict";
import context from "../../../scripts/context.js";
import * as Utils from "../../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let r = Math.random() * 100;

drawCircles();

function drawCircles() {
    context.fillStyle = Utils.hsla(200, 50, 50, 0.3);
    for(let j = 0; j < height; j++) {
        for(let i = 0; i < width; i++) {
            let r = 20 + Math.random() * 150;
            Utils.fillCircle(0 + (r * 2) * i, 0 + (r * 2) * j, r);
        }
    }
    
}