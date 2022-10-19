"use strict";
import context from './context.js';

/**
 * Draws a filled ellipse of which the center is at a x, y
 * @param {*} x x coordinate of the center of the ellipse
 * @param {*} y y coordinate of the center of the ellipse
 * @param {*} rX horizontal radius of the ellipse (half of the width)
 * @param {*} rY vertical radius of the ellipse (half of the height)
 */
export function fillEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.fill();
}

/** function that formats an hsl value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 */
export function hsl(h, s, l) {
    return "hsl(" + h + "," + s + "%," + l + "%)";
}

/**
 * draw a circle
 * @param {number} x x-coordinate of the center of the circle
 * @param {number} y y-coordinate of the center of the circle
 * @param {number} r the radius of the circle
 */
export function strokeCircle(x, y, r) {
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2);
    context.stroke();
}

export function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

export function rgb(r, g, b) {
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}