function loadHTML(elementId, filePath) {
	fetch(filePath)
		.then(response => response.text())
		.then(data => {
			document.getElementById(elementId).innerHTML = data;
		})
		.catch(error => console.error('Ошибка загрузки файла:', error));
}

// Загружаем header и footer с абсолютными путями
loadHTML('header', './header_footer/header.html');
loadHTML('footer', './header_footer/footer.html');