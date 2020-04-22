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
      placeholder: '/assets/images/lazy.jpg',
      debug: true
  }).on('loaded.unveil', function () {
      this.style.opacity = 1;
  });
}

function initJS() {
    markCurrentLink()
    unveilImages($('img'))
    var feed = new Instafeed({
        limit: 3,
        accessToken: InstagramToken,
        template: '<a class="instagram-post" href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>'
    });
    feed.run();
}

initJS()