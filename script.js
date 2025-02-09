function loadHTML(elementId, filePath) {
	fetch(filePath)
		.then(response => response.text())
		.then(data => {
			document.getElementById(elementId).innerHTML = data;
		})
		.catch(error => console.error('Ошибка загрузки файла:', error));
}

// Загружаем header и footer с абсолютными путями
loadHTML('header', 'header.html');
loadHTML('footer', 'footer.html');