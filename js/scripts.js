$(function() {


	var $fontColor, $mainBorderSize, $mainBg, $mainBorderColor, $logoUrls, $headingColor, $ctaBg, $buttonColor, $borderRadius, $buttonBgColor, $footerColor, $footerBg, $footerButtonColor, $footerButtonBorder, $footerButtonBgColor
	// Build the Preview on page load
	var inputData = getFormValues();


	var initialTheme = {
	  "font-color": "#101010",
	  "main-border-size": "20",
	  "main-bg": "#FFFFFF",
	  "main-border-color": "#999999",
	  "logo-urls": "placehold.it/200X200",
	  "heading-color": "#101010",
	  "cta-bg": "#F2F2F2",
	  "button-color": "#FFFFFF",
	  "border-radius": "25",
	  "button-bg-color": "#999999",
	  "footer-color": "#575757",
	  "footer-bg": "#F2F2F2",
	  "footer-button-color": "#555555",
	  "footer-button-border": "#999999",
	  "footer-button-bg-color": "#FAFAFA"
	};


	makeRequest(initialTheme);

	

	// Custom Themes
	var defaultTheme = {
	  "font-color": "#101010",
	  "main-border-size": "20",
	  "main-bg": "#FFFFFF",
	  "main-border-color": "#999999",
	  "logo-urls": "placehold.it/200X200",
	  "heading-color": "#101010",
	  "cta-bg": "#F2F2F2",
	  "button-color": "#FFFFFF",
	  "border-radius": "25",
	  "button-bg-color": "#999999",
	  "footer-color": "#575757",
	  "footer-bg": "#F2F2F2",
	  "footer-button-color": "#555555",
	  "footer-button-border": "#999999",
	  "footer-button-bg-color": "#FAFAFA"
	};

	var summerTheme = {
	  "font-color": "#0B3836",
	  "main-border-size": "20",
	  "main-bg": "#20A39E",
	  "main-border-color": "#FFBA49",
	  "logo-urls": "placehold.it/200X200",
	  "heading-color": "#FFBA49",
	  "cta-bg": "#F2ECD3",
	  "button-color": "#166E6A",
	  "border-radius": "25",
	  "button-bg-color": "#FFBA49",
	  "footer-color": "#0B3836",
	  "footer-bg": "#FFBA49",
	  "footer-button-color": "#20A39E",
	  "footer-button-border": "#999999",
	  "footer-button-bg-color": "#F2ECD3"
	};

	
	var darkTheme = {
	  "font-color": "#111111",
	  "main-border-size": "10",
	  "main-bg": "#101010",
	  "main-border-color": "#000000",
	  "logo-urls": "placehold.it/200X200",
	  "heading-color": "#FFFFFF",
	  "cta-bg": "#FFFFFF",
	  "button-color": "#FFFFFF",
	  "border-radius": "10",
	  "button-bg-color": "#101010",
	  "footer-color": "#FFFFFF",
	  "footer-bg": "#101010",
	  "footer-button-color": "#AAAAAA",
	  "footer-button-border": "#AAAAAA",
	  "footer-button-bg-color": "#101010"
	};
	var moonTheme = {
	  "font-color": "#101010",
	  "main-border-size": "0",
	  "main-bg": "#F2F2F2",
	  "main-border-color": "#999999",
	  "logo-urls": "placehold.it/200X200",
	  "heading-color": "#666",
	  "cta-bg": "#FFFFFF",
	  "button-color": "#5C5C5C",
	  "border-radius": "25",
	  "button-bg-color": "#E0E0E0",
	  "footer-color": "#666666",
	  "footer-bg": "#F2F2F2",
	  "footer-button-color": "#666666",
	  "footer-button-border": "#E0E0E0",
	  "footer-button-bg-color": "#FFFFFF"
	};
	var boldTheme = {
		"font-color": "#101010",
		"main-border-size": "20",
		"main-bg": "#B02A1D",
		"main-border-color": "#DD3626",
		"logo-urls": "placehold.it/200X200",
		"heading-color": "#FFFFFF",
		"cta-bg": "#F2F2F2",
		"button-color": "#FFFFFF",
		"border-radius": "5",
		"button-bg-color": "#DD3626",
		"footer-color": "#575757",
		"footer-bg": "#EDEDED",
		"footer-button-color": "#DD3626",
		"footer-button-border": "#DD3626",
		"footer-button-bg-color": "#EDEDED"
		};

	var blueTheme = {
	  "font-color": "#212121",
	  "main-border-size": "5",
	  "main-bg": "#1A237E",
	  "main-border-color": "#1A237E",
	  "logo-urls": "placehold.it/200X200",
	  "heading-color": "#3392B5",
	  "button-color": "#FFFFFF",
	  "cta-bg": "#E8EAF6",
	  "border-radius": "0",
	  "button-bg-color": "#3F51B5",
	  "footer-color": "#E8EAF6",
	  "footer-bg": "#3F51B5",
	  "footer-button-color": "#E8EAF6",
	  "footer-button-border": "#7986CB",
	  "footer-button-bg-color": "#7986CB"
	};

	var googleTheme = {
	  "font-color": "#212121",
	  "main-border-size": "10",
	  "main-bg": "#795548",
	  "main-border-color": "#5D4037",
	  "logo-urls": "placehold.it/200X200",
	  "heading-color": "#FFFFFF",
	  "button-color": "#FFFFFF",
	  "cta-bg": "#FFFFFF",
	  "border-radius": "25",
	  "button-bg-color": "#4CAF50",
	  "footer-color": "#FFFFFF",
	  "footer-bg": "#5D4037",
	  "footer-button-color": "#FFFFFF",
	  "footer-button-border": "#4CAF50",
	  "footer-button-bg-color": "#4CAF50"
	};

	var amberTheme = {
	  "font-color": "#613D00",
	  "main-border-size": "10",
	  "main-bg": "#FDFFD1",
	  "main-border-color": "#FF5722",
	  "logo-urls": "placehold.it/200X200",
	  "heading-color": "#FF5722",
	  "button-color": "#FDFFD1",
	  "cta-bg": "#FDFFD1",
	  "border-radius": "25",
	  "button-bg-color": "#FFA000",
	  "footer-color": "#FDFFD1",
	  "footer-bg": "#FF5722",
	  "footer-button-color": "#FF5722",
	  "footer-button-border": "#FFA000",
	  "footer-button-bg-color": "#FFA000"
	};

	var pinkTheme = {
	  "font-color": "#EEEEEE",
	  "main-border-size": "10",
	  "main-bg": "#E91E63",
	  "main-border-color": "#E91E63",
	  "logo-urls": "placehold.it/200X200",
	  "heading-color": "#FCE4EC",
	  "button-color": "#FCE4EC",
	  "cta-bg": "#263238",
	  "border-radius": "15",
	  "button-bg-color": "#E91E63",
	  "footer-color": "#EEEEEE",
	  "footer-bg": "#263238",
	  "footer-button-color": "#E91E63",
	  "footer-button-border": "#FCE4EC",
	  "footer-button-bg-color": "#FCE4EC"
	};

	var themes = {
		defaultTheme: defaultTheme,
		summerTheme: summerTheme,
		darkTheme: darkTheme,
		moonTheme: moonTheme,
		boldTheme: boldTheme,
		blueTheme: blueTheme,
		googleTheme: googleTheme,
		amberTheme: amberTheme,
		pinkTheme: pinkTheme
	};

	// Listen for a change on all the input of our form
	$('input').keyup(function() {
		processResults($(this));
	});
	$('input').change(function() {
		processResults($(this));
	});

	// Listen for the click on the submit button
	$('#get-results').on('click', function(e) {
	    // Call the Template
	    makeRequest(getFormValues());
	});

	// Forcing the Select All on the Text Area with the code
	$('#results').click(function() {
		$(this).select();
	});

	$('#copy-text').click(function() {
		copyToClipboard($('#results'));
	});

function processResults(elem) {
	if(elem.attr('name') === 'custom-themes') {
			var themeName = elem.val();
			setFormValues(themes[themeName]);
			makeRequest(themes[themeName]);
	}
	else {
		var inputVal = elem.val();
		if(elem.hasClass('number') && isNaN(inputVal)) {
			elem.val(inputVal.match(/[0-9]*/));
			makeRequest(userValue);
		}
    	else {
    		inputId = elem.attr('id');
	    	var userValue = getFormValues();
	    	if(inputVal.indexOf('#') < 0) {
	    		userValue[inputId] = '#' + userValue[inputId];
	    	}
			makeRequest(userValue);
    	}
	}
}


function copyToClipboard(elem) {
	 var copyTextarea = elem;
	 copyTextarea.select();

	 try {
	   var successful = document.execCommand('copy');
	   var msg = successful ? 'successful' : 'unsuccessful';
	   console.log('Copying text command was ' + msg);
	 } catch (err) {
	   console.log('Oops, unable to copy');
	 }
	 copyTextarea.disabled = true;
}


function makeRequest(inputData) {
	var temp = $('#emailTemplates').val();
		var templateFile = './js/' + temp + '.hbs';
	$.ajax({
	    	url: templateFile
	    }).done(function(templateData) {
	    	// Compile the template
			var template = Handlebars.compile(templateData);
	    	var result = template(inputData);
	    	// Output the result on to the page
			$('#results').val(result);
			$('#preview').html(result);
	    });
}

function getFormValues() {


		$fontColor = $('#font-color').val();
		$mainBorderSize = $('#main-border-size').val();
		$mainBg = $('#main-bg').val();
		$mainBorderColor = $('#main-border-color').val();
		$logoUrls = $('#logo-urls').val();
		$headingColor = $('#heading-color').val();
		$ctaBg = $('#cta-bg').val();
		$buttonColor = $('#button-color').val();
		$borderRadius = $('#border-radius').val();
		$buttonBgColor = $('#button-bg-color').val();
		$footerColor = $('#footer-color').val();
		$footerBg = $('#footer-bg').val();
		$footerButtonColor = $('#footer-button-color').val();
		$footerButtonBorder = $('#footer-button-border').val();
		$footerButtonBgColor = $('#footer-button-bg-color').val();

		if($mainBorderSize === '') {
			$mainBorderSize = 20;
		}

		if($borderRadius === '') {
			$borderRadius = 25;
		}

		// if($fontColor.indexOf('#') < 0) {
		// 	$fontColor = '#' + $fontColor;
		// }
		// console.log($mainBg);
		// console.log($mainBg.indexOf('#'));
		// if($mainBg.indexOf('#') < 0) {
		// 	$mainBg = '#' + $mainBg;
		// 	console.log($mainBg);
		// }

		var inputDataObject = {
			'font-color': $fontColor,
			'main-border-size': $mainBorderSize,
			'main-bg': $mainBg,
			'main-border-color': $mainBorderColor,
			'logo-urls': $logoUrls,
			'heading-color': $headingColor,
			'button-color': $buttonColor,
			'cta-bg': $ctaBg,
			'border-radius': $borderRadius,
			'button-bg-color': $buttonBgColor,
			'footer-color': $footerColor,
			'footer-bg': $footerBg,
			'footer-button-bg-color': $footerButtonBgColor,
			'footer-button-color': $footerButtonColor,
			'footer-button-border': $footerButtonBorder,
			'footer-button-bg-color': $footerButtonBgColor
		};

		return inputDataObject;
	}

	function setFormValues(theme) {
		$('#font-color').val(theme['font-color']);
		$('#main-border-size').val(theme['main-border-size']);
		$('#main-bg').val(theme['main-bg']);
		$('#main-border-color').val(theme['main-border-color']);
		$('#logo-urls').val(theme['logo-urls']);
		$('#heading-color').val(theme['heading-color']);
		$('#cta-bg').val(theme['cta-bg']);
		$('#button-color').val(theme['button-color']);
		$('#border-radius').val(theme['border-radius']);
		$('#button-bg-color').val(theme['button-bg-color']);
		$('#footer-color').val(theme['footer-color']);
		$('#footer-bg').val(theme['footer-bg']);
		$('#footer-button-color').val(theme['footer-button-color']);
		$('#footer-button-border').val(theme['footer-button-border']);
		$('#footer-button-bg-color').val(theme['footer-button-bg-color']);
	}


});

