"use strict";

import context from "../../../scripts/context.js";
import * as Utils from "../../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let r = 50;

drawCircles();

function drawCircles() {
    context.fillStyle = 'lightblue';
    for(let j = 0; j < height; j++) {
        for(let i = 0; i < width; i++) {
            console.log(j % 2);
            Utils.fillCircle(0 + (r * 2) * i, 0 + (r * 2) * j, r);
        }
    }
    
}