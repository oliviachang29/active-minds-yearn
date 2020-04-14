$content = $('.blog-content')

$content.infiniteScroll({
  // options
  path: '/blog/{{#}}/',
  append: '.post-card-container',
  history: false,
  // status: '.page-load-status',
  // button: '.view-more-button',
  // scrollThreshold: false
});

$content.on( 'append.infiniteScroll', function( event, response ) {
	$('.post-card-image').trigger('unveil');
})