"use strict"

const editor = document.getElementById('editor');
const resetButton = document.getElementById('reset-button')

if (localStorage.text != undefined) {
	editor.value = localStorage.text;
}

editor.addEventListener('input', () => {
	localStorage.text = editor.value;
});

resetButton.addEventListener('click', () => {
	editor.value = '';
	localStorage.text = '';
});
