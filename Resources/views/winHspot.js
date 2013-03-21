Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;

//Criando a Tab Hot Spot
var win = Titanium.UI.currentWindow;
win.title = 'Hotspot';

var buttonHT1 = Ti.UI.createButton({
	top : 0,
	height : '25%',
	width : '100%',
	backgroundImage : '../images/button/but_hSpot1.png',
});

buttonHT1.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : '../tables/hs1.js',
		backgroundImage : '../images/background/backgroundClean.png',
		title : 'Los Angeles',
		backgroundColor : '#fff',
		navBarHidden : false,
		barColor : '#111'
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

//---------------------------------------------------------------------------------------------------------

var buttonHT2 = Ti.UI.createButton({
	top : '25%',
	height : '25%',
	width : '100%',
	backgroundImage : '../images/button/but_hSpot2.png'
});

buttonHT2.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : '../tables/hs2.js',
		title : 'Cannes',
		backgroundColor : '#fff',
		navBarHidden : false,
		barColor : '#111'
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

//---------------------------------------------------------------------------------------------------------

var buttonHT3 = Ti.UI.createButton({
	top : '50%',
	height : '25%',
	width : '100%',
	backgroundImage : '../images/button/but_hSpot3.png'
});

buttonHT3.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : '../tables/hs3.js',
		title : 'Veneza',
		backgroundColor : '#fff',
		navBarHidden : false,
		barColor : '#111'
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

//---------------------------------------------------------------------------------------------------------

var buttonHT4 = Ti.UI.createButton({
	top : '75%',
	height : '25%',
	width : '100%',
	backgroundImage : '../images/button/but_hSpot4.png'
});

buttonHT4.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : '../tables/hs4.js',
		title : 'Berlim',
		backgroundColor : '#fff',
		navBarHidden : false,
		barColor : '#111'
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

//---------------------------------------------------------------------------------------------------------

win.add(buttonHT1);
win.add(buttonHT2);
win.add(buttonHT3);
win.add(buttonHT4);