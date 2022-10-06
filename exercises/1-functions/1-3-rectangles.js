"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawRectangles ();
function drawRectangles () {
// left uppercorner big rectangle red  
context.beginPath();
context.strokeStyle = "red";
context.moveTo(50,50);
context.lineTo(50,200);
context.lineTo(200,200);
context.lineTo(200,50);
context.lineTo(50,50);
context.stroke();

// right downcorner big rectangle red
context.beginPath ();
context.strokeStyle = "red";
context.moveTo(200,200);
context.lineTo(200,350);
context.lineTo(350,350);
context.lineTo(350,200);
context.lineTo(200,200);
context.stroke();

// big black rectangle in the middle
context.beginPath ();
context.strokeStyle = "red";
context.fillStyle = "black";
context.moveTo(125,125);
context.lineTo(275,125);
context.lineTo(275,275);
context.lineTo(125,275);
context.lineTo(125,125);
context.stroke();
context.fill();

// right uppercorner smaller red rectangle
context.beginPath ();
context.strokeStyle = "red";
context.moveTo(275,125);
context.lineTo(325,125);
context.lineTo(325,75);
context.lineTo(275,75);
context.lineTo(275,125);
context.stroke();

// right uppercorner small black ractangle
context.beginPath ();
context.fillStyle = "black";
context.moveTo(325,75);
context.lineTo(325,50);
context.lineTo(350,50);
context.lineTo(350,75);
context.lineTo(325,75);
context.fill();

// left downcorner smaller red rectangle
context.beginPath ();
context.strokeStyle = "red";
context.moveTo(125,275);
context.lineTo(125,325);
context.lineTo(75,325);
context.lineTo(75,275);
context.lineTo(125,275);
context.stroke();

// left downcorner small black rectangle
context.beginPath ();
context.fillStyle = "black";
context.moveTo(75,325);
context.lineTo(75,350);
context.lineTo(50,350);
context.lineTo(50,325);
context.lineTo(75,325);
context.fill();
}