Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;

//Criando a janela Rádio
var win = Titanium.UI.currentWindow;

var imageContainer = [];
var imageRepository = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory + 'images/joias/').getDirectoryListing();

var scrollableView = Ti.UI.createScrollableView({
	touchEnabled : true,
	currentPage : 0
});

for (var file in imageRepository) {

	// Define o tipo de arquivo que vai ler
	if (imageRepository[file].split(".")[1] === "jpg") {
		imageContainer.push(Titanium.UI.createImageView({
			image : '../images/joias/' + imageRepository[file]
		}));
	};

	// Depurar informações
	// Ti.API.info(imageContainer[file]);
};

scrollableView.views = imageContainer;

var scrollView = Titanium.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	bottom : 0,
	backgroundColor : '#1F1E1F',
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
	maxZoomScale : 3.0,
	minZoomScale : 1.0
});

scrollView.addEventListener('dblclick', function(e) {
	if(scrollView.zoomScale > 1.0) {
		scrollView.zoomScale = 1.0;
	} else {
		scrollView.zoomScale = 3.0;
	}
});

scrollView.add(scrollableView);

win.add(scrollView);