$(document).ready(function() {
	if (Cookies.get('newsletterShown') == null) {
			// only show the newsletter if the cookie hasn't been set before
			setTimeout(function(){
			  $('#newsletterModal').modal('show');
			}, 5 * 1000);
	    // set a cookie to expire in 2 days
	    Cookies.set('newsletterShown', true, {expires: 2})
	}
});

// When a user signs up
$('#mc-embedded-subscribe').on("click", function() {
	// never show the newsletter again
	Cookies.set('newsletterShown', true)
})