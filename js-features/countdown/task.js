"use strict"

// const countdown = setInterval(function() {
//   const output = document.getElementById("timer");
//   if (output.textContent == 0) {
//   	alert('Вы победили в конкурсе');
//   	clearInterval(countdown);
//   } else {
//   	output.textContent -= 1;
//   }
//  }, 997); 

//Повышенный уровень сложности #1
let hours = 0;
let minutes = 0;
let seconds = 9;
let totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;

function show0(input) {
	if (input < 10) {
		return `0${input}`
	}
	return input
}

let timeLeft = `${show0(hours)}:${show0(minutes)}:${show0(seconds)}`;
const timer = document.getElementById("timer");
timer.textContent = timeLeft;

const countdown = setInterval(function() {	
	if (totalSeconds === 0) {
		alert('Вы победили в конкурсе');
		clearInterval(countdown);
	} else {
	totalSeconds -= 1;
	hours = Math.trunc(totalSeconds / 60 / 60 % 60);
	minutes = Math.trunc(totalSeconds / 60 % 60);
	seconds = totalSeconds% 60;
	timeLeft = `${show0(hours)}:${show0(minutes)}:${show0(seconds)}`;
	timer.textContent = timeLeft;
	}
}, 997)
