"use strict";
import context from "../../../scripts/context.js";
import * as Utils from "../../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = move;
/**
 * 
 * @param{MouseEvent}eventData
 */

function move (eventData) {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "red";
    context.lineWidth = "5";
    let x = eventData.pageX;
    let y = eventData.pageY;
    Utils.drawLine(x, 0, x, height);
    Utils.drawLine(0, y, width, y);
    
}