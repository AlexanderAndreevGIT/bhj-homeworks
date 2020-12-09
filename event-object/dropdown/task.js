"use strict"

const dropdownValue = Array.from(document.getElementsByClassName('dropdown__value'));
const dropdownLinks = Array.from(document.getElementsByClassName('dropdown__link'));

function dropdownAction (e) {
	this.nextElementSibling.classList.toggle('dropdown__list_active')
}

function dropdownLinkActive (e) {
	this.closest('.dropdown__list').previousElementSibling.textContent = this.textContent;
	this.closest('.dropdown__list').classList.toggle('dropdown__list_active')
	e.preventDefault()
}

dropdownValue.forEach(item => item.addEventListener("click", dropdownAction))
dropdownLinks.forEach(item => item.addEventListener("click", dropdownLinkActive))
