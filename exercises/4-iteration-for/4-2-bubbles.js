"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let margin = 400;
let width = (context.canvas.width) - margin;
let height = (context.canvas.height) - margin;

drawBubbles ();
function drawBubbles () {

    context.fillRect (0, 0, width + margin, height + margin);

    for (let i = 0; i < 80; i++) {
        Utils.fillCircle (width * Math.random() + 200, height * Math.random() + 200, Math.random() * i);
        let kleur = Utils.hsla (Math.random() * 180, 100, 50, 0.5);
        let color = kleur;
        context.fillStyle = color;
    }
    
}