"use strict";

let margin = 50;

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = (canvas.width)-2*margin;
let height = (canvas.height)-2*margin;

drawPattern(margin, margin, width/3, height/6, "#2C3E50");
drawPattern(margin+width/3, margin, width/3, height/6, "#ECF0F1");
drawPattern(width-width/3+margin, margin, width/3, height/6, "#2C3E50");
drawPattern(margin, height/6+margin, width, height/3, "#E74C3C");
drawPattern(margin, margin+height/2, width/3, height/6, "#2C3E50");
drawPattern(width-width/3+margin, margin+height/2, width/3, height/6, "#2C3E50");
drawPattern(margin+width/3, margin+height/2, width/3, height/2, "#ECF0F1");
drawPattern(margin, height-height/3+margin, width/3, height/3, "#3498DB");
drawPattern(width-width/3+margin, height-height/3+margin, width/3, height/3, "#3498DB");

function drawPattern(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}