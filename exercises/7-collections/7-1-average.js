"use strict";
import context from "../../../scripts/context.js";
import * as Utils from "../../../scripts/utils.js";

setup();
function setup() {
	let numbers = [];
	for (let i = 0; i < 1000; i++) {
		numbers[i] = Utils.randomNumber(0, 100);
	}
	console.log(calculateAverage(numbers));
}

function calculateAverage(list) {
	let sum = 0;
	for (let i = 0; i < list.length; i++) {
		sum += list[i];
	}
	return sum / list.length;
}
