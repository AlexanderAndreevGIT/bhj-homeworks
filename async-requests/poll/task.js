"use strict"

const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
let requestUrl = 'https://netology-slow-rest.herokuapp.com/poll.php';
let responseAnswers;
//let answersList;

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

function chooseAnswerShowResult() {
	alert('Спасибо, Ваш голос засчитан!');
	let body = `vote=${responseAnswers.id}&answer=${responseAnswers.data.answers.indexOf(this.innerText)}`;
	let header = {'Content-type': 'application/x-www-form-urlencoded'}
		
	sendRequest('POST', requestUrl, body, header)
		.then(response => {
			pollAnswers.classList.remove('poll__answers_active');
			let sum = 0;
			for (let i in response.stat) {
				sum +=  parseInt(response.stat[i].votes)
			}
			for (let i in response.stat) {
				let item = `<div class="answer">
									${response.stat[i].answer}: ${(response.stat[i].votes / sum * 100).toFixed(2)}%
								</div>`;
				pollTitle.insertAdjacentHTML('afterEnd', item);			
			}
		})
}

function answersHandler(response) {
	pollTitle.textContent = response.data.title;
	for (let i in response.data.answers) {
		let item = `
				<button class="poll__answer">
					${response.data.answers[i]}
				</button>`;
      pollAnswers.insertAdjacentHTML('beforeEnd', item);
   }

   let answersList = Array.from(document.getElementsByClassName('poll__answer'));
	answersList.forEach(item => item.addEventListener('click', chooseAnswerShowResult))
	return responseAnswers = response;
}

sendRequest('GET', requestUrl)
	.then(response => answersHandler(response))