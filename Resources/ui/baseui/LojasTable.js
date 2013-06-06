var lojas_data = [];
var win = Ti.UI.currentWindow;
var data = win.lojas;

win.navBarHidden = false;

for (var i in data) {
    var l = data[i];
    lojas_data.push({
        title : l.nome,
        loja : l,
        color : '#EDDA74',
        font : {
            fontSize : 16,
            fontFamily : 'Times New Roman'
        },
        hasChild : true,
        backgroundGradient : {
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
        }
    });
    //alert(l.nome);
}

var table = Ti.UI.createTableView({
    backgroundImage : '/images/background/background.png',
    backgroundColor : 'transparent',
    top : 25,
    left : -8,
    right : -8,
    style : Titanium.UI.iPhone.TableViewStyle.GROUPED,
    data : lojas_data
});

table.addEventListener("click", function(e) {

    var win = Titanium.UI.createWindow({
        backgroundImage : '/images/background/background.png',
        navBarHidden : false,
        barColor : '#111',
        url : "LojaInfo.js",
        title : e.rowData.title,
        layout : 'vertical',
        loja : e.rowData.loja
    });

    var flexSpace = Ti.UI.createButton({
        systemButton : Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });

    var backButton = Ti.UI.createButton({
        title : "Retornar",
        style : Ti.UI.iPhone.SystemButtonStyle.DONE,
    });

    var titleLabel = Ti.UI.createLabel({
        text : e.rowData.loja.cidade,
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
        win.remove(topToolbar);
        win.close();
    });

    topToolbar.items = [backButton, flexSpace, titleLabel, flexSpace];

    win.add(topToolbar);

    win.open({
        animated : true
    });
});

// add table view to the window
Titanium.UI.currentWindow.add(table); 