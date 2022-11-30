"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let balloons = [];

setup();
update();

function setup() {
	for (let i = 0; i < 50; i++) {
		let balloon = {
			x: Utils.randomNumber(0, width),
			y: Utils.randomNumber(0, height),
			rx: 55,
			ry: 85,
			hue: Utils.randomNumber(0, 60),
		};
		balloons[i] = balloon;
	}
}

function update() {
	context.fillStyle = "lightblue";
	context.fillRect(0, 0, width, height);
	for (let i = 0; i < balloons.length; i++) {
		let balloon = balloons[i];
		balloon.x += Utils.randomNumber(-2, 2);
		balloon.y -= Utils.randomNumber(0, 5);
		drawBalloon(balloon);
	}
	requestAnimationFrame(update);
}

function drawBalloon(balloon) {
	context.fillStyle = Utils.hsl(balloon.hue, 100, 50);
	Utils.fillEllipse(balloon.x, balloon.y, balloon.rx, balloon.ry);
	context.lineWidth = "3";
	Utils.drawLine(balloon.x, balloon.y + 2 * balloon.ry, balloon.x, balloon.y + balloon.ry);
}
