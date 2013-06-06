function ApplicationTabGroup() {
    //create module instance
    var self = Ti.UI.createTabGroup(),
        WindowRadio = require('ui/common/WindowRadio'),
        WindowJoias = require('ui/common/WindowJoias'),
        WindowHotspot = require('ui/common/WindowHotspot'),
        WindowLojas = require('ui/common/WindowLojas');

    //create app tabs
    var radioWin = new WindowRadio(),
        joiasWin = new WindowJoias(),
        hotspotWin = new WindowHotspot(),
        lojasWin = new WindowLojas();

    var radioTab = Ti.UI.createTab({
        title : L('Radio'),
        icon : '/images/radio.png',
        window : radioWin
    });
    radioWin.containingTab = radioTab;
    self.addTab(radioTab);

    var joiasTab = Ti.UI.createTab({
        title : L('Joias'),
        icon : '/images/joias.png',
        window : joiasWin
    });
    joiasWin.containingTab = joiasTab;
    self.addTab(joiasTab);

    var hotspotTab = Ti.UI.createTab({
        title : L('Hotspot'),
        icon : '/images/hotspot.png',
        window : hotspotWin
    });
    hotspotWin.containingTab = hotspotTab;
    self.addTab(hotspotTab);

    var lojasTab = Ti.UI.createTab({
        title: L('Nossas Lojas'),
        icon: '/images/lojas.png',
        window: lojasWin
    });
    lojasWin.containingTab = lojasTab;
    self.addTab(lojasTab);

    //-------------------------------------------------------

    return self;
};

module.exports = ApplicationTabGroup;
