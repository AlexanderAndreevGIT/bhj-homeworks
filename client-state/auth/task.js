"use strict"

const signin = document.getElementById('signin')
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const logout = document.getElementById('logout-button');


async function sendRequest(method, url, body, headers) {
	return fetch(url, {
		method: method,
		body: body,
		headers: headers
	}).then(response => {
		if (response.ok) {
			return response.json();	
		} 
		return response.status
	})	
}

function signInActive() {
	signin.classList.add('signin_active');
	welcome.classList.remove('welcome_active');
	logout.classList.remove('logout-button_active')
}

function logoutActive() {
	signin.classList.remove('signin_active');
	welcome.classList.add('welcome_active');
	logout.classList.add('logout-button_active')
	userId.textContent = localStorage.userId

}

function signInAction(e) {
	e.preventDefault()
	let formData = new FormData(this)
	sendRequest('POST', this.action, formData)
	.then(response => {
		if(response.success) {
			localStorage.userId = response.user_id;
			logoutActive();
			form.login.value = '';
			form.password.value = '';
		} else {
			alert('Неверный логин/пароль')
			form.login.value = '';
			form.password.value = '';
		}
	})
}

function logoutAction(e) {
	localStorage.userId = '';
	signInActive()
}

form.addEventListener('submit', signInAction);
logout.addEventListener('click', logoutAction); 

if (localStorage.userId === undefined || localStorage.userId === '') {
	signInActive();
} else {
	logoutActive();
}


