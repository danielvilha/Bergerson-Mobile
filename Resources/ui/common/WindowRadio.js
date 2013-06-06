Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;

function WindowRadio() {
    //---------------------------------------WINDOW e LOGO VIEW---------------------------------------------
    var self = Ti.UI.createWindow({
        navBarHidden : true,
        orientationModes : [Ti.UI.PORTRAIT],
        backgroundImage : 'images/background/background.png',
    });

    var logoView = Titanium.UI.createView({
        width : '90%',
        height : 55,
        top : 5

    });

    var imageLogo = Titanium.UI.createImageView({
        image : '/images/background/logo.png'
    });

    logoView.add(imageLogo);

    self.add(logoView);
    //------------------------------------------------------------------------------------------------------

    //--------------------------------------------LAYER VIEW------------------------------------------------
    //------------------------ É ADICIONADO ACTIVEINDICATOR, PLAY/PAUSE E VOLUME ---------------------------
    var layerView = Titanium.UI.createView({
        backgroundImage : '/images/background/layer.png',
        bottom : 15,
        width : '90%',
        height : 55,
    });

    var lessLabel = Titanium.UI.createLabel({
        text : '-',
        color : '#FFFF',
        font : {
            fontSize : 45,
            font : 'Optima-ExtraBlack'
        },
        left : 78
    });

    var moreLabel = Titanium.UI.createLabel({
        text : '+',
        color : '#FFFF',
        font : {
            fontSize : 25,
            font : 'Optima-ExtraBlack'
        },
        right : 15
    });

    layerView.add(lessLabel);
    layerView.add(moreLabel);
    //------------------------------------------------------------------------------------------------------

    //---------------------------------------ACTIVITY INDICATOR---------------------------------------------
    var actInd = Titanium.UI.createActivityIndicator({
        style : Titanium.UI.iPhone.ActivityIndicatorStyle,
        // zIndex : 9,
        left : 16.5
    });

    layerView.add(actInd);

    function indAudio() {
        if (audioPlayer.waiting) {
            actInd.show();
        } else {
            actInd.hide();
        }
    }

    var loopIndicator;
    //------------------------------------------------------------------------------------------------------

    //---------------------------------------------PLAUSE---------------------------------------------------
    var pauseResumeButton = Titanium.UI.createButton({
        backgroundImage : '/images/button/but_Play.png',
        enabled : false,
        height : '65%',
        width : '15%',
        left : 15
    });

    layerView.add(pauseResumeButton);

    pauseResumeButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            pauseResumeButton.backgroundImage = '/images/button/but_Pause.png';
            audioPlayer.start();
        } else {
            pauseResumeButton.backgroundImage = '/images/button/but_Play.png';
            audioPlayer.pause();
        }
    });
    //------------------------------------------------------------------------------------------------------

    //---------------------------------------------VOLUME---------------------------------------------------
    var volumeSlider = Ti.UI.createSlider({
        left : 105,
        right : 40,
        value : 100,
        min : 0,
        max : 100,
        zIndex : 9
    });

    layerView.add(volumeSlider);

    volumeSlider.addEventListener('change', function(e) {
        audioPlayer.volume = e.value / 100
    });

    self.add(layerView);
    //------------------------------------------FIM DO LAYER------------------------------------------------
    //------------------------------------------------------------------------------------------------------

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
            backgroundImage : '/images/button/but_RadioOff.png',
            backgroundFocusedImage : '/images/button/but_RadioOn.png',
            // selectedColor : '#EDDA74',
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
        self.add(objectButton);
        startStopButton.push(objectButton);
        startStopButton[i].urlStream = urlStream[i];
        startStopButton[i].addEventListener('click', function(e) {
            if (Ti.Network.online == false) {
                alert('Está aplicação necessita de uma conexão Internet para funcionar: Favor verefique sua conexão.');
            } else {
                for (var i = 0, s = startStopButton.length; i < s; i++) {
                    startStopButton[i].backgroundImage = '/images/button/but_RadioOff.png';
                }
                if (audioPlayer.playing || audioPlayer.paused) {
                    if (audioPlayer.url == e.source.urlStream) {
                        clearInterval(loopIndicator);
                        audioPlayer.stop();
                        e.source.backgroundImage = '/images/button/but_RadioOff.png';
                        pauseResumeButton.backgroundImage = '/images/button/but_Play.png';
                        pauseResumeButton.enabled = false;
                    } else {
                        audioPlayer.stop();
                        audioPlayer.url = e.source.urlStream;
                        e.source.backgroundImage = '/images/button/but_RadioOn.png';
                        pauseResumeButton.backgroundImage = '/images/button/but_Pause.png';
                        pauseResumeButton.enabled = true;
                        audioPlayer.start();
                    }
                } else {
                    audioPlayer.url = e.source.urlStream;
                    e.source.backgroundImage = '/images/button/but_RadioOn.png';
                    pauseResumeButton.backgroundImage = '/images/button/but_Pause.png';
                    pauseResumeButton.enabled = true;
                    audioPlayer.start();
                    loopIndicator = setInterval(indAudio, 100);
                }
            }
        });
    }

    //------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------

    return self;
};

module.exports = WindowRadio;
