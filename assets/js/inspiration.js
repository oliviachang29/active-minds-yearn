$content = $('.inspiration-row')

$content.infiniteScroll({
  // options
  path: '/inspiration/{{#}}/',
  append: '.motivation-infinite-scroll-append',
  history: false,
});

// try waiting until everything is fully loaded
$content.on( 'append.infiniteScroll', function( event, response ) {
  unveilImages($('.motivation-card-image'))
})