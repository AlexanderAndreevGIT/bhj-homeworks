"use strict"

const tooltips = Array.from(document.getElementsByClassName('has-tooltip'));

function showHideTooltip(e) {
	e.preventDefault()
	let tip = `<div class="tooltip tooltip_active style="left: 0; top: 0"">
      ${this.title}
    </div>`
	let removeActiveTip = Array.from(document.getElementsByClassName('tooltip_active'));
	if (removeActiveTip[0] !== undefined) {
		removeActiveTip[0].remove()
	}
	this.insertAdjacentHTML('afterBegin', tip);
}

tooltips.forEach(item => item.addEventListener('click', showHideTooltip));