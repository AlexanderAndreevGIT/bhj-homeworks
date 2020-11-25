"use strict"

let counter = document.getElementById("clicker__counter");
const elementImageCookie = document.getElementById("cookie");
const elementClickSpeed = document.getElementById("clicker__speed");
let dateStart = new Date();
let dateEnd;
elementImageCookie.onclick = function() {
	dateEnd = new Date();
	elementClickSpeed.textContent = Number((1000 / (dateEnd - dateStart)).toFixed(2));
	counter.textContent = Number.parseInt(counter.textContent) + 1;
	if (elementImageCookie.width === 200) {
		elementImageCookie.width = 210;
	} else {
		elementImageCookie.width = 200;
	}
	dateStart = new Date();
};