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
  selector.unveil(0, function() {
    $(this).on('load', function() {
      this.style.opacity = 1;
    });
  });
}

function initJS() {
    markCurrentLink()
    unveilImages($('.lazy'))

}
// executes this stuff before load
// $(function() {
//     const swup = new Swup();
//     swup.on('contentReplaced', function() {
//         initJS()
//     });
// });

initJS()