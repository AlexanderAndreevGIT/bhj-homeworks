"use strict"

// const loader = document.getElementById('loader');
// const items = document.getElementById('items');

// let currencyExchangeRateRequest = new XMLHttpRequest();
// currencyExchangeRateRequest.open('GET', 'https://netology-slow-rest.herokuapp.com');
// currencyExchangeRateRequest.send();
// currencyExchangeRateRequest.responseType = 'json'

// currencyExchangeRateRequest.onreadystatechange = function () {
// 	if (currencyExchangeRateRequest.readyState === 4) {
// 		let responseData = currencyExchangeRateRequest.response;
// 		let valute = responseData.response.Valute;
// 		for (let key in valute) {
// 			let item = `
// 				<div class="item">
// 					<div class="item__code">
// 						${valute[key].CharCode}
// 					</div>
// 					<div class="item__value">
// 						${valute[key].Value}
// 					</div>
// 					<div class="item__currency">
// 						руб.
// 					</div>
// 				</div>`
//         	items.insertAdjacentHTML('beforeEnd', item)
// 		}
//     	loader.classList.remove('loader_active');
// 	}; 
// };

const loader = document.getElementById('loader');
const items = document.getElementById('items');
const requestUrl = 'https://netology-slow-rest.herokuapp.com';

async function sendRequest(method, url) {
	return fetch(url).then(response => {
		return response.json();
	});
}

function currencyHandler(response) {
	let valute = response.response.Valute;
	for (let key in valute) {
			let item = `
				<div class="item">
					<div class="item__code">
						${valute[key].CharCode}
					</div>
					<div class="item__value">
						${valute[key].Value}
					</div>
					<div class="item__currency">
						руб.
					</div>
				</div>`
        	items.insertAdjacentHTML('beforeEnd', item);
	}
   loader.classList.remove('loader_active');
}

sendRequest('GET', requestUrl)
	.then(response => currencyHandler(response));


