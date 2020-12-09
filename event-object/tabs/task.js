"use strict"

const tabs = Array.from(document.getElementsByClassName('tab'));
const tabsContent = Array.from(document.getElementsByClassName('tab__content'))
let activeIndex = 0;

function switchContent() {
	tabs[activeIndex].classList.remove('tab_active');
	tabsContent[activeIndex].classList.remove('tab__content_active');
	activeIndex = tabs.indexOf(this);
	tabs[activeIndex].classList.add('tab_active');
	tabsContent[activeIndex].classList.add('tab__content_active');
}

tabs.forEach(item => item.addEventListener("click", switchContent))