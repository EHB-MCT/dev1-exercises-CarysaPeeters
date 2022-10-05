"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();
function drawName() {
    //C
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(50,150);
    context.stroke();

    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(100,50);
    context.stroke();
    
    context.beginPath();
    context.moveTo(50,150);
    context.lineTo(100,150);
    context.stroke();

    //A
    context.beginPath();
    context.strokeStyle = "orange";
    context.moveTo(150,150);
    context.lineTo(190,50);
    context.stroke();

    context.beginPath();
    context.moveTo(190,50);
    context.lineTo(225,150);
    context.stroke();

    context.beginPath();
    context.moveTo(172,100);
    context.lineTo(210,100);
    context.stroke();

    //R
    context.beginPath();
    context.strokeStyle = "yellow";
    context.moveTo(275,150);
    context.lineTo(275,50);
    context.stroke();

    context.beginPath();
    context.moveTo(275,100);
    context.lineTo(325,75);
    context.stroke();

    context.beginPath();
    context.moveTo(275,50);
    context.lineTo(325,75);
    context.stroke();

    context.beginPath();
    context.moveTo(275,100);
    context.lineTo(325,150);
    context.stroke();

    //Y
    context.beginPath();
    context.strokeStyle = "green";
    context.moveTo(375,150);
    context.lineTo(425,50);
    context.stroke();

    context.beginPath();
    context.moveTo(400,100);
    context.lineTo(375,50);
    context.stroke();

    //S
    context.beginPath();
    context.strokeStyle = "blue";
    context.moveTo(475,150);
    context.lineTo(525,150);
    context.lineTo(525,100);
    context.lineTo(475,100);
    context.lineTo(475,50);
    context.lineTo(525,50);
    context.stroke();

    //A
    context.beginPath();
    context.strokeStyle = "purple";
    context.moveTo(575,150);
    context.lineTo(615,50);
    context.stroke();

    context.beginPath();
    context.moveTo(615,50);
    context.lineTo(650,150);
    context.stroke();

    context.beginPath();
    context.moveTo(595,100);
    context.lineTo(633,100);
    context.stroke();
}