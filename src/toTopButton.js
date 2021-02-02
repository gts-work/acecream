/* begin begin Back to Top button  */
(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('products__go_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('products__go_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(-100000, -200000);
      setTimeout(backToTop, 700);
    }
  }

  var goTopBtn = document.querySelector('.products__go_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
/* end begin Back to Top button  */