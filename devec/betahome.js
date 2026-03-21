(function () {
  'use strict';

  var text1 = document.getElementById('text1');
  var text2 = document.getElementById('text2');

  var texts = [
    { text: 'Everything',  color: '#A52A2A' },
    { text: 'Everywhere',  color: '#B8860B' },
    { text: 'Art',         color: '#FF8C00' },
    { text: 'is',          color: '#8B0000' },
    { text: 'with',        color: '#DAA520' },
    { text: 'YOU',         color: '#F08080' },
    { text: 'in your',     color: '#8B0000' },
    { text: '...LIFE!',    color: '#A52A2A' },
  ];

  var morphTime = 1;
  var cooldownTime = 0.25;
  var textIndex = texts.length - 1;
  var time = new Date();
  var morph = 0;
  var cooldown = cooldownTime;

  text1.textContent = texts[textIndex % texts.length].text;
  text1.style.color = texts[textIndex % texts.length].color;
  text2.textContent = texts[(textIndex + 1) % texts.length].text;
  text2.style.color = texts[(textIndex + 1) % texts.length].color;

  function setMorph(fraction) {
    text2.style.filter = 'blur(' + Math.min(8 / fraction - 8, 100) + 'px)';
    text2.style.opacity = (Math.pow(fraction, 0.1) * 100) + '%';
    text2.style.color = texts[(textIndex + 1) % texts.length].color;

    var inv = 1 - fraction;
    text1.style.filter = 'blur(' + Math.min(8 / inv - 8, 100) + 'px)';
    text1.style.opacity = (Math.pow(inv, 0.2) * 100) + '%';
    text1.style.color = texts[textIndex % texts.length].color;

    text1.textContent = texts[textIndex % texts.length].text;
    text2.textContent = texts[(textIndex + 1) % texts.length].text;
  }

  function animate() {
    requestAnimationFrame(animate);
    var now = new Date();
    var shouldIncrement = cooldown > 0;
    var dt = (now - time) / 1500;
    time = now;
    cooldown -= dt;

    if (cooldown <= 0) {
      if (shouldIncrement) textIndex++;
      morph -= cooldown;
      cooldown = 0;
      var fraction = morph / morphTime;
      if (fraction > 1) { cooldown = cooldownTime; fraction = 1; }
      setMorph(fraction);
    } else {
      morph = 0;
      text2.style.filter = '';
      text2.style.opacity = '100%';
      text2.style.color = texts[(textIndex + 1) % texts.length].color;
      text1.style.filter = '';
      text1.style.opacity = '0%';
      text1.style.color = texts[textIndex % texts.length].color;
    }
  }

  animate();
})();
