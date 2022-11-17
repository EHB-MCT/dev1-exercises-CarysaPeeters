"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let frameCount = 0;
let xPos = width / 2;
let yPos = height/2;
context.fillRect (0, 0, width, height);


update();
function update () {
    frameCount++;
    context.fillStyle = "black";
    context.fillStyle = Utils.hsl(frameCount, 100, 50);
    Utils.fillcircle(xPos, yPos, 25);
    xPos += Utils.randomNumber (-10, 5);
    yPos += Utils.randomNumber (-5, 5);
    requestAnimationFrame(update);
}

