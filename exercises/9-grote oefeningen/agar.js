"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = move;

let cells = [];
let player = {
	x: width / 2,
	y: height / 2,
	size: 50,
};

setup();
update();

function setup() {
	for (let i = 0; i < 30; i++) {
		let cell = {
			x: Utils.randomNumber(0, width),
			y: Utils.randomNumber(0, height),
			r: Utils.randomNumber(10, 100),
			color: Utils.randomNumber(0, 360),
			xSpeed: Utils.randomNumber(-5, 5),
			ySpeed: Utils.randomNumber(-5, 5),
		};
		cells[i] = cell;
	}
}

function update() {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	for (let i = 0; i < cells.length; i++) {
		let cell = cells[i];
		cell.x += cell.xSpeed;
		cell.y += cell.ySpeed;
		if (cell.x >= width - cell.r || cell.x <= cell.r) {
			cell.xSpeed *= -1;
		}

		if (cell.y >= height - cell.r || cell.y <= cell.r) {
			cell.ySpeed *= -1;
		}
		drawCircle(cell);
	}
	context.fillStyle = "red";
	Utils.fillCircle(player.x, player.y, player.size);
	requestAnimationFrame(update);
}

function drawCircle(cell) {
	context.fillStyle = Utils.hsl(cell.color, 100, 50);
	Utils.fillCircle(cell.x, cell.y, cell.r);
}

/**
 *
 * @param{MouseEvent}eventData
 */

function move(eventData) {
	player.x = eventData.pageX;
	player.y = eventData.pageY;
}
