"use strict";
import context from "../../../scripts/context.js";
import * as Utils from "../../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillStyle = "black";
context.fillRect (0, 0, width, height);
let spacing = 10;

drawMaze ();

function drawMaze () {
    context.lineWidth = 5;
    context.lineCap = "square";
    let horizontalAmount = width/spacing;
    let verticalAmount = height/spacing;
    
    for (let j = 0; j < verticalAmount; j++) {
        for (let i = 0; i < horizontalAmount; i++) {
            context.strokeStyle = Utils.hsl((Math.random()*360),100, 50);
            let r = Math.round(Math.random());
            if (r == 0) {
                Utils.drawLine(i * spacing, j * spacing, spacing + i * spacing, spacing + j * spacing);
            } else {
                Utils.drawLine(spacing + i * spacing, j * spacing, i * spacing, spacing + j * spacing);
            } 
        } 
    } 
}
 

