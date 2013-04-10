function hotSpot(data) {
	var self = Ti.UI.createWindow({
		title : data.cidade,
		color : '#EDDA74',
		font : {
			fontSize : 16,
			fontFamily : 'Times New Roman'
		},
		navBarHidden : false,
		backgroundImage : '../images/background/background.png'
	});

	var flexSpace = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});

	var backButton = Ti.UI.createButton({
		title : "Hotspot",
		style : Ti.UI.iPhone.SystemButtonStyle.DONE,
		zIndex : 9
	});

	backButton.addEventListener("click", function() {
		Titanium.UI.currentWindow.remove(self);
	});

	var titleLabel = Ti.UI.createLabel({
		text : data.cidade,
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
		zIndex : 10
	});

	topToolbar.items = [backButton, flexSpace, titleLabel, flexSpace];

	self.add(topToolbar);

	//----------------------------------------------------------------------------------------

	var tableview = Titanium.UI.createTableView({
		data : data.data,
		backgroundImage : '../images/background/background.png',
		backgroundColor : 'transparent',
		top : 26,
		left : -6,
		right : -6,
		style : Titanium.UI.iPhone.TableViewStyle.GROUPED
	});

	tableview.addEventListener('click', function(e) {

		var win = Titanium.UI.createWindow({
			title : e.rowData.title,
			navBarHidden : false,
			backgroundImage : '../images/background/background.png',
			barColor : '#111'
		});

		Titanium.UI.currentTab.open(win, {
			animated : true
		});

		var scrollView = Titanium.UI.createScrollView({
			width : 'auto',
			height : 'auto',
			top : 0,
			showVerticalScrollIndicator : true
		});

		var imageView = Titanium.UI.createImageView({
			backgroundImage : '../images/hotSpot/' + e.rowData.image,
			width : '100%',
			height : '36%',
			top : 0
		});

		scrollView.add(imageView);

		var label = Ti.UI.createLabel({
			// horizontalWrap : true,
			text : e.rowData.text,
			font : {
				fontSize : 18,
				fontFamily : 'HelveticaNeue-UltraLight'
			},
			top : '41%',
			color : '#ffff',
			// height : 'auto',
			width : '96%',
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
			// top : '110%'
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
		
		// scrollView.add(urlButton);
		label.add(urlButton);
		win.add(scrollView);
	});

	self.add(tableview);

	return self;
}

module.exports = hotSpot;
