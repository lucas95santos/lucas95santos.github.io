const body = document.querySelector('body');
const toogleThemeDiv = document.querySelector('#toogle-theme');
const toogleThemeSelector = document.querySelector("input[name=theme]");

const sidebar = document.querySelector('.sidebar');
const toggleMenuDiv = document.querySelector('.toggle-menu');
const content = document.querySelector('.content');
const footerContent = document.querySelector('.footer-content');
const brand = document.querySelector('.brand');

let currentTheme = localStorage.getItem('ls95-theme');
const menuOpen = localStorage.getItem('ls95-menu');

function toogleTheme() {
	const newTheme = body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme';
	toogleThemeSelector.checked = body.classList.contains('light-theme');
	toogleThemeDiv.setAttribute('title', newTheme === 'light-theme' ? 'Mudar para o tema escuro' : 'Mudar para o tema claro');

	body.classList.remove(currentTheme);
	body.classList.add(newTheme);

	localStorage.setItem('ls95-theme', newTheme);
	currentTheme = newTheme;
}

function toggleMenu() {
	const menuState = sidebar.classList.contains('active');

	if (menuState) {
		toggleMenuDiv.classList.remove('active');
		sidebar.classList.remove('active');
		content.classList.remove('active');
		footerContent.classList.remove('active');
		brand.classList.remove('active');

		localStorage.setItem('ls95-menu', JSON.stringify(false));
	} else {
		toggleMenuDiv.classList.add('active');
		sidebar.classList.add('active');
		content.classList.add('active');
		footerContent.classList.add('active');
		brand.classList.add('active');

		localStorage.setItem('ls95-menu', JSON.stringify(true));
	}
}

(function init() {
	// checking current theme

	if (currentTheme) {
		body.classList.add(currentTheme);
	} else {
		body.classList.add('light-theme');

		currentTheme = 'light-theme';
		localStorage.setItem('ls95-theme', currentTheme);
	}

	toogleThemeDiv.setAttribute('title', currentTheme === 'light-theme' ? 'Mudar para o tema escuro' : 'Mudar para o tema claro');
	toogleThemeSelector.checked = body.classList.contains('dark-theme');
	toogleThemeSelector.addEventListener('change', toogleTheme);

	// checking sidebar state

	if (JSON.parse(menuOpen)) {
		sidebar.classList.add('active');
		toggleMenuDiv.classList.add('active');
		content.classList.add('active');
		footerContent.classList.add('active');
		brand.classList.add('active');
	} else {
		sidebar.classList.remove('active');
		toggleMenuDiv.classList.remove('active');
		content.classList.remove('active');
		footerContent.classList.remove('active');
		brand.classList.remove('active');
	}

	toggleMenuDiv.addEventListener('click', toggleMenu);
})();
