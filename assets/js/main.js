// BrightPlay — small, progressive JS. No framework, no build step.
// Currently: mobile nav open/close + Escape to dismiss.

(function () {
  const toggle = document.querySelector('[data-nav-toggle]');
  const closeBtn = document.querySelector('[data-nav-close]');
  const nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;

  const open = () => {
    nav.dataset.open = 'true';
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
    // Focus the first link for keyboard users
    const firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus({ preventScroll: true });
  };

  const close = () => {
    nav.dataset.open = 'false';
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
    toggle.focus({ preventScroll: true });
  };

  toggle.addEventListener('click', () => {
    nav.dataset.open === 'true' ? close() : open();
  });
  if (closeBtn) closeBtn.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.dataset.open === 'true') close();
  });

  // Close when a nav link is activated (single-page feel on mobile)
  nav.addEventListener('click', (e) => {
    if (e.target.matches('a')) close();
  });
})();

/* Header height as a CSS variable, so the fixed hero photo can start
   right below the header. */
(function () {
  var h = document.querySelector('.site-header');
  if (!h) return;
  function setHdr() { document.documentElement.style.setProperty('--hdr', h.offsetHeight + 'px'); }
  setHdr();
  window.addEventListener('resize', setHdr);
  window.addEventListener('load', setHdr);
})();

/* Family quotes: one at a time, moved only by the visitor (no autoplay). */
(function () {
  var root = document.querySelector('.bp-voices');
  if (!root) return;
  var slides = root.querySelectorAll('.bp-voices__slide');
  var dots = root.querySelectorAll('.bp-voices__dot');
  var i = 0;
  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.hidden = k !== i; });
    dots.forEach(function (d, k) { if (k === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current'); });
  }
  root.querySelectorAll('.bp-voices__arrow').forEach(function (b) {
    b.addEventListener('click', function () { show(i + Number(b.getAttribute('data-dir'))); });
  });
  dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); }); });
})();

/* Light the spark once, the first time the quotes scroll into view. */
(function () {
  var spark = document.querySelector('.bp-voices__spark');
  if (!spark || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { spark.classList.add('is-lit'); io.disconnect(); }
    });
  }, { threshold: 0.6 });
  io.observe(spark);
})();
