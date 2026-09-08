(function () {
  'use strict';

  // ---- Header scroll state ----
  var header = document.querySelector('[data-site-header]');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- Mobile nav toggle ----
  var navToggle = document.querySelector('[data-nav-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');
  if (navToggle && mobileNav) {
    var closeNav = function () {
      navToggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    };
    var openNav = function () {
      navToggle.setAttribute('aria-expanded', 'true');
      mobileNav.classList.add('is-open');
      document.body.classList.add('nav-open');
    };
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeNav() : openNav();
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-item__q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  });

  // ---- Contact form (prototype only — no network submission) ----
  var contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      contactForm.querySelectorAll('[required]').forEach(function (field) {
        var wrap = field.closest('.field');
        var ok = field.value.trim().length > 0 &&
          (field.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()));
        if (wrap) wrap.classList.toggle('field--error', !ok);
        if (!ok) valid = false;
      });
      if (!valid) return;
      contactForm.classList.add('is-submitted');
      var success = document.querySelector('[data-form-success]');
      if (success) success.classList.add('is-visible');
    });
  }

  // ---- Scroll reveal ----
  // Deliberately position-based rather than IntersectionObserver: observer
  // callbacks don't fire in non-rendering contexts (hidden/occluded tabs), which
  // would leave content stuck at opacity 0. This can only ever fail open.
  var revealTargets = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (revealTargets.length) {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    revealTargets.forEach(function (el) {
      var group = el.closest('[data-reveal-group]');
      if (!group) return;
      var siblings = Array.prototype.slice.call(group.querySelectorAll('[data-reveal]'));
      el.style.setProperty('--reveal-delay', (siblings.indexOf(el) * 90) + 'ms');
    });

    var revealAll = function () {
      revealTargets.forEach(function (el) { el.classList.add('is-revealed'); });
      revealTargets.length = 0;
    };

    if (prefersReduced) {
      revealAll();
    } else {
      var ticking = false;
      var check = function () {
        ticking = false;
        var limit = (window.innerHeight || 0) * 0.92;
        for (var i = revealTargets.length - 1; i >= 0; i--) {
          var el = revealTargets[i];
          var rect = el.getBoundingClientRect();
          if (rect.top < limit && rect.bottom > 0) {
            el.classList.add('is-revealed');
            revealTargets.splice(i, 1);
          }
        }
        if (!revealTargets.length) {
          window.removeEventListener('scroll', request);
          window.removeEventListener('resize', request);
        }
      };
      var request = function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(check);
      };
      window.addEventListener('scroll', request, { passive: true });
      window.addEventListener('resize', request);
      check();
      // Safety net: never leave content hidden if layout settles late.
      window.setTimeout(check, 600);
      window.addEventListener('load', check);
    }
  }

  // ---- Footer year ----
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
