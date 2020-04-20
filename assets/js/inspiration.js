$content = $('.inspiration-row')

$content.infiniteScroll({
  // options
  path: '/inspiration/{{#}}/',
  append: '.inspiration-infinite-scroll-append',
  history: false,
  status: '.page-load-status'
});

// try waiting until everything is fully loaded
$content.on( 'append.infiniteScroll', function( event, response ) {
	$('.inspiration-card-image').trigger('unveil');
})