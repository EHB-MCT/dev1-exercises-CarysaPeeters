"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawNoise();

function drawNoise () {
    for (let i = 0; i < width; i++) {
        let y = Noise.perlinNoise(i / 1000) * height;
        console.log(y);
        Utils.fillCircle(i, y, 1);
    }
}