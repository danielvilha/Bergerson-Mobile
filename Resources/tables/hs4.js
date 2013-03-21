var win = Titanium.UI.currentWindow;

win.backgroundImage = '../images/background/backgroundClean.png';

var gradient = {
	type : 'linear',
	startPoint : {
		x : '0%',
		y : '50%'
	},
	endPoint : {
		x : '100%',
		y : '50%'
	},
	colors : [{
		color : '#1E1E1E',
		offset : 0.0
	}, {
		color : '#232323',
		offset : 0.1
	}, {
		color : '#222323',
		offset : 0.85
	}, {
		color : '#383838',
		offset : 1.0
	}],
};

var data = [{
	title : 'GALERIA NOTURNA',
	hasChild : true,
	image : '../images/hotSpot/hotSpot4/1.png',
	text : 'Conhecido como “Galeria dos Notívagos”, o Arte Luise Kunsthotel é muito mais que um simples hotel. O que antes era o palácio Kunstlerheim Luise, de 1895, hoje abriga um verdadeiro refúgio artístico. Cada um dos 50 quartos foi decorado por um artista diferente e batizado com nomes curiosos, como “Sonhos que o Dinheiro Pode Comprar”. Localizado na região central da cidade, o hotel tem vista para o Rio Spree. \n\n\n\n\n\n\n\n.',
	url : 'luise-berlin.com',
	backgroundGradient : gradient,
	font : {
		fontSize : 16,
		fontFamily : 'Times New Roman'
	},
	color : '#EDDA74'
}, {
	title : 'SPY BREAK',
	hasChild : true,
	image : '../images/hotSpot/hotSpot4/2.png',
	text : 'Inspirado em filmes dos anos 1970, entre eles a franquia 007, o restaurante Bond deixaria qualquer espião satisfeito. A decoração retrô é chique e estilosa, com predominância dos tons roxo e preto e um intrigante bar dourado. O menu internacional tem influência asiática e muda semanalmente. O serviço impecável, a variedade de opções e a atmosfera única fazem do Bond a opção perfeita para saborear uma refeição na capital alemã. \n\n\n\n\n\n\n\n\n.',
	url : 'bond-berlin.de',
	backgroundGradient : gradient,
	font : {
		fontSize : 16,
		fontFamily : 'Times New Roman'
	},
	color : '#EDDA74'
}, {
	title : 'COMO UMA DIVA',
	hasChild : true,
	image : '../images/hotSpot/hotSpot4/3.png',
	text : 'Tratamento de estrela de cinema é o que promete o incrível salão de beleza Shan Rahimkhan, um dos mais exclusivos de Berlim. Com vista para a Catedral Francesa e a Catedral Alemã, o salão, localizado no centro da cidade, possui decoração luxuosa com motivos de pavões inspirados num desenho persa, que simboliza beleza e imortalidade. O salão abriga ainda uma loja e um charmoso café, perfeito para mostrar seu novo hairstyle. \n\n\n\n\n\n\n\n.',
	url : 'shanrahimkhan.de',
	backgroundGradient : gradient,
	font : {
		fontSize : 16,
		fontFamily : 'Times New Roman'
	},
	color : '#EDDA74'
// }, {
	// title : '',
	// hasChild : true,
	// image : '../images/hotSpot/hotSpot4/4.png',
	// text : '\n\n\n\n\n\n\n\n\n',
	// url : '',
	// backgroundGradient : gradient,
	// font : {
		// fontSize : 16,
		// fontFamily : 'Times New Roman'
	// },
	// color : '#EDDA74'
}];

var tableview = Titanium.UI.createTableView({
	data : data,
	backgroundImage : '../images/background/backgroundClean.png',
	backgroundColor : 'transparent',
	top : -20,
	left : -6,
	right : -6,
	style : Titanium.UI.iPhone.TableViewStyle.GROUPED
});

tableview.addEventListener('click', function(e) {

	var win = Titanium.UI.createWindow({
		title : e.rowData.title,
		font : {
			fontSize : 16,
			fontFamily : 'Times New Roman'

		},
		backgroundImage : '../images/background/backgroundClean.png',
		barColor : '#111'
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});

	var scrollView = Titanium.UI.createScrollView({
		contentWidth : 'auto',
		contentHeight : 'auto',
		top : 0,
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : true
	});

	var imageView = Titanium.UI.createImageView({
		backgroundImage : e.rowData.image,
		width : '100%',
		height : '40%',
		top : 0
	});

	scrollView.add(imageView);

	var label = Ti.UI.createLabel({
		horizontalWrap : true,
		text : e.rowData.text,
		font : {
			fontSize : 18,
			fontFamily : 'HelveticaNeue-UltraLight'
		},
		top : '41%',
		color : '#ffff',
		height : 'auto',
		width : 300,
		textAlign : 'left'
	});

	scrollView.add(label);

	var urlButton = Ti.UI.createButton({
		title : e.rowData.url,
		font : {
			fontSize : 18,
			fontFamily : 'Times New Roman'
		},
		color : '#EDDA74',
		height : 30,
		backgroundImage : '../images/button/but_url.png',
		width : '90%',
		zIndex : 9,
		bottom : 10
	});

	urlButton.addEventListener('click', function() {
		var winWeb = Titanium.UI.createWindow({
			barColor : '#111',
			height : 'auto',
			width : 'auto'
		});

		var webView = Titanium.UI.createWebView({
			url : 'http://' + e.rowData.url
		});

		winWeb.add(webView);

		Titanium.UI.currentTab.open(winWeb, {
			animated : true
		});
	});

	scrollView.add(urlButton);

	win.add(scrollView);

});

Titanium.UI.currentWindow.add(tableview);