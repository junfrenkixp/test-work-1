;(function() {

  (function(ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        if (!this) return null;
        if (this.matches(selector)) return this;
        if (!this.parentElement) {return null}
        else return this.parentElement.closest(selector)
      };
  }(Element.prototype));

  let itemWrap = document.querySelectorAll('.main__examples-tab');

  for (let item = 0; item < itemWrap.length; item++) {
    itemWrap[item].addEventListener('click', function(event) {
      let items = document.querySelectorAll('.main__examples-tab__item');
      for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('active')) {
          items[i].classList.remove('active');
        }
      }

      let item = event.target.closest('.main__examples-tab__item');
      item.classList.add('active');
    })
  }
})()
