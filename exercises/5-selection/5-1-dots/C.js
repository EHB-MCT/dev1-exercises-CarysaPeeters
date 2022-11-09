"use strict";

import context from "../../../scripts/context.js";
import * as Utils from "../../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillRect(0,0,width,height);
context.fillStyle = "black";

drawRandomCircles ();
function drawRandomCircles () {
    for (let i = 0; i<100000; i++) {
        let x = Math.random()*width;
        let y = Math.random()*height;
        if (x < width/4) {
            context.fillStyle = "red";
        } else if (x > 3*width/4) {
            context.fillStyle = "yellow";
        } else {
            context.fillStyle = "white";
        }
        Utils.fillCircle (x,y,2);
    }
}