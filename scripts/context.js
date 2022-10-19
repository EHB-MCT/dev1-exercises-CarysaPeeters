"use strict";

/** 
 * @type {CanvasRenderingContext2D} 
 */
let context;

setupContext();

export default context;

function setupContext() {
    //get a reference to the canvas element and configure it to fill the whole window
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
}  