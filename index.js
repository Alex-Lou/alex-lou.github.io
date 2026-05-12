(function () {
  'use strict';

  // ═══════════════════════════════════════════
  // NEURAL PARTICLE SYSTEM
  // ═══════════════════════════════════════════

  var canvas = document.getElementById('particleCanvas');
  var ctx = canvas.getContext('2d');
  var particles = [];
  var mouseX = -1000;
  var mouseY = -1000;
  var particleCount = 80;
  var connectionDistance = 150;
  var mouseRadius = 200;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = Math.random() * 2 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
    // Color variety: purple, cyan, or white
    var colors = [
      [108, 99, 255],   // purple
      [0, 210, 255],    // cyan
      [139, 92, 246],   // violet
      [200, 200, 255]   // soft white
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.pulseSpeed = Math.random() * 0.02 + 0.005;
    this.pulsePhase = Math.random() * Math.PI * 2;
  }

  Particle.prototype.update = function (time) {
    this.x += this.vx;
    this.y += this.vy;

    // Soft bounce at edges
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

    // Mouse attraction (gentle pull)
    var dx = mouseX - this.x;
    var dy = mouseY - this.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < mouseRadius && dist > 0) {
      var force = (mouseRadius - dist) / mouseRadius * 0.008;
      this.vx += dx / dist * force;
      this.vy += dy / dist * force;
    }

    // Speed damping
    this.vx *= 0.999;
    this.vy *= 0.999;

    // Pulse opacity
    this.currentOpacity = this.opacity * (0.6 + 0.4 * Math.sin(time * this.pulseSpeed + this.pulsePhase));
  };

  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(' + this.color[0] + ',' + this.color[1] + ',' + this.color[2] + ',' + this.currentOpacity + ')';
    ctx.fill();

    // Glow
    if (this.radius > 1.2) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + this.color[0] + ',' + this.color[1] + ',' + this.color[2] + ',' + (this.currentOpacity * 0.1) + ')';
      ctx.fill();
    }
  };

  // Initialize particles
  for (var i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function drawConnections(time) {
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          var alpha = (1 - dist / connectionDistance) * 0.12;
          // Pulse the connections
          alpha *= 0.7 + 0.3 * Math.sin(time * 0.001 + i * 0.1);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(108, 99, 255, ' + alpha + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Mouse connections
    for (var k = 0; k < particles.length; k++) {
      var dx2 = mouseX - particles[k].x;
      var dy2 = mouseY - particles[k].y;
      var dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

      if (dist2 < mouseRadius) {
        var alpha2 = (1 - dist2 / mouseRadius) * 0.2;
        ctx.beginPath();
        ctx.moveTo(particles[k].x, particles[k].y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = 'rgba(0, 210, 255, ' + alpha2 + ')';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  var animTime = 0;
  function animateParticles() {
    animTime++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < particles.length; i++) {
      particles[i].update(animTime);
      particles[i].draw();
    }

    drawConnections(animTime);
    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  // Track mouse for particles & cursor glow
  var cursorGlow = document.querySelector('.cursor-glow');
  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorGlow) {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    }
  });

  document.addEventListener('mouseleave', function () {
    mouseX = -1000;
    mouseY = -1000;
  });

  // ═══════════════════════════════════════════
  // NAVIGATION
  // ═══════════════════════════════════════════

  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var sections = document.querySelectorAll('section[id], header[id]');
  var navLinksList = document.querySelectorAll('.nav-link');

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

  // ═══════════════════════════════════════════
  // TYPING EFFECT
  // ═══════════════════════════════════════════

  var typingEl = document.getElementById('typingText');
  var words = ['Senior Full Stack Dev', 'Tech Lead', 'Java Architect', 'Microservices Builder', 'Cross-Platform Dev', 'Sound Engineer', 'Pentester'];
  var wordIndex = 0;
  var charIndex = 0;
  var isDeleting = false;

  function typeEffect() {
    var currentWord = words[wordIndex];
    typingEl.textContent = isDeleting
      ? currentWord.substring(0, charIndex--)
      : currentWord.substring(0, charIndex++);

    var delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex > currentWord.length) {
      delay = 2500;
      isDeleting = true;
    } else if (isDeleting && charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 500;
    }

    setTimeout(typeEffect, delay);
  }

  typeEffect();

  // ═══════════════════════════════════════════
  // SCROLL REVEAL
  // ═══════════════════════════════════════════

  var revealElements = document.querySelectorAll('[data-reveal]');

  function revealOnScroll() {
    var trigger = window.innerHeight * 0.88;
    revealElements.forEach(function (el) {
      if (el.getBoundingClientRect().top < trigger) {
        el.classList.add('revealed');
      }
    });
  }

  // ═══════════════════════════════════════════
  // TILT EFFECT ON PROJECT CARDS (skip experience headers)
  // ═══════════════════════════════════════════

  var glowCards = document.querySelectorAll('.glow-card:not(.exp-header)');
  glowCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;
      var y = (e.clientY - rect.top) / rect.height;
      var tiltX = (y - 0.5) * 6;
      var tiltY = (x - 0.5) * -6;
      card.style.transform = 'perspective(800px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg) translateY(-4px)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  });

  // ═══════════════════════════════════════════
  // EXPERIENCE TIMELINE ACCORDIONS
  // ═══════════════════════════════════════════

  function bindAccordion(headerSelector, itemSelector) {
    document.querySelectorAll(headerSelector).forEach(function (header) {
      header.addEventListener('click', function (e) {
        e.preventDefault();
        var item = header.closest(itemSelector);
        if (!item) return;
        var willOpen = !item.classList.contains('open');
        item.classList.toggle('open', willOpen);
        header.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
    });
  }

  bindAccordion('.exp-header', '.exp-item');
  bindAccordion('.exp-sub-header', '.exp-sub-item');

  // Auto-open the current role on first paint for a delicious entrance
  var currentItem = document.querySelector('.exp-item-current');
  if (currentItem) {
    requestAnimationFrame(function () {
      setTimeout(function () {
        currentItem.classList.add('open');
        var btn = currentItem.querySelector('.exp-header');
        if (btn) btn.setAttribute('aria-expanded', 'true');
      }, 600);
    });
  }

  // ═══════════════════════════════════════════
  // SCROLL HANDLER
  // ═══════════════════════════════════════════

  var ticking = false;
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
