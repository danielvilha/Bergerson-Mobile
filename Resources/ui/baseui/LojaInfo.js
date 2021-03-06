var win = Ti.UI.currentWindow;
var loja = win.loja;

win.navBarHidden = false;

var nome = Ti.UI.createLabel({
    color : '#EDDA74',
    text : loja.nome,
    font : {
        fontSize : 19,
        fontFamily : 'Times New Roman'
    },
    textAlign : 'center',
    top : 30,
    width : 'auto'
})

var endereco = Ti.UI.createLabel({
    color : '#EDDA74',
    text : loja.endereco,
    font : {
        fontSize : 16,
        fontFamily : 'Times New Roman'
    },
    textAlign : 'center',
    top : 30,
    width : 'auto'
})

var telefone = Ti.UI.createLabel({
    color : '#EDDA74',
    text : loja.telefone,
    font : {
        fontSize : 16,
        fontFamily : 'Times New Roman'
    },
    textAlign : 'center',
    top : 30,
    width : 'auto'
});

var btFone = Titanium.UI.createButton({
    title : 'Clique aqui para entrar em contato',
    backgroundImage : '/images/button/but_RadioOff.png',
    font : {
        fontSize : 16,
        fontFamily : 'Times New Roman'
    },
    color : '#EDDA74',
    height : 55,
    top : 24,
    //zIndex : 8,
    width : '85%'
});

btFone.addEventListener('click', function(e) {
    var confirmCall = Titanium.UI.createAlertDialog({
        message : '\nVocê gostaria de fazer esta ligação?\n',
        buttonNames : ['Sim', 'Não']
    });
    confirmCall.show();
    confirmCall.addEventListener('click', function(event) {
        if (event.index == 0) {
            call();
        }
    });
    // console.log(loja.fone);
});

function call() {
    Titanium.Platform.openURL('tel:' + loja.fone);
}

var mapa = Titanium.UI.createButton({
    color : '#EDDA74',
    title : 'Ver no Mapa',
    font : {
        fontSize : 20,
        fontFamily : 'Times New Roman'
    },
    backgroundImage : '/images/button/but_Map.png',
    top : 27,
    height : 55,
    width : 200
});

mapa.addEventListener('click', function() {
    var win = Titanium.UI.createWindow({
        navBarHidden : false,
        url : "LojaMapa.js",
        title : loja.nome,
        loja : loja
    });

    var flexSpace = Ti.UI.createButton({
        systemButton : Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });

    var backButton = Ti.UI.createButton({
        title : "Retornar",
        style : Ti.UI.iPhone.SystemButtonStyle.DONE,
    });

    var titleLabel = Ti.UI.createLabel({
        text : loja.nome,
        font : {
            fontSize : 12,
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
        win.remove(topToolbar);
        win.close();
    });

    topToolbar.items = [backButton, flexSpace, titleLabel, flexSpace];

    win.add(topToolbar);

    win.open({
        animated : true
    });
});

win.add(nome);
win.add(endereco);
win.add(telefone);
win.add(btFone);
win.add(mapa); 