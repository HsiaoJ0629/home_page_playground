/* Theme (light / dark / system), mobile nav toggle, and art image fallback.
   Load in <head> WITHOUT defer so the theme applies before first paint:
   <script src="../../shared/js/theme-manager.js"></script>

   Optional <html> attributes:
     data-default-theme="dark"   theme used when the visitor has no saved choice (default: system)
     data-theme-key="ronin-02"   storage key suffix (default: the page's folder, so variants don't share a choice)
*/
(function () {
  'use strict';

  var root = document.documentElement;
  var THEMES = ['light', 'dark', 'system'];
  var key = 'theme:' + (root.getAttribute('data-theme-key') || location.pathname.replace(/[^/]*$/, ''));

  root.classList.add('has-js');
  if (window.top !== window.self) root.classList.add('is-embedded'); // inside the gallery preview iframe

  function readStored() {
    try {
      var v = localStorage.getItem(key);
      return THEMES.indexOf(v) > -1 ? v : null;
    } catch (e) { return null; }
  }

  function store(theme) {
    try { localStorage.setItem(key, theme); } catch (e) { /* storage unavailable: still apply */ }
  }

  var defaultTheme = root.getAttribute('data-default-theme');
  var current = readStored() || (THEMES.indexOf(defaultTheme) > -1 ? defaultTheme : 'system');

  function apply(theme) {
    current = theme;
    if (theme === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', theme);
    var opts = document.querySelectorAll('.theme-toggle__option');
    for (var i = 0; i < opts.length; i++) {
      opts[i].setAttribute('aria-pressed', String(opts[i].getAttribute('data-theme-value') === theme));
    }
  }

  apply(current);

  /* Image fallback: error events don't bubble, so listen in the capture phase.
     Works for images that fail while parsing, since this script runs in <head>. */
  function markMissing(img) {
    var alt = img.getAttribute('data-fallback-src');
    if (alt) { img.removeAttribute('data-fallback-src'); img.src = alt; return; } // try a second image once
    var frame = img.closest('.art-frame');
    if (frame) frame.classList.add('is-missing');
  }
  document.addEventListener('error', function (e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && t.hasAttribute('data-fallback')) markMissing(t);
  }, true);

  document.addEventListener('DOMContentLoaded', function () {
    apply(current);

    document.addEventListener('click', function (e) {
      var opt = e.target.closest && e.target.closest('.theme-toggle__option');
      if (!opt) return;
      var theme = opt.getAttribute('data-theme-value');
      if (THEMES.indexOf(theme) > -1) { apply(theme); store(theme); }
    });

    // Catch images that already failed (e.g. script loaded late or cached failure).
    var imgs = document.querySelectorAll('img[data-fallback]');
    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].complete && imgs[i].naturalWidth === 0) markMissing(imgs[i]);
    }

    // Mobile nav
    var header = document.querySelector('.site-header');
    var toggle = header && header.querySelector('.nav-toggle');
    if (!toggle) return;

    function setOpen(open) {
      header.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    }
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    header.addEventListener('click', function (e) {
      if (e.target.closest('.site-nav__link')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (mq) {
      if (mq.matches) setOpen(false);
    });
  });
})();
