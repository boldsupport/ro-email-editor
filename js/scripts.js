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

	var themes = {defaultTheme: defaultTheme,
	summerTheme: summerTheme,
	darkTheme: darkTheme,
	moonTheme: moonTheme,
	boldTheme: boldTheme
	};

	// Listen for a change on all the input of our form
	$('input').change(function() {
		if($(this).attr('name') === 'custom-themes') {
			var themeName = $(this).val();
			setFormValues(themes[themeName]);
			makeRequest(themes[themeName]);
		}
		else {
			var userValue = getFormValues();
			makeRequest(userValue);
		}
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
	$.ajax({
	    	url: './js/manage_sub.hbs',
	    }).done(function(templateData) {
	    	// Compile the template
			var template = Handlebars.compile(templateData);

			console.log(inputData);
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

