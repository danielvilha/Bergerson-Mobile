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
	title : 'INIGUALÁVEL',
	hasChild : true,
	image : '../images/hotSpot/hotSpot2/1.png',
	text : 'No Five Hotel & Spa todos os detalhes foram cuidadosamente pensados, da decoração e iluminação à composição das cores. Tudo exala sofisticação e exclusividade nos 45 espaçosos quartos do hotel e no spa. No top floor está o impecável restaurante Sea Sens. Seu clima convidativo fica por conta das centenas de lanternas espalhadas pelo teto. Uma verdadeira tentação, a Intuitions by J, confeitaria do renomado chef pâtissier Jérôme Oliveira, fica no térreo do hotel. \n\n\n\n\n\n\n\n\n\n.',
	url : 'five-hotel-cannes.com',
	backgroundGradient : gradient,
	font : {
		fontSize : 16,
		fontFamily : 'Times New Roman'
	},
	color : '#EDDA74'

}, {
	title : 'DÉLICIEUX',
	hasChild : true,
	image : '../images/hotSpot/hotSpot2/2.png',
	text : 'Sandrine Verdot trabalha há 25 anos no ramo de hotéis e restaurantes e desde 2007 comanda o Ceneri, um dos estabelecimentos mais charmosos de Cannes. Especializado em alimentos finos, essa espécie de armazém oferece um verdadeiro banquete também para os olhos. São frutas, vegetais, queijos finos, temperos, azeites, entre outras delícias, além de vinhos e champagnes selecionados. \n\n\n\n\n\n\n\n\n.',
	url : 'ceneri.fr',
	backgroundGradient : gradient,
	font : {
		fontSize : 16,
		fontFamily : 'Times New Roman'
	},
	color : '#EDDA74'
}, {
	title : 'EDEN A CÉU ABERTO',
	hasChild : true,
	image : '../images/hotSpot/hotSpot2/3.png',
	text : 'Localizado no coração de Port Canto, o disputadíssimo Le Baôli concentra celebridades e jet setters e é um verdadeiro paraíso a céu aberto. As palmeiras que o cercam conferem clima tropical ao ambiente, um misto de restaurante e casa noturna. Com refinado e completo cardápio de coquetéis, o premiado chef Bruno Oger oferece uma cozinha exótica, com toques asiáticos e mediterrâneos. Depois da meia-noite, a atmosfera dançante toma conta do lugar. \n\n\n\n\n\n\n\n\n.',
	url : 'lebaoli.com',
	backgroundGradient : gradient,
	font : {
		fontSize : 16,
		fontFamily : 'Times New Roman'
	},
	color : '#EDDA74'
}, {
	title : 'MÁGICO',
	hasChild : true,
	image : '../images/hotSpot/hotSpot2/4.png',
	text : 'Verdadeira joia histórica da Riviera Francesa, o Hôtel Majestic Barrière é luxuoso e elegante. Criado em 1926, mas incrivelmente atual, possui 265 quartos classicamente decorados. Localizado no La Croisette, passou por total reformulação que acrescentou uma nova asa ao já suntuoso empreendimento. Restaurantes e bares servem o melhor da culinária mediterrânea e uma espaçosa piscina aquecida está à disposição dos hóspedes, que também têm acesso à exclusivíssima praia particular do hotel. \n\n\n\n\n\n\n\n\n.',
	url : 'lucienbarriere.com',
	backgroundGradient : gradient,
	font : {
		fontSize : 16,
		fontFamily : 'Times New Roman'
	},
	color : '#EDDA74'
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