$(document).ready(function() {
  navbarHandler();
  animation();
});

var navbarHandler = function() {
  $('.navbar').midnight();
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
