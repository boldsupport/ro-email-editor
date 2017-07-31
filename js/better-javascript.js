$(function() {

	// Initialize all the theme variables
	var $fontColor, $mainBorderSize, $mainBg, $mainBorderColor, $logoUrls, $headingColor, $ctaBg, $buttonColor, $borderRadius, $buttonBgColor, $footerColor, $footerBg, $footerButtonColor, $footerButtonBorder, $footerButtonBgColor
	// Build the Preview on page load
	var inputData = getFormValues();
  var ThemeClass = function(fontColor, mainBorderSize, mainBg, mainBorderColor, logoUrls, headingColor, ctaBg, buttonColor, borderRadius, buttonBgColor, footerColor, footerBg, footerButtonColor, footerButtonBorder, footerButtonBgColor) {
    this.fontColor = fontColor;
    this.mainBorderSize = mainBorderSize;
    this.mainBg = mainBg;
    this.mainBorderColor = mainBorderColor;
    this.logoUrls = logoUrls;
    this.headingColor = headingColor;
    this.ctaBg = ctaBg;
    this.buttonColor = buttonColor;
    this.borderRadius = borderRadius;
    this.buttonBgColor = buttonBgColor;
    this.footerColor = footerColor;
    this.footerBg = footerBg;
    this.footerButtonColor = footerButtonColor;
    this.footerButtonBorder = footerButtonBorder;
    this.footerButtonBgColor = footerButtonBgColor;
  };

  // Default theme that is called on page load
  var initialTheme = new ThemeClass("#101010", "20", "#FFFFFF", "#999999", "placehold.it/200X200", "#101010", "#F2F2F2", "#FFFFFF", "25", "#999999", "#575757", "#F2F2F2", "#555555", "#999999", "#FAFAFA", "#DDDDDD");


  // Calling the initial theme on page load
	makeRequest(initialTheme);

	// Custom Themes
	var defaultTheme = new ThemeClass("#101010","20","#FFFFFF","#999999","placehold.it/200X200","#101010","#F2F2F2","#FFFFFF","25","#999999","#575757","#F2F2F2","#555555","#999999","#FAFAFA","#DDDDDD");

	var summerTheme = new ThemeClass("#0B3836","20","#20A39E","#FFBA49","placehold.it/200X200","#FFBA49","#F2ECD3","#166E6A","25","#FFBA49","#0B3836","#FFBA49","#20A39E","#999999","#F2ECD3","#DDDDDD");



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
	  "footer-button-bg-color": "#101010",
	  "footer-border-color": "#DDDDDD"
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
	  "footer-button-bg-color": "#FFFFFF",
	  "footer-border-color": "#DDDDDD"
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
		"footer-button-bg-color": "#EDEDED",
	  	"footer-border-color": "#DDDDDD"
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
	  "footer-button-bg-color": "#7986CB",
	  "footer-border-color": "#DDDDDD"
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
	  "footer-button-bg-color": "#4CAF50",
	  "footer-border-color": "#DDDDDD"
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
	  "footer-button-bg-color": "#FFA000",
	  "footer-border-color": "#DDDDDD"
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
	  "footer-button-bg-color": "#FCE4EC",
	  "footer-border-color": "#DDDDDD"
	};

// Themes Object, carrying all the different themes
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

// Listen for a change on the template selector
	$('#emailTemplates').change(function() {
		makeRequest(getFormValues());
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

// Copy Text
	$('#copy-text').click(function() {
		copyToClipboard($('#results'));
	});

// Process results on all changes
function processResults(elem) {
	// Listen for the changes on the custom themes
	if(elem.attr('name') === 'custom-themes') {
			var themeName = elem.val();
			setFormValues(themes[themeName]);
			makeRequest(themes[themeName]);
	}
	// Else it should be coming from the form
	else {
		var inputVal = elem.val();
		if(elem.hasClass('number') && isNaN(inputVal)) {
			elem.val(inputVal.match(/[0-9]*/));
			console.log(elem.val());
			makeRequest(getFormValues());
			}
			// If the input is based on color
		else if(elem.hasClass('jscolor')) {
    		var inputId = elem.attr('id');
	    	var userValue = getFormValues();
	    	if(inputVal.indexOf('#') < 0) {
	    		userValue[inputId] = '#' + userValue[inputId];
	    	}
	    	console.log(userValue);
			makeRequest(userValue);
    	}

    	else {
    		makeRequest(getFormValues());
    	}
	}
}

// Copy to Clipboard helper function
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

// Make the AJAX call
function makeRequest(inputData) {
	// Check which template is selected
	var temp = $('#emailTemplates').val();
	// Call the template
	var templateFile = './js/templates/' + temp + '.hbs';

	// Make the AJAX call
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

// Get the form values
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
		$footerBorderColor = $('#footer-border-color').val();

		// Validation for the empty inputs and insert the default values
		if($mainBorderSize === '') {
			$mainBorderSize = '20';
		}

		if($borderRadius === '') {
			$borderRadius = '25';
		}

		// Make the object with the inputted values
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
			'footer-button-bg-color': $footerButtonBgColor,
			'footer-border-color': $footerBorderColor
		};

		return inputDataObject;
	}

	// Set the form values
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
		$('#footer-border-color').val(theme['footer-border-color']);

		// Get all the color inputs
		var colorInputs = $('.jscolor');

		var hexValue, foregroundColor;
		$.each(colorInputs, function(i, colorInput) {
			hexValue = $(this).val();
			foregroundColor = reverseColor(hexValue);

			// Set the foreground color based on what the result returns form the reverseColor function
		    $(this).css({
		    	'background': hexValue,
		    	'color': foregroundColor
		    });
		});
	}

	// Reverse Color Helper Function
	function reverseColor(hexColor) {
		var r = parseInt(hexColor.substr(1,2),16);
		var g = parseInt(hexColor.substr(3,2),16);
		var b = parseInt(hexColor.substr(6,4),16);
		var yiq = ((r*300)+(g*587)+(b*114))/1000;
		return (yiq >= 128) ? 'black' : 'white';
	}

});
