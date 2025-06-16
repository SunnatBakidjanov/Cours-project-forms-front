(function () {
	const preloader = document.getElementById('preloader');

	window.addEventListener('load', removePreloader);

	function removePreloader() {
		if (preloader?.parentNode) {
			preloader.parentNode.removeChild(preloader);
		}

		document.removeEventListener('load', removePreloader);
	}

	(function setCurrentTheme() {
		if (!preloader?.parentNode) return;

		const now = new Date();
		const hours = now.getHours();

		const PRELOADER_LIGHT_THEME = '#fff';
		const PRELOADER_DARK_THEME = '#1f1d1d';

		if (hours >= 6 && hours < 18) {
			preloader.style.backgroundColor = PRELOADER_LIGHT_THEME;
		} else {
			preloader.style.backgroundColor = PRELOADER_DARK_THEME;
		}
	})();
})();
