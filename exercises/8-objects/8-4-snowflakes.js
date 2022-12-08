"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = updateWind;

let snowflakes = [];
let wind = 2;

setup();
draw();

function setup() {
	for (let i = 0; i < 200; i++) {
		createSnowflake();
	}
}

function createSnowflake() {
	let snowflake = {
		x: Utils.randomNumber(0, width),
		y: 0,
		size: Utils.randomNumber(10, 50),
		alpha: Utils.randomNumber(0.5, 0.8),
		speed: 1 + Math.random() * 5,
	};

	snowflakes.push(snowflake);
}

function draw() {
	context.fillStyle = "turquoise";
	context.fillRect(0, 0, width, height);

	for (let i = 0; i < snowflakes.length; i++) {
		let snowflake = snowflakes[i];
		context.strokeStyle = Utils.rgba(255, 255, 255, snowflake.alpha);

		drawSnowflake(snowflake.x, snowflake.y, snowflake.size);

		snowflake.y += snowflake.speed;
		snowflake.x += wind;
	}

	//add extra snowflake
	for (let i = 0; i < 5; i++) {
		createSnowflake();
	}

	requestAnimationFrame(draw);
}

function updateWind(e) {
	let scaler = 100;
	wind = (width / 2 - e.pageX) / scaler;
}

function drawSnowflake(x, y, size) {
	let half = size / 2;
	let third = size / 3;
	context.lineWidth = size / 10;
	context.beginPath();
	context.moveTo(x, y - half);
	context.lineTo(x, y + half);
	context.moveTo(x - half, y);
	context.lineTo(x + half, y);
	context.moveTo(x - third, y - third);
	context.lineTo(x + third, y + third);
	context.moveTo(x - third, y + third);
	context.lineTo(x + third, y - third);
	context.stroke();
}
