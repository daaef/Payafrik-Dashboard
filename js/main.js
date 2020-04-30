const navLinks = document.querySelectorAll('.nav-links li a');
const myCanvas = document.querySelector('.my-canvas');
const modalClose = document.querySelectorAll('.modal-close');

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

navLinks.forEach(
  function(navlink) {
      navlink.addEventListener('click', function () {
          myCanvas.classList.add(navlink.dataset.linkClass)
      })
  },
  'myThisArg'
);


modalClose.forEach(
  function(modalLink) {
    modalLink.addEventListener('click', function () {
      myCanvas.className ="my-canvas"
    })
  },
  'myThisArg'
);
