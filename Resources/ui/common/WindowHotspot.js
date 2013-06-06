Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;

function WindowHotspot() {
    var self = Ti.UI.createWindow({
        title : 'Hot Spot',
        navBarHidden : true,
        orientationModes : [Ti.UI.PORTRAIT],
    });

    var HSpot = require('/ui/baseui/hotSpot');

    var data = [];
    var hsButton = [];

    var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "/ui/control/hotspot.json");

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
            backgroundImage : '/images/button/' + data[i].cidades[0].button,
            index : i
        });

        cont += 25;
        self.add(hotSpotButton);
        hsButton.push(hotSpotButton);

        hsButton[i].addEventListener('click', function(e) {
            var i = e.source.index;

            var hotSpot = new HSpot(data[i].cidades[0]);

            var flexSpace = Ti.UI.createButton({
                systemButton : Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
            });

            var backButton = Ti.UI.createButton({
                title : "Hotspot",
                style : Ti.UI.iPhone.SystemButtonStyle.DONE,
            });

            var titleLabel = Ti.UI.createLabel({
                text : data[i].cidades[0].cidade,
                font : {
                    fontSize : 20,
                    fontWeight : 'bold'
                },
                color : '#ffffff',
                textAlign : 'center'
            });

            var topToolbar = Titanium.UI.iOS.createToolbar({
                top : 0,
                borderTop : false,
                borderBottom : true,
                translucent : false,
                backgroundColor : 'black',
                barColor : '#000',
                zIndex : 9
            });

            backButton.addEventListener("click", function() {
                self.remove(topToolbar);
                self.remove(hotSpot);
            });

            topToolbar.items = [backButton, flexSpace, titleLabel, flexSpace];

            self.add(topToolbar);

            self.add(hotSpot);
        });
    }

    return self;
};

module.exports = WindowHotspot;
