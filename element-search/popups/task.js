"use strict"

const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
modalMain.classList.add('modal_active');

function findClassAndGetArray(param) {
	return Array.from(document.getElementsByClassName(param))
}

function changeClassInArray(from, to) {
	findClassAndGetArray(from).forEach(item => item.className = to)
}

findClassAndGetArray('modal__close').forEach(item => item.onclick = () => changeClassInArray('modal_active', 'modal'));

findClassAndGetArray('show-success').forEach(item => item.onclick = () => {
	changeClassInArray('modal_active', 'modal');
	modalSuccess.className = 'modal modal_active';
})
