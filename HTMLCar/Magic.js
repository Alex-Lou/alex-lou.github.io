(function () {
  'use strict';

  var scene = document.querySelector('.scene');

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      scene.classList.toggle('paused');
    }
  });

  scene.addEventListener('click', function () {
    scene.classList.toggle('paused');
  });
})();
