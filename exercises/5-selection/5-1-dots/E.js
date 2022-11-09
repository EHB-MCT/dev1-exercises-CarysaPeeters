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
        if (y < height && x < width) {
            context.fillStyle = "blue";
        } 
        if (y < 3*height/4 && x < 3*height/4) {
            context.fillStyle = "white";
        }
        if ( x < width/4){
            context.fillStyle = "blue";
        } 
        if (y < height/4){
            context.fillStyle = "blue";
        } 
        Utils.fillCircle (x,y,2);
    }
}