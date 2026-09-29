/* ==========================================================================
   gallery.js - lightbox for the gallery images.

   Rules for this build, same as script.js:
   - Progressive enhancement. Every thumbnail is already a real <a href> to
     the full-size file, so with this file missing or blocked the page still
     works and the images are still reachable. Nothing here is load-bearing.
   - This file owns nothing but the dialog. It does not touch the nav, the
     header, the reveal observer or the map embed.

   <dialog> is used rather than a hand-rolled overlay because it gives focus
   trapping, Escape-to-close, an inert background and correct focus restoration
   on return, all of which a custom overlay usually gets subtly wrong.
   ========================================================================== */

(function () {
  'use strict';

  var dlg = document.querySelector('[data-lightbox]');
  if (!dlg || typeof dlg.showModal !== 'function') return;

  var img = dlg.querySelector('.lightbox__img');
  var cap = dlg.querySelector('.lightbox__cap');
  var closeBtn = dlg.querySelector('[data-lightbox-close]');
  var links = document.querySelectorAll('[data-gallery-full]');
  if (!links.length || !img) return;

  // The alt is not repeated in the dialog: the caption directly beneath the
  // image already carries the title, and a screen reader announcing the same
  // sentence twice in a row is worse than announcing it once.
  img.setAttribute('alt', '');

  function open(src, caption) {
    img.setAttribute('src', src);
    if (cap) cap.textContent = caption || '';
    if (typeof dlg.showModal === 'function') {
      dlg.showModal();
    } else {
      dlg.setAttribute('open', '');
    }
    // Move focus into the dialog so keyboard users are not left behind it.
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    if (typeof dlg.close === 'function') {
      dlg.close();
    } else {
      dlg.removeAttribute('open');
    }
    // Release the decoded bitmap; six full-size JPEGs in memory is ~6 MB.
    img.removeAttribute('src');
  }

  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      // Leave the default alone for modified clicks so "open in new tab"
      // still works, and for anything the browser needs to handle itself.
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      open(a.getAttribute('data-gallery-full'), a.getAttribute('data-gallery-caption'));
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);

  // Clicking the backdrop closes. The dialog box is the only child, so a
  // target that is the dialog itself means the click landed on ::backdrop.
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg) close();
  });

  // `close` also fires for Escape and for a form submit, so release the image
  // on every path out of the dialog.
  dlg.addEventListener('close', function () {
    img.removeAttribute('src');
  });
})();
