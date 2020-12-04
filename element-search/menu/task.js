"use strict"

const menuItems = Array.from(document.getElementsByClassName('menu__link'));


menuItems.forEach(item => item.onclick = () => {
	if (item.nextElementSibling !== null && item.nextElementSibling.classList.contains('menu_sub')) {
		if (item.nextElementSibling.classList.contains('menu_active')) {
			item.nextElementSibling.classList.toggle('menu_active');
		} else {
			const active = Array.from(document.getElementsByClassName('menu_active'))
			active.forEach(item => item.classList.remove('menu_active'))
			item.nextElementSibling.classList.add('menu_active');
		}
	return false
	}
})