"use strict"

const progressBar = document.getElementById('progress');
let requestUrl = 'https://netology-slow-rest.herokuapp.com/poll.php';

const uploadForm = document.getElementById('form')
 
function uploader(file) {
	const xhr = new XMLHttpRequest();
   xhr.upload.onprogress = (e) => {
     progressBar.value = e.loaded / e.total;
     e.preventDefault()
   }
   xhr.open('POST', requestUrl);
   xhr.send(file);
 };

 uploadForm.addEventListener('submit', (e) => {
   let file = uploadForm.elements.file.files[0];
   if (file) {
     uploader(file);
   }
   e.preventDefault();
 });