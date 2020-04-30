const navLinks = document.querySelectorAll('.nav-links li a');
const myCanvas = document.querySelector('.my-canvas');

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
