Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;

//Criando a janela Rádio
var win = Titanium.UI.currentWindow;

//---------------------------------------ACTIVITY INDICATOR---------------------------------------------
var actInd = Titanium.UI.createActivityIndicator({
	style : Titanium.UI.iPhone.ActivityIndicatorStyle,
	zIndex : 9,
	top : '85.4%',
	left : 33
});

win.add(actInd);

function indAudio() {
	if (audioPlayer.waiting) {
		actInd.show();
	} else {
		actInd.hide();
	}
	//console.log(audioPlayer.waiting);
}

var loopIndicator;

//---------------------------------------------PLAUSE---------------------------------------------------
var pauseResumeButton = Titanium.UI.createButton({
	backgroundImage : '../images/button/but_Play.png',
	enabled : false,
	height : '10%',
	left : 28,
	top : '85%',
	width : '15%'
});

win.add(pauseResumeButton);

pauseResumeButton.addEventListener('click', function() {
	if (audioPlayer.paused) {
		pauseResumeButton.backgroundImage = '../images/button/but_Pause.png';
		audioPlayer.start();
	} else {
		pauseResumeButton.backgroundImage = '../images/button/but_Play.png';
		audioPlayer.pause();
	}
});

//---------------------------------------------VOLUME---------------------------------------------------
var volumeSlider = Ti.UI.createSlider({
	left : '35%',
	right : 55,
	top : '87%',
	value : 100,
	min : 0,
	max : 100,
	zIndex : 9
});

win.add(volumeSlider);

volumeSlider.addEventListener('change', function(e) {
	audioPlayer.volume = e.value / 100
});

//--------------------------------------------PLAYER----------------------------------------------------
var button = ['LOUNGE', 'ROCK', 'MPB', 'POP'];
var startStopButton = [];
var cont = 20;

var urlStream = ['http://200.195.168.12:9191', 'http://200.195.168.12:9292', 'http://200.195.168.12:9393', 'http://200.195.168.12:9494'];

var audioPlayer = Ti.Media.createAudioPlayer({
	url : urlStream[0],
	allowBackground : true
});

for (var i = 0, s = button.length; i < s; i++) {
	var objectButton = Ti.UI.createButton({
		title : button[i],
		backgroundImage : '../images/button/but_RadioOff.png',
		selectedColor : '#EDDA74',
		height : '14%',
		center : '50%',
		top : cont + '%',
		font : {
			fontSize : 24,
			fontFamily : 'Times New Roman'

		},
		color : '#EDDA74',
		width : '85%'
	});

	cont += 15;
	win.add(objectButton);
	startStopButton.push(objectButton);
	startStopButton[i].urlStream = urlStream[i];
	startStopButton[i].addEventListener('click', function(e) {
		if (Ti.Network.online == false) {
			alert('Está aplicação necessita de uma conexão Internet para funcionar: Favor verefique sua conexão.');
		} else {
			for (var i = 0, s = startStopButton.length; i < s; i++) {
				startStopButton[i].backgroundImage = '../images/button/but_RadioOff.png';
			}
			if (audioPlayer.playing || audioPlayer.paused) {
				if (audioPlayer.url == e.source.urlStream) {
					clearInterval(loopIndicator);
					audioPlayer.stop();
					e.source.backgroundImage = '../images/button/but_RadioOff.png';
					pauseResumeButton.backgroundImage = '../images/button/but_Play.png';
					pauseResumeButton.enabled = false;
				} else {
					audioPlayer.stop();
					audioPlayer.url = e.source.urlStream;
					e.source.backgroundImage = '../images/button/but_RadioOn.png';
					pauseResumeButton.backgroundImage = '../images/button/but_Pause.png';
					pauseResumeButton.enabled = true;
					audioPlayer.start();
				}
			} else {
				audioPlayer.url = e.source.urlStream;
				e.source.backgroundImage = '../images/button/but_RadioOn.png';
				pauseResumeButton.backgroundImage = '../images/button/but_Pause.png';
				pauseResumeButton.enabled = true;
				audioPlayer.start();
				loopIndicator = setInterval(indAudio, 100);
			}
		}
	});
}

//--------------------------------------------------------------------------------------------
win.open();