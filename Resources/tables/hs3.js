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
	title : 'EXPERIÊNCIA ÚNICA',
	hasChild : true,
	image : '../images/hotSpot/hotSpot3/1.png',
	text : 'Entre os mais tradicionais de Veneza, o Hotel Cipriani está a quatro minutos de lancha de San Marco, na ponta da ilha Giudecca. Com inesquecível vista para a lagoa e para o Palácio Ducal, o luxuoso hotel possui uma deslumbrante decoração tipicamente veneziana, com sofisticados objetos locais. Além do clássico restaurante Fortuny, que oferece o melhor da gastronomia italiana, e o badalado Harry’s Bar, o hotel ainda dispõe de uma fantástica piscina, a única da cidade. \n\n\n\n\n\n\n.',
	url : 'hotelcipriani.com',
	backgroundGradient : gradient,
	font : {
		fontSize : 16,
		fontFamily : 'Times New Roman'
	},
	color : '#EDDA74'

}, {
	title : 'FIVE-STAR LUXURY',
	hasChild : true,
	image : '../images/hotSpot/hotSpot3/2.png',
	text : 'Inaugurado em 2009, o disputadíssimo Palazzina G é um dos hotéis mais incríveis da cidade. Projetado pelo renomado designer francês Phippe Starck, mistura poesia, sonho e romantismo a uma impressionante modernidade tecnológica. Aproximadamente 300 espelhos, inúmeras esculturas, livros, cristais e objetos antigos completam a decoração. Com nova percepção de luxo e hospitalidade, o hotel possui 16 quartos, seis suítes, um sofisticado restaurante, um bar de tapas e o exclusivo Krug Lounge. \n\n\n\n\n\n\n\n\n.',
	url : 'palazzinag.com',
	backgroundGradient : gradient,
	font : {
		fontSize : 16,
		fontFamily : 'Times New Roman'
	},
	color : '#EDDA74'
}, {
	title : 'SAPORE D’ITALIA',
	hasChild : true,
	image : '../images/hotSpot/hotSpot3/3.png',
	text : 'Considerada patrimônio histórico da cidade, a Condessa Enrica Rocca oferece disputadas aulas ensinando não só a cozinhar clássicos da culinária italiana, mas também como comprar e escolher os ingredientes. Enrica divide sua perspectiva muito particular de Veneza com seus alunos enquanto os guia pelos famosos mercados populares. Recentemente, a chef também passou a realizar o table d’hote, quando oferece pequenos jantares em sua casa aos interessados em fugir do roteiro turístico. \n\n\n\n\n\n\n\n.',
	url : 'enricarocca.com',
	backgroundGradient : gradient,
	font : {
		fontSize : 16,
		fontFamily : 'Times New Roman'
	},
	color : '#EDDA74'
	// }, {
	// title : '',
	// hasChild : true,
	// image : '../images/hotSpot/hotSpot3/4.jpg',
	// text : '\n\n\n\n\n\n\n\n\n\n',
	// url : '',
	// backgroundGradient : gradient,
	// font : {
	// fontSize : 18,
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