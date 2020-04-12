$content = $('.blog-content')

$content.infiniteScroll({
  // options
  path: '/blog/{{#}}/',
  append: '.post-container',
  history: false,
});

// try waiting until everything is fully loaded
$content.on( 'append.infiniteScroll', function( event, response ) {
  unveilImages($('.post-card-image'))
})