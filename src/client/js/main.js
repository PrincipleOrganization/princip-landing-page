$(document).ready(function() {
  navbarHandler();
  linksHandler();
  animation();
});

var navbarHandler = function() {
  $('.navbar').midnight();
}

var linksHandler = function() {
  var navLinks = ['#products', '#services', '#clients', '#about', '#contacts'];
  for (var i=0; i<navLinks.length; i++) {
    var navLink = navLinks[i];
    $(".navbar-link[href='" + navLink + "']").click(function(e) {
      scrollToElement(e);
    });

    if (navLink != '#contacts') {
      $(".contacts-nav-link[href='" + navLink + "']").click(function(e) {
        scrollToElement(e);
      });
    }
  }

  $('.navbar-brand').click(function(e) {
    scrollToElement(e);
  });

  $('.landing-button').click(function(e) {
    scrollToElement(e);
  });
}

var animation = function() {
  anime({
    targets: '#title-img',
    rotate: {
      value: 180,
      duration: 2000,
      easing: 'easeInOutQuad'
    },
    loop: true,
    direction: 'normal',
    delay: 30000
  });
}

var scrollToElement = function(e) {
  e.preventDefault();
  var hash = e.target.hash;
  var point = 0;
  if (hash) {
    point = $('section' + hash).offset().top - 70;
  }

  $('html, body').animate({
    scrollTop: point
  },500);
}
