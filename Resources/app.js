// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//

//---------------------------------------------------winRadio Inicio-------------------------------------------
var winRadio = Titanium.UI.createWindow({
	navBarHidden : true,
	orientationModes : [Ti.UI.PORTRAIT],
	backgroundImage : 'images/background/backgroundRadio.png',
	url : 'views/winRadio.js'
});
var tabRadio = Titanium.UI.createTab({
	icon : 'radio.png',
	title : 'Rádio',
	window : winRadio
});
//---------------------------------------------------winJoias Inicio-------------------------------------------
var winJoias = Titanium.UI.createWindow({
	navBarHidden : true,
	orientationModes : [Ti.UI.PORTRAIT],
	url : 'views/winJoias.js'
});
var tabJoias = Titanium.UI.createTab({
	icon : 'diamond.png',
	title : 'Joias',
	window : winJoias
});
//---------------------------------------------------winHspot Inicio-------------------------------------------
var winHspot = Titanium.UI.createWindow({
	title : 'Hot Spot',
	navBarHidden : true,
	orientationModes : [Ti.UI.PORTRAIT],
	url : 'views/winHspot.js'
});
var tabHspot = Titanium.UI.createTab({
	icon : 'hot.png',
	title : 'Hotspot',
	window : winHspot
});
//---------------------------------------------------winMapa Inicio--------------------------------------------
var winMapas = Titanium.UI.createWindow({
	navBarHidden : true,
	orientationModes : [Ti.UI.PORTRAIT],
	url : 'views/winLojas.js'
});
var tabMapas = Titanium.UI.createTab({
	icon : 'map.png',
	title : 'Nossas Lojas',
	window : winMapas
});


//  add tabs
tabGroup.addTab(tabRadio);
tabGroup.addTab(tabJoias);
tabGroup.addTab(tabHspot);
tabGroup.addTab(tabMapas);

// open tab group
tabGroup.open();