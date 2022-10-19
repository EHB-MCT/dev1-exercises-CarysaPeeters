"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}

function drawLines() {
    let i = 0;
    let step = 25;
    let offset = 75;
    while (i<11) {
        Utils.drawLine(75, (step*i)+offset, 325, (step*i)+offset);
        i++;
    }
}