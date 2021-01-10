"use strict"

const modal = document.getElementById('subscribe-modal');
const modalCloseButton = Array.from(document.getElementsByClassName('modal__close'));

function modalClose() {
	this.closest('.modal').classList.remove('modal_active');
	document.cookie = 'subscribe=dontshow';
}

function getCookie(name) {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
      .pop()
		.split(";")
		.shift(); }
}

if (getCookie('subscribe') === undefined) {
	modal.classList.add('modal_active');
}

modalCloseButton.forEach(item => item.addEventListener('click', modalClose));
