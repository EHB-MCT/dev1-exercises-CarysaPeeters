"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let balls = [];

setup();
update();

function setup() {
	for (let i = 0; i < 20; i++) {
		let ball = {
			x: Utils.randomNumber(0, width),
			y: Utils.randomNumber(0, height),
			xSpeed: 8,
			ySpeed: 8,
			radius: Utils.randomNumber(10, 80),
			hue: Utils.randomNumber(0, 360),
		};
		balls[i] = ball;
	}
}

function update() {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	for (let i = 0; i < balls.length; i++) {
		let ball = balls[i];

		//updating x and y coordinate
		ball.x += ball.xSpeed;
		ball.y += ball.ySpeed;

		//check x and y border
		if (ball.x >= width - ball.radius || ball.x <= ball.radius) {
			ball.xSpeed *= -1;
		}

		if (ball.y >= height - ball.radius || ball.y <= ball.radius) {
			ball.ySpeed *= -1;
		}
		drawCircle(ball);
	}

	requestAnimationFrame(update);
}

function drawCircle(ball) {
	context.fillStyle = Utils.hsl(ball.hue, 100, 50);
	Utils.fillCircle(ball.x, ball.y, ball.radius);
}
