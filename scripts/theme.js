const body = document.querySelector('body');
const toogleDiv = document.querySelector('#toogle');
const toogleSelector = document.querySelector("input[name=theme]");

let currentTheme = localStorage.getItem('ls95-theme');

function toogleTheme() {
	const newTheme = body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme';
	toogleSelector.checked = body.classList.contains('light-theme');
	toogleDiv.setAttribute('title', newTheme === 'light-theme' ? 'Mudar para o tema escuro' : 'Mudar para o tema claro');

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

	toogleDiv.setAttribute('title', currentTheme === 'light-theme' ? 'Mudar para o tema escuro' : 'Mudar para o tema claro');
	toogleSelector.checked = body.classList.contains('dark-theme');
	toogleSelector.addEventListener('change', toogleTheme);
})();
