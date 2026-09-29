/* ==========================================================================
   script.js - progressive enhancement only.
   Rules for this build:
   - Core state runs UNCONDITIONALLY, never behind a DOM-element check
     (this caused the previous build to fail on pages without a lang select).
   - Nothing here is required for content to be visible or for SEO.
   - Language is handled by real /hi/ pages via hreflang, not by swapping
     innerHTML, so there is no translation dictionary to fall out of sync.
   ========================================================================== */

(function () {
  'use strict';

  /* ---------------------------------------------- mobile navigation */
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });
    // close on outside click and on Escape
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
        setOpen(false);
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ----------------------------------------------- sticky header state */
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------ reveal on scroll */
  // Safe by construction: the .reveal hidden state is scoped to html.js and
  // to elements that opted in, so with JS off nothing is ever invisible.
  var revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
      revealables.forEach(function (el) { io.observe(el); });
    } else {
      revealables.forEach(function (el) { el.classList.add('is-in'); });
    }
  }

  /* ---------------------------------------------------------- map embed */
  // The iframe only becomes visible once it has actually loaded, so a blocked
  // or slow embed leaves the branded placeholder and its Maps link showing
  // rather than a white rectangle.
  var map = document.querySelector('.map-frame iframe');
  if (map) {
    if (map.complete) map.classList.add('is-loaded');
    map.addEventListener('load', function () { map.classList.add('is-loaded'); });
    map.addEventListener('error', function () { map.classList.remove('is-loaded'); });
  }

  /* ------------------------------------- current-year stamp + counters */
  // Contact form is a static demo: intercept so it never silently posts
  // nowhere, and give the visitor something actionable instead.
  var form = document.querySelector('form.form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form__note');
      var msg = 'This form is not connected to a server yet. Please call or WhatsApp +91 9365474087 and the same person will reply.';
      if (note) {
        note.textContent = msg;
        note.style.color = '#dcae5f';
      } else {
        var p = document.createElement('p');
        p.className = 'form__note';
        p.textContent = msg;
        p.style.color = '#dcae5f';
        form.appendChild(p);
      }
    });
  }
})();
