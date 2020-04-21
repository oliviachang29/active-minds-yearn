function markCurrentLink(target) {
  $('.nav-item').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
}

function unveilImages(selector) {
  selector.unveil({
      offset: 200,
      // throttle: 200,
      placeholder: '/assets/images/lazy.jpg',
      // breakpoints: [
      //     {
      //         minWidth: 768,
      //         attribute: 'data-src-md'
      //     },
      //     {
      //         minWidth: 1200,
      //         attribute: 'data-src-lg'
      //     }
      // ],
      debug: true
  }).on('loading.unveil', function () {
      // console.log('Unveiling', this);
  }).on('loaded.unveil', function () {
      // console.log('Unveiled', this);
      this.style.opacity = 1;
  });

  // selector.unveil(200, function() {
  //   $(this).on('load', function() {
  //     this.style.opacity = 1;
  //   });
  // });
}

function initJS() {
    markCurrentLink()
    unveilImages($('img'))
    var feed = new Instafeed({
        limit: 3,
        accessToken: InstagramToken,
        debug: true,
        template: '<a class="col-md-4 instagram-post" href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>'
    });
    feed.run();
}
// executes this stuff before load
// $(function() {
//     const swup = new Swup();
//     swup.on('contentReplaced', function() {
//         initJS()
//     });
// });

initJS()