const body = document.querySelector('body');
const toogleThemeButton = document.getElementById('toogle-theme');
const logo = document.getElementById('logo');

let currentTheme = localStorage.getItem('ls95-theme');

function toogleTheme() {
	const newTheme = body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme';
	logo.src = `../assets/images/${newTheme}-logo.png`;

	body.classList.remove(currentTheme);
	body.classList.add(newTheme);

	localStorage.setItem('ls95-theme', newTheme);
	currentTheme = newTheme;
}

(function init() {
	if (currentTheme) {
		body.classList.add(currentTheme);
	} else {
		body.classList.add('light-theme');

		currentTheme = 'light-theme';
		localStorage.setItem('ls95-theme', currentTheme);
	}

	logo.src = `../assets/images/${currentTheme}-logo.png`;
	toogleThemeButton.addEventListener('click', toogleTheme);
})();
