"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawBricks();

function drawBricks() {
    let margin = 50;
    for (let i = 0; i < 660; i+=110) {
        for (let j = 1; j < 4; j++) {
            context.fillStyle = "#8b0000";
            context.fillRect(i + margin, 2.2 * j * margin - 55, 100, 50);
            context.fillRect(i + 2 * margin, 2 * j * margin + j * 10, 100, 50);
        }  
    }
}