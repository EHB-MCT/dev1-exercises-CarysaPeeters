"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradient();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);

}

function drawGradient() {
    let i = 0;
    while (i <= 255 ) {
        
        context.fillStyle = Utils.rgb(i, i, i);
        context.fillRect(50 + i, 50, 1, 300);
        i++;
    }
}