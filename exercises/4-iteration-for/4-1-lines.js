"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = 600;
let height = 300;
let horizontalLines = 60;
let verticalLines = 30;
let step = width/horizontalLines;
drawLines();

function drawLines () {
    context.fillStyle = "orange";
    context.fillRect (0, 0, width, height);
    context.strokeStyle = "white";
    context.lineWidth = 2;
    for (let i = 0; i <= horizontalLines; i++) {
        Utils.drawLine (i * step, 0, width - (i * step), height);
    }
    for (let j = 0; j <= verticalLines; j++) {
        Utils.drawLine (0, j * step, width, height -(j * step));
    }
}