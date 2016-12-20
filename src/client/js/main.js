language = 'en';

$(document).ready(function() {
  navbarHandler();
  linksHandler();
  animation();
  localizacion();
  typingLandingTitle();
});

var navbarHandler = function() {
  $('.navbar').midnight();
}

var localizacion = function() {
  var elem = $('#i18n');
  var path = window.location.pathname;
  path = (path === '/en') ? '/ua' : '/en';
  language = path.substring(1, 3);
  elem.attr('href', path);
  elem.text(language);
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
    delay: 15000
  });
}

var typingLandingTitle = function() {
  var strings = ["IoT devices", "IoT applications", "IoT systems", "CRM systems", "WEB applications", "Mobile applications"];
  if (language === 'en') {
    strings = ['IoT пристрої', 'Програмне забезпечення IoT', 'IoT системи', 'CRM системи', 'Програмне забезпечення WEB', 'Програмне забезпечення смартфонів'];
  }

  $("#landing-title-iot").typed({
    strings: strings,
    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
    showCursor: false
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
