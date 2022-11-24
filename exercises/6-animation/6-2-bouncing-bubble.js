"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x;
let y;
let xSpeed = 10;
let ySpeed = 10;
let radius = 100;

let isPlaying = true;

window.onclick = click;

setup();

function setup() {
	x = width / 2;
	y = height / 2;

	update();
}

function update() {
	if (isPlaying) {
		//clear canvas
		context.fillStyle = "white";
		context.fillRect(0, 0, width, height);

		//updating x and y coordinate
		x += xSpeed;
		y += ySpeed;

		//check x and y border
		if (x >= width - radius || x <= radius) {
			xSpeed *= -1;
		}

		if (y >= height - radius || y <= radius) {
			ySpeed *= -1;
		}

		//draw a circle
		context.fillStyle = "blue";
		Utils.fillCircle(x, y, radius);

		requestAnimationFrame(update);
	}
}

function click(eventData) {
	let mouseX = eventData.x;
	let mouseY = eventData.y;

	if (Utils.calculateDistance(x, y, mouseX, mouseY) < radius) {
		isPlaying = false;
		context.fillStyle = "red";
		Utils.fillCircle(mouseX, mouseY, radius / 2);
	}
}
