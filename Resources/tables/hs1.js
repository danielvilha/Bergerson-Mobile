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
	title : 'FASCINANTE',
	hasChild : true,
	image : '../images/hotSpot/hotSpot1/1.png',
	text : 'Desde que foi inaugurado em 1997, o Getty Center já recebeu quase 20 milhões de visitantes e se tornou um dos principais pontos artísticos da cidade. Com um impressionante projeto do arquiteto Richard Meier, o Getty Center abriga o J. Paul Getty Museum, um instituto de pesquisa e outro de conservação, além da Getty Foundation. Só o museu dispõe de seis prédios em volta de uma praça central. \n\n\n\n\n\n\n\n\n\n',
	url : 'getty.edu',
	backgroundGradient : gradient,
	font : {
		fontSize : 16,
		fontFamily : 'Times New Roman'
	},
	color : '#EDDA74'
}, {
	title : 'PAISAGEM PERFEITA',
	hasChild : true,
	image : '../images/hotSpot/hotSpot1/2.png',
	text : 'Localizado num robusto penhasco, o hotel Post Ranch Inn oferece magnífica vista para a imensidão do Oceano Pacífico. Perto de um extenso parque estadual, praias e cachoeiras, a atmosfera relaxante é quase inacreditável para a agitada Los Angeles. Com decoração rústica e sofisticada, todos os 39 quartos possuem vistas deslumbrantes. \n\n\n\n\n\n\n\n',
	url : 'postranchinn.com',
	backgroundGradient : gradient,
	font : {
		fontSize : 16,
		fontFamily : 'Times New Roman'
	},
	color : '#EDDA74'
}, {
	title : 'MUST LOVE DOGS',
	hasChild : true,
	image : '../images/hotSpot/hotSpot1/3.png',
	text : 'O melhor amigo do homem também merece tratamento especial em Los Angeles. O D Hotel oferece quartos espaçosos com decoração especial, academia, playground, spa e loja, tudo para atender a todas as necessidades dos cães. Nas tevês, só filmes selecionados, como o clássico da Disney A Dama e o Vagabundo. \n\n\n\n\n\n\n\n',
	url : 'dpethotels.com',
	backgroundGradient : gradient,
	font : {
		fontSize : 16,
		fontFamily : 'Times New Roman'
	},
	color : '#EDDA74'
}, {
	title : 'OÁSIS',
	hasChild : true,
	image : '../images/hotSpot/hotSpot1/4.png',
	text : 'Adorado por celebridades como Cameron Diaz, Paris Hilton e Lindsay Lohan, o restaurante Koi é famoso pela fusão impecável da clássica culinária japonesa, com toques modernos tipicamente norte-americanos. A decoração serena e elegante tem inspiração zen e um relaxante ambiente externo. A iluminação proveniente das velas proporciona clima aconchegante e intimista. \n\n\n\n\n\n\n\n\n\n',
	url : 'koirestaurant.com',
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
		// contentWidth : 'auto',
		// contentHeight : 'auto',
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
