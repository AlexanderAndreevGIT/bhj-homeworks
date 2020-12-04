"use strict"

const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const sliderDots = Array.from(document.getElementsByClassName('slider__dot'))
const sliderArrowPrev = document.getElementsByClassName('slider__arrow_prev')
const sliderArrowNext = document.getElementsByClassName('slider__arrow_next')
let activeSlide = 0;

function itemDotsDeactivate(index) {
	sliderItems[index].classList.remove('slider__item_active');
	sliderDots[index].classList.remove('slider__dot_active');
}

function itemDotsActivate(index) {
	sliderItems[index].classList.add('slider__item_active');
	sliderDots[index].classList.add('slider__dot_active');
}

sliderArrowPrev[0].onclick = function () {
	itemDotsDeactivate(activeSlide);
	if (activeSlide === 0) {
		activeSlide = sliderItems.length - 1;
	} else {
		activeSlide -= 1;
	}
	itemDotsActivate(activeSlide);
}

sliderArrowNext[0].onclick = function () {
	itemDotsDeactivate(activeSlide);
	if (activeSlide >= (sliderItems.length - 1)) {
		activeSlide = 0;
	} else {
		activeSlide += 1;
	}
	itemDotsActivate(activeSlide);
}

sliderDots.forEach(item => item.onclick = () => {
	itemDotsDeactivate(activeSlide);
	activeSlide = sliderDots.indexOf(item);
	itemDotsActivate(activeSlide);
})
