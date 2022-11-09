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
        if (x < 2*width/3 && y < 2*height/3) {
            context.fillStyle = "green";
        } else {
            context.fillStyle = "white";
        }
        Utils.fillCircle (x,y,2);
    }
}