// Get the header height

$(document).ready(function() {

// Get the header height
var headerHeight = $('header').outerHeight();

	$('.scroll').click(function(e) {

		var linkHref = $(this).attr('href');
		console.log(headerHeight);

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
	  }, 1000);
	  e.preventDefault();
	});
});


//Json Particles

particlesJS.load('particles-js', 'particles.json', function(){
	console.log('particles.json loaded...');
});

