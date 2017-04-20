$(function() {
	var $fontColor, $mainBorderSize, $mainBg, $mainBorderColor, $logoUrls, $headingColor, $ctaBg, $buttonColor, $borderRadius, $buttonBgColor, $footerColor, $footerBg, $footerButtonColor, $footerButtonBorder, $footerButtonBgColor
	// Build the Preview on page load
	getFormValues();

	makeRequest();

	// Listen for a change on all the input of our form
	$('input').change(function() {
		getFormValues();
		makeRequest();
	});

	// Listen for the click on the submit button
	$('#get-results').on('click', function(e) {
	    // Get the values of the inputs in the form
	    getFormValues();

	    // Call the Template
	    makeRequest();
	});

	// Forcing the Select All on the Text Area with the code
	$('#results').click(function() {
		$(this).select();
	});


function makeRequest() {
	$.ajax({
	    	url: './js/manage_sub.hbs',
	    }).done(function(templateData) {
	    	// Compile the template
			var template = Handlebars.compile(templateData);
			var inputData = {
								'font-color': $fontColor,
								'main-border-size': $mainBorderSize,
								'main-bg': $mainBg,
								'main-border-color': $mainBorderColor,
								'logo-urls': 'http://' + $logoUrls,
								'heading-color': $headingColor,
								'cta-bg': $ctaBg,
								'button-color': $buttonColor,
								'border-radius': $borderRadius,
								'button-bg-color': $buttonBgColor,
								'footer-color': $footerColor,
								'footer-bg': $footerBg,
								'footer-button-color': $footerButtonColor,
								'footer-button-border': $footerButtonBorder,
								'footer-button-bg-color': $footerButtonBgColor
							};
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
	}


});

