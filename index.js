(function () {
  'use strict';

  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var sections = document.querySelectorAll('section[id], header[id]');
  var navLinksList = document.querySelectorAll('.nav-link');
  var typingEl = document.getElementById('typingText');
  var revealElements = document.querySelectorAll('[data-reveal]');
  var words = ['Developer', 'Designer', '2D Animator', 'Sound Designer', 'AI Builder'];
  var wordIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var ticking = false;

  function updateNavbar() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  function updateActiveLink() {
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinksList.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  function typeEffect() {
    var currentWord = words[wordIndex];
    typingEl.textContent = isDeleting
      ? currentWord.substring(0, charIndex--)
      : currentWord.substring(0, charIndex++);

    var delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex > currentWord.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(typeEffect, delay);
  }

  typeEffect();

  function revealOnScroll() {
    var trigger = window.innerHeight * 0.88;
    revealElements.forEach(function (el) {
      if (el.getBoundingClientRect().top < trigger) {
        el.classList.add('revealed');
      }
    });
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateNavbar();
        updateActiveLink();
        revealOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  updateNavbar();
  revealOnScroll();
})();
