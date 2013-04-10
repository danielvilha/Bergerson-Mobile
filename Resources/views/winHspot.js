Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;

//Criando a Tab Hot Spot
var win = Titanium.UI.currentWindow;
win.title = 'Hotspot';
win.navBarHidden = true;

var HSpot = require('views/hotSpot');

var data = [];
var hsButton = [];

var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "hotspot.json");

if (file.exists()) {
	var json = file.read();
	var d = JSON.parse(json);
	json = null;
	data = d.hotspot;
}

var cont = 0;

for (var i = 0, s = data.length; i < s; i++) {

	var hotSpotButton = Ti.UI.createButton({
		top : cont + '%',
		height : '25%',
		width : '100%',
		backgroundImage : '../images/button/' + data[i].cidades[0].button,
		index : i
	});

	cont += 25;
	win.add(hotSpotButton);
	hsButton.push(hotSpotButton);

	hsButton[i].addEventListener('click', function(e) {
		var i = e.source.index;
		
		var hotSpot = new HSpot(data[i].cidades[0]);
		
		win.add(hotSpot);
	});
}